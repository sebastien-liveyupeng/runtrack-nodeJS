const fs = require('fs');


fs.readdir('.', { withFileTypes: true }, (err, items) => {
  if (err) return console.error('Erreur :', err);

  const dirs = items.filter(i => i.isDirectory()).map(i => i.name);

  console.log(dirs.length ? 'Dossiers dans le repertoire :' : 'Aucun dossier trouvé.');
  dirs.forEach(d => console.log(d));
});
