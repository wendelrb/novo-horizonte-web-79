// Script para corrigir os caminhos dos recursos estáticos no arquivo index.html
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, 'dist', 'index.html');

fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo index.html:', err);
    return;
  }

  // Substitui os caminhos absolutos por caminhos relativos ao base path
  let correctedContent = data.replace(/src="\//g, 'src="https://wendelrb.github.io/novo-horizonte-web-79/')
                            .replace(/href="\//g, 'href="https://wendelrb.github.io/novo-horizonte-web-79/');
  
  // Corrige qualquer referência direta ao arquivo fonte main.tsx
  correctedContent = correctedContent.replace(/src="(https:\/\/wendelrb\.github\.io\/novo-horizonte-web-79)?\/?\/src\/main\.tsx"/g, 'src="https://wendelrb.github.io/novo-horizonte-web-79/assets/index.js"');

  fs.writeFile(indexPath, correctedContent, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo index.html corrigido:', err);
      return;
    }
    console.log('Caminhos corrigidos com sucesso no arquivo index.html!');
  });
});