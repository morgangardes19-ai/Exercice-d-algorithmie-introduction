// ====================== EXERCICE INVERSEMENT VARIABLE =================
// let variable1 = 5;
// let variable2 = 9;
// // travail ici
// let stockage = variable2;
// variable2 = variable1;
// variable1 = stockage;
// console.log(variable1, variable2);
// ======================================================================

// let message = 'Hello';
// console.log(message);

// let h = 'h';
// let e = 'e';
// let l = 'l';
// let o = 'o';
// let w = 'w';
// let r = 'r';
// let d = 'd';
// let espace = ' ';
// console.log(h+e+l+l+o+espace+w+o+r+l+d);

// ================== EXERCICE HELLO WORLD EN COLONNE AVEC SAUT DE LIGNE ===============
// let h = 'h';
// let e = 'e';
// let l = 'l';
// let o = 'o';
// let w = 'w';
// let r = 'r';
// let d = 'd';
// console.log(`${h}\n${e}\n${l}\n${l}\n${o}\n\n${w}\n${o}\n${r}\n${l}\n${d}`);
// =====================================================================================

// ============================ EXERCICE AGE MAJEUR/MINEUR ========================
// const age = 20
// console.log(age);

// if (age >= 18) {
//     console.log("Majeur");
// } else {
//     console.log("Mineur");
// }
// ================================================================================

// ===============================FIZZBUZZ======================================
// function fizzbuzz(nombre) {
//     // code les conditions ici
//     if (nombre % 3 === 0 &&  nombre % 5 !== 0) {
//         console.log(nombre, "fizz")
//     }
//     if (nombre % 5 === 0 && nombre % 3 !== 0) {
//         console.log(nombre, "buzz")
//     }
//      if (nombre % 3 === 0 &&  nombre % 5 === 0) {
//         console.log(nombre, "fizzbuzz")
//     }
//     if (nombre % 5 !== 0 &&  nombre % 3 !== 0) {
//         console.log (nombre)
//     }
// }

// fizzbuzz(2);
// fizzbuzz(5);
// fizzbuzz(6);
// fizzbuzz(11);
// fizzbuzz(30);
// fizzbuzz(55);

// ============ Function fizzbuzz alternative (+ optimisé) =====================
// function fizzbuzzAlternative(nombre) {
//     let message = "";
//     // code les conditions ici
//     if (nombre % 3 === 0) {
//         message += "fizz";
//         // message = message + "fizz";
//     }
//     if (nombre % 5 === 0) {
//         message += "buzz";
//         // message = message + "buzz";
//     }
//     if (message === "") {
//         message = nombre;
//     }

//     console.log(message);

// }

// fizzbuzzAlternative(2)
// =============================================================================

//  ============= EXERCICE COMPTE 0-10 ====================
// for (let pas = 0; pas <= 10; pas++){
//     console.log(pas);
// }

// let compte = [0,1,2,3,4,5,6,7,8,9,10]
// compte.forEach(int => {
//     console.log(int);
// })
// =======================================================

// ==================== EXERCICE TABLEAU ALPHABET FOREACH TROUVER "S" =======================
// let letters = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

// let letterToFind = "S";
// let compteur = 0;

// letters.forEach((letter) => {
//   // console.log(letter);

//   compteur++;
//   if (letter === letterToFind) {
//     console.log(
//       `La lettre recherchée : ${letterToFind}, se trouve à la ${compteur} eme position de l'alphabet.`,
//     );
//   }
// });
// ================================================================================

// ===================================== EXERCICE FONCTION SURFACE RECTANGLE ==============================
// function multiplier(L, l) {
//      if (L===l) {
//  console.log("Ceci est un carré.")
//     }
//     return L * l;
// }


// let resultat = multiplier(10, 10);
// console.log(resultat);
// ========================================================================================================

