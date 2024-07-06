/* Permet de déterminer si l'objet passé en argument est un objet array.
    ==> Si (ture): alors le paramètre passé à la fonction est de type Array
    ==> Si (false): alors le paramètre passé à la fonction n'est pas de type Array

    Synthaxe : Array.isArray(value)
    Paramètre : value : le type de données à vérifier 
    Valeur de retour : booléen (true ou false)

*/

let g = [1, 2, 3, 4];
console.log(Array.isArray(g));

// Les appel qui renvoient true:
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array(1, 2, 3, 4, 5, "Tokpa")));
console.log(Array.isArray(new Array(3)));
console.log(Array.isArray(Array.prototype));// est lui meme un array

// Les appels qui renvoient false:

console.log(Array.isArray("Tokpa"));
console.log(Array.isArray(123));
console.log(Array.isArray(true));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(17));
console.log(Array.isArray("Array"));
console.log(Array.isArray(false));
console.log(Array.isArray(new Uint8Array(32)));
console.log(Array.isArray({_proto_: Array.prototype}));