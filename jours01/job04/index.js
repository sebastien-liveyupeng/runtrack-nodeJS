const fs = require('fs');
const path = require('path');

const currentDir = '.';

fs.readdir(currentDir, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du répertoire:', err);
    return;
  }

  const directories = files
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log('Contenue du repertoire courant :');
  directories.forEach(dir => console.log(dir));
});
// affiche uniqument les dossiers du repertoire courant sans afficher les fichiers