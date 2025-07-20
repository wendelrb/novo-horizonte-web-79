// Script para corrigir os caminhos dos recursos estáticos no arquivo index.html
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist', 'index.html');

fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo index.html:', err);
    return;
  }

  // Substitui os caminhos absolutos por caminhos relativos ao base path
  const correctedContent = data.replace(/src=\"\//g, 'src="/novo-horizonte-web-79/')
                              .replace(/href=\"\//g, 'href="/novo-horizonte-web-79/');

  fs.writeFile(indexPath, correctedContent, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo index.html corrigido:', err);
      return;
    }
    console.log('Caminhos corrigidos com sucesso no arquivo index.html!');
  });
});