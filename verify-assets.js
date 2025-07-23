// Script para verificar e corrigir os caminhos dos recursos estáticos nos arquivos HTML e JS
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');
const baseUrl = 'https://wendelrb.github.io/novo-horizonte-web-79/';

// Função para corrigir caminhos em arquivos JS
async function fixJsFiles() {
  try {
    // Encontra todos os arquivos JS na pasta assets
    const assetsDir = path.join(distDir, 'assets');
    const files = await readdir(assetsDir);
    const jsFiles = files.filter(file => file.endsWith('.js'));
    
    console.log(`Encontrados ${jsFiles.length} arquivos JS para verificar`);
    
    // Processa cada arquivo JS
    for (const jsFile of jsFiles) {
      const jsPath = path.join(assetsDir, jsFile);
      const content = fs.readFileSync(jsPath, 'utf8');
      
      // Verifica se há referências a /lovable-uploads/ no arquivo
      if (content.includes('"/lovable-uploads/')) {
        console.log(`Corrigindo caminhos de imagens em ${jsFile}`);
        
        // Substitui caminhos de imagens
        const correctedContent = content.replace(/"(\/lovable-uploads\/[^"]+)"/g, `"${baseUrl}$1"`);
        
        // Escreve o arquivo corrigido
        fs.writeFileSync(jsPath, correctedContent, 'utf8');
        console.log(`Arquivo ${jsFile} corrigido com sucesso`);
      }
    }
  } catch (error) {
    console.error('Erro ao processar arquivos JS:', error);
  }
}

// Função principal para verificar e corrigir o arquivo HTML
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo index.html:', err);
    return;
  }

  // Verifica se os caminhos já estão corretos
  const hasAbsolutePaths = data.includes('src="/') || data.includes('href="/');
  const hasRelativePaths = data.includes('src="./') || data.includes('href="./');
  const hasCorrectBasePath = data.includes(`src="${baseUrl}`) || data.includes(`href="${baseUrl}`);

  console.log('Verificação de caminhos:');
  console.log('- Caminhos absolutos:', hasAbsolutePaths);
  console.log('- Caminhos relativos:', hasRelativePaths);
  console.log('- Caminhos com base URL correto:', hasCorrectBasePath);

  // Corrige os caminhos
  let correctedContent = data;

  // Corrige caminhos absolutos
  if (hasAbsolutePaths) {
    correctedContent = correctedContent.replace(/src=\"\//g, `src=\"${baseUrl}`);
    correctedContent = correctedContent.replace(/href=\"\//g, `href=\"${baseUrl}`);
    console.log('Corrigidos caminhos absolutos');
  }

  // Corrige caminhos relativos
  if (hasRelativePaths) {
    correctedContent = correctedContent.replace(/src=\"\.\//g, `src=\"${baseUrl}`);
    correctedContent = correctedContent.replace(/href=\"\.\//g, `href=\"${baseUrl}`);
    console.log('Corrigidos caminhos relativos');
  }

  // Verifica se há referências a assets sem o caminho completo
  const assetsPattern = /src=\"assets\//g;
  const hasAssetsWithoutPath = assetsPattern.test(correctedContent);
  if (hasAssetsWithoutPath) {
    correctedContent = correctedContent.replace(/src=\"assets\//g, `src=\"${baseUrl}assets/`);
    correctedContent = correctedContent.replace(/href=\"assets\//g, `href=\"${baseUrl}assets/`);
    console.log('Corrigidos caminhos para assets sem base URL');
  }

  // Escreve o arquivo corrigido
  fs.writeFile(indexPath, correctedContent, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo index.html corrigido:', err);
      return;
    }
    console.log('Verificação e correção de caminhos concluída com sucesso!');
    
    // Copia o arquivo index.html para 404.html na pasta dist
    const notFoundPath = path.join(__dirname, 'dist', '404.html');
    fs.copyFile(indexPath, notFoundPath, (err) => {
      if (err) {
        console.error('Erro ao copiar index.html para 404.html:', err);
        return;
      }
      console.log('Arquivo 404.html criado com sucesso!');
    });
    
    // Corrige caminhos em arquivos JS
    fixJsFiles();
  });
});