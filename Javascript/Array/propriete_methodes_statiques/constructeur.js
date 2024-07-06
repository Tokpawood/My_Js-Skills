// Constructeur array()

/*
Le constructeur Array() permet de créer les objets Array

Syntax :    [element0, element1, ... elementN]
            new Array(element0, element1 [, ...[, elementN]])
            new Array(longueurTableau)
*/

let tokpa = new Array("Romaric", "Fabrice"); // Ici on crée le tableau avec un élément
console.log(tokpa.length); // On trouve 1 index
console.log(tokpa); // on a un tableau 
console.log(tokpa[0]); // Romaric se situe à l'index 0


let tokpas = new Array(2); // ici on cée un tableau avec un seul constructeur. La proprié length  veaut le nombre passé en argument
console.log(tokpas); // on a deux index ici
console.log(tokpas.length);
console.log(tokpas[0]);