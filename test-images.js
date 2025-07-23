// Script para testar se as imagens estão sendo carregadas corretamente
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://wendelrb.github.io/novo-horizonte-web-79/';
const distDir = path.join(__dirname, 'dist');

console.log('Verificando imagens das unidades...');

// Verifica se as imagens existem na pasta dist
const uploadsDir = path.join(distDir, 'lovable-uploads');
if (fs.existsSync(uploadsDir)) {
  const files = fs.readdirSync(uploadsDir);
  console.log(`Encontradas ${files.length} imagens na pasta dist/lovable-uploads:`);
  files.forEach(file => {
    console.log(`- ${file}`);
  });
} else {
  console.error('Pasta dist/lovable-uploads não encontrada!');
}

// Verifica se os caminhos das imagens no arquivo JS estão corretos
const jsDir = path.join(distDir, 'assets');
const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));

if (jsFiles.length > 0) {
  const jsPath = path.join(jsDir, jsFiles[0]);
  const jsContent = fs.readFileSync(jsPath, 'utf8');
  
  // Verifica se há referências ao caminho base correto
  const hasCorrectImagePaths = jsContent.includes(`${baseUrl}lovable-uploads/`);
  console.log('\nVerificação de caminhos no arquivo JS:');
  console.log(`- Caminhos com base URL correto: ${hasCorrectImagePaths}`);
  
  // Verifica se ainda há caminhos absolutos sem o base URL
  const hasAbsoluteImagePaths = jsContent.includes('"/lovable-uploads/');
  console.log(`- Caminhos absolutos sem base URL: ${hasAbsoluteImagePaths}`);
  
  if (hasCorrectImagePaths && !hasAbsoluteImagePaths) {
    console.log('\n✅ Os caminhos das imagens foram corrigidos com sucesso!');
  } else if (hasCorrectImagePaths && hasAbsoluteImagePaths) {
    console.log('\n⚠️ Alguns caminhos foram corrigidos, mas ainda existem caminhos absolutos sem o base URL.');
  } else {
    console.log('\n❌ Os caminhos das imagens não foram corrigidos corretamente.');
  }
} else {
  console.error('Nenhum arquivo JS encontrado na pasta dist/assets!');
}

console.log('\nPara testar o site, acesse: ' + baseUrl);