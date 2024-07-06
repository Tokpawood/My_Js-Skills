/*
La propriété length d'un tableau est liée aux propriétés numériques du tableau.

     ==> Les méthodes natives qui utilise length sont:
     -join()
     -slice()
     -indexOf()
     -etc
    ==> Les méthodes qui modiiifient le tableau et la propriété length sont:
     -push() == ajoute un élément à la fin du tableau
     -pop() == supprime le dernier élément du tableau
     -unshift() == ajout un élément au début du tableau
     -splice() ==supprime un élément à partir de son index

*/

let tokpa = []; // j'initialise mon arrzy
tokpa.push("Fabrice", "Romaric", 24, "Recruteur", "Bingerville"); // j'ajoute des éléments à mon array à travers la méthode push()
console.log(tokpa); // Ma variable tokpa contient maintement 5 éléments soit 5 index.

tokpa[10] = "Devops" // Ici je donne un nouveau index à élémént "Devops" valable que pour lui.
/*
NB: le length de tokpa sera donc 11.
*/
console.log(tokpa);

tokpa.length = 15; // ici je modifie directement la propriété an donnant un length de 15 à mon array tokpa

tokpa.length = 9; // Ici en diminuant le length, on supprime les élément du tableau
console.log(tokpa);

//Création d'un tablelau en utilisant le résultat de sa correspondance :

{
    let maRagexp = /d(b+)(d)/i;
    let monTableau = maRagexp.exec("cdbBdbsbz");
    console.log(monTableau); // Mon tableau contient les groupes de caractères trouvés dans le mot "cdbBdbsbz"
}