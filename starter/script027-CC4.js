/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const Mark = {
    nom : "Mark",
    taille : 178,
    poids : 87,
    calcBMI() {
        return `${this.poids / this.taille*this.taille}`;
    }
}
const John = {
    nom : "John",
    taille : 167,
    poids : 94,
    calcBMI2() {
        return `${this.poids / this.taille*this.taille}`;
    }
}

if (John.calcBMI2() > Mark.calcBMI()) {
    console.log("John a un BMI supérieur à Mark.");
} else if (John.calcBMI2() === Mark.calcBMI()) {
    console.log("John et Mark ont le même BMI.");
} else {
    console.log("Mark a un BMI supérieur à John.");
}




