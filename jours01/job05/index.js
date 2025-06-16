const path = require('path');

// __filename = chemin complet fichier 
const fichier = __filename;

//  nom du fichier
const nomFichier = path.basename(fichier);

// extension du fichier
const extension = path.extname(fichier);

//répertoire parent
const repertoireParent = path.dirname(fichier);


console.log("Nom du fichier :", nomFichier);
console.log("Extension du fichhier:", extension);
console.log("Répertoire parent du fichier :", repertoireParent);
