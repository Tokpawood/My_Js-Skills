// créer un tableau
let tokpa = ["Romaric", "Fabrice"];
console.log(tokpa);
// voir ses indexes
console.log(tokpa.length);
// accéder (via son index à un élément du tableau)
let tokpaFirstLastName = tokpa[0];
console.log(tokpaFirstLastName);
let tokpaEndLastName = tokpa[1];

// Boucler sur un tableau:
tokpa.forEach(function(item, index, array){
    console.log(item, index);
})

// Ajouter des données à la fin du tableau: 
let tokpaNewLenght = tokpa.push(24);
console.log(tokpa);

/*
La méthode push(): ajouee un nouveau élément à la fin du tableau
*/

// Supprimer le dernier élément du tableau:
let tokpaRemoveLastItem = tokpa.pop();
console.log(tokpa);

/*
La méthode pop(): supprime le dernier élément du tableau
*/

// Supprimer le premier élément du tableau:
let tokpaRemoveFirstItem = tokpa.shift();
console.log(tokpa);

/*
La méthode shift(): supprime le premier élément du tableau
*/

// Ajouter un élément au début du tableau:
let tokpaAddItemBegining = tokpa.unshift("Romaric");
console.log(tokpa);

// Trouver l'index d'un élément:
let tokpaFindIndexOfItem = tokpa.indexOf("Fabrice");
console.log(tokpaFindIndexOfItem);

// supprimer un élément par son index:
let tokpaRemoveItemFromIndex = tokpa.splice(1);
console.log(tokpa);
    // Autre méthode:
    {
        let marque = ["Apple", "Samsung","Huawei","Google", "Microsoft"];
        console.log(marque);
        let a = 1;
        n = 2;
        let removeItem = marque.splice(a, n);
        console.log(marque);
        // n définit le nombre d'élément à supprimer à partir de la position 'a'
    }

// copier un tableau: 
let copiedTokpa = tokpa.slice();
console.log(copiedTokpa);

// Accéder aux éléments d'un tableau:
    {
        let arrayAccess = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25 ];
        console.log(arrayAccess);
        // accéder aux élément à partir de leur index:
        console.log(arrayAccess[15]); // affiche 16
        console.log(arrayAccess[19]); // affiche 20
        console.log(arrayAccess[0]); // affiche 1

        // afficher le derneir élément de la list:
        console.log(arrayAccess[arrayAccess.length -1]);
    }