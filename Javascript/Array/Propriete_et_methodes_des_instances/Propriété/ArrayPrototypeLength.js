/*
    La propriété length est un entier non-signé de 32 bits qui indique le nombre d'éléments présents dans le tableau.
    Elle est toujours supérieure au plus grand indice du tableau.

    La valeur de la propriété length est un entier de signe positif dont la valeur est inférieur à 2 à la puissance 32.
*/

let tokpa = ["Romaric", "Fabrice", "Recruteur"];
console.log(tokpa.length); // On a 3 éléments
/*
let a = new Array(4294967296); // 2 à la puissance 32
let b = new Array(-100); // Valeur négative
console.log(a.length); // RangeError: Invalid array length
console.log(b.length); // RangeError: Invalid array length
*/

let c = [];
c.length = Math.pow(2, 32) -1; // On déclare une longueur inférieure à  2 puissance 32
console.log(c.length);