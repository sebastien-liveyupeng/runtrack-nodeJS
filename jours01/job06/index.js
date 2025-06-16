const fs = require('fs');

// asybchrone
const contenu = fs.readFileSync('text.txt', 'utf8');

// Affichage du contenu
console.log('Contenu de text.txt :');
console.log(contenu);
