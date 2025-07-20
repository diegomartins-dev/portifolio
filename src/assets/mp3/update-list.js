const fs = require('fs');
const path = require('path');

const mp3Dir = __dirname;
const jsonPath = path.join(mp3Dir, 'list.json');

function parseFileName(filename) {
  const name = filename.replace(/\.mp3$/i, '');
  const idx = name.indexOf('_');
  if (idx !== -1) {
    const artist = name.slice(0, idx).replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim();
    const title = name.slice(idx + 1).replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim();
    return { artist, title };
  } else {
    return { artist: '', title: name.replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim() };
  }
}

fs.readdir(mp3Dir, (err, files) => {
  if (err) {
    console.error('Erro ao ler a pasta:', err);
    process.exit(1);
  }
  const mp3s = files.filter(f => f.toLowerCase().endsWith('.mp3'));
  const list = mp3s.map(file => {
    const { artist, title } = parseFileName(file);
    return { file, title, artist };
  });
  fs.writeFile(jsonPath, JSON.stringify(list, null, 2), err => {
    if (err) {
      console.error('Erro ao salvar list.json:', err);
      process.exit(1);
    }
    console.log(`list.json atualizado com ${list.length} músicas.`);
  });
}); 