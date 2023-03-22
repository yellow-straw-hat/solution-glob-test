#!/usr/bin/env node

function foo(lists) {
    // Trier les listes par ordre croissant du premier nombre
    lists.sort(function(a, b) {
        return a[0] - b[0];
    });

    let mergedLists = [];
    let currentList = lists[0];

    for (let i = 1; i < lists.length; i++) {
        let nextList = lists[i];

        // Si les deux listes se chevauchent, fusionner les intervalles
        if (currentList[1] >= nextList[0]) {
            currentList = [currentList[0], Math.max(currentList[1], nextList[1])];
        } else {
            // Sinon, ajouter la liste courante à la liste des listes fusionnées
            mergedLists.push(currentList);
            currentList = nextList;
        }
    }

    // Ajouter la dernière liste à la liste des listes fusionnées
    mergedLists.push(currentList);

    return mergedLists;
}

// Récupérer les arguments de la ligne de commande
let args = process.argv.slice(2);

// Convertir les arguments en liste de listes
let lists = [];
for (let i = 0; i < args.length; i++) {
    let pair = args[i].split(",");
    lists.push([Number(pair[0]), Number(pair[1])]);
}

// Appeler la fonction foo() avec les listes en entrée
let mergedLists = foo(lists);

// Afficher le résultat dans la sortie standard
console.log(JSON.stringify(mergedLists));