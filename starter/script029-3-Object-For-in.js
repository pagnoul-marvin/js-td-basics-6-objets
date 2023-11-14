/*****************************
 * 029-2 - Boucles pour parcourir des objets
 */

// 2. Boucle for/in pour parcourir des objets

/*
for(const prop in objet) {
  console.log(prop + " : " + objet[prop]);
}   
*/

/*
EXERCICE 1 : 
Parcours l'objet mesFruits pour afficher, pour chacun des fruits, "Le fruit … coûte … €"
*/
const mesFruits = {
  Pomme: 1.3,
  Poire: 0.5,
  Ananas: 3
};
console.log("Exercice 1");

// Écris ton code ici
for (const Pomme in mesFruits) {
  console.log(`${Pomme} coûte ${mesFruits[Pomme]}`);
}
/*
EXERCICE 2 :
Parcours l'objet fruit pour afficher chacune de ses propriétés avec, pour chacune, sa valeur
*/
const fruit = {
  Nom: "Pomme",
  Prix: 0.3,
  Couleur: "Verte",
  Variété: "Golden"
};
console.log("Exercice 2");
// Écris ton code ici

for (const Nom in fruit) {
  console.log(`${Nom} ${fruit[Nom]}`);
}


// Un mot est un objet de type String => ceci fonctionne également…
/*
EXERCICE 3 :
Parcours le mot "Bonjour" pour afficher séparément chacune de ses lettres
*/
const mot = "Bonjour";

// Écris ton code ici

for (const bonjour in mot) {
  console.log(`${mot[bonjour]}`);
}
