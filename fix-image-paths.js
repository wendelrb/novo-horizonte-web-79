// Script para corrigir os caminhos das imagens nas unidades
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para o arquivo do componente UnitsSection.tsx
const unitsSectionPath = path.join(__dirname, 'src', 'components', 'UnitsSection.tsx');

// Base URL para produção
const baseUrl = 'https://wendelrb.github.io/novo-horizonte-web-79';

fs.readFile(unitsSectionPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo UnitsSection.tsx:', err);
    return;
  }

  // Substitui os caminhos das imagens para incluir o base URL
  // Procura por padrões como: image: "/lovable-uploads/..."
  const correctedContent = data.replace(/image:\s*"(\/lovable-uploads\/[^"]+)"/g, `image: "${baseUrl}$1"`);

  fs.writeFile(unitsSectionPath, correctedContent, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo UnitsSection.tsx corrigido:', err);
      return;
    }
    console.log('Caminhos das imagens corrigidos com sucesso no arquivo UnitsSection.tsx!');
  });
});