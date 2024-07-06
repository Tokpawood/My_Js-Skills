// Array.from() ==> permet de creer une nouvelle instance d'Array (une copee superficielle ) à partir d'un objet itérable semblable à un tableau: 
console.log(Array.from("Tokpa"));
console.log(Array.from([1, 2, 3, 4], (x) => x * x ))

/* Syntaxe:

    Array.from(arrayLike[, ffonctionMap [, thisArg]]);

        ==>
            arrayLike : Objet itérable ou tableau similaire dont on souhaite créer
            fonctionMap : Optionnelle : fonction appliquée à chaque élément de arrayLike pour le transformer en un nouvel élément du nouveau tableau
            thisArg : Optionnel : contexte dans lequel fonctionMap est appelée

*/

// Créer avec une fonction
function tokpastein(){
    return Array.from(arguments)
}
console.log(tokpastein(24, "Romaric", "Fabriice", "Recruteur"));

// Créer avec les objets set
let a = new Set(["Tokpa", "Fabrie", "Romaric", 24, "Recruteur"]);
console.log(Array.from(a));

// Créer avec un objet Map
let b = new Map([
    ["Tokpa", "Fabrice"],
    ["Romaric", "Recruteur"],
    [24, "Fabriice"]
])
console.log(Array.from(b));
console.log(Array.from(b.values())); // En appliquant la méthode values(), il créer un nouveau tableau avec les derniers éléments ddu tableau d'origine
console.log(Array.from(b.keys())); // En appliquant la méthode values(), il créer un nouveau tableau avec les premiers éléments du tableau d'origine

// créer avec un string
let d = " I stand with you";
console.log(Array.from(d));

// En utilisant une fonction fléchée pour remplacer map:
let e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Array.from(e, (x) => x + d));

// Avec une séquence de nombre
console.log(Array.from({length: 30}, (v, k) => k));