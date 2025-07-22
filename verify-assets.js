// Script para verificar e corrigir os caminhos dos recursos estáticos no arquivo index.html
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, 'dist', 'index.html');
const baseUrl = 'https://wendelrb.github.io/novo-horizonte-web-79/';

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
  });
});