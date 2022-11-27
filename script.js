/* // Tableau de 0 à 10.
//const array = ['0','1','2','3','4','5','6','7','8','9','10'];

// l'IA choisi son nombre entre 0 et 10.
// Fonction random.
let choixIa = Math.floor(Math.random() * 11);
console.log(`L'IA a joué ${choixIa}`);


// Le joueur choisi son nombre.
let choixPlayer = prompt("Trouvez lenuméro mystère entre 0 et 10 !");



// Compter 3 chances.
for (let chances = 0; chances <3; chances ++){
    console.log('Encore ' +chances+ ' chances !');
}


// Verifier les conditions de victoires
const resultat = verifier(choixPlayer, choixIa);

// Compare les deux nombres.

function verifier(choixPlayer, choixIa) {
    console.log(choixPlayer , choixIa);
    if (choixPlayer === choixIa){
        console.log("Vous avez gagné");
        return "Vous avez gagné";
    }
    else if (choixPlayer < choixIa){
        console.log("C'est plus ! Rejouez");
        return "C'est plus ! Rejouez";
    }
    else {
        console.log("C'est moins ! Rejouez");
        return "C'est moins ! Rejouez";
    }
}
 */

let choixIa = Math.floor(Math.random() * 11);
console.log(`L'IA a joué ${choixIa}`);


// Le joueur choisi son nombre.
let choixPlayer = prompt("Trouvez le numéro mystère entre 0 et 10 !");


function verifier(choixPlayer, choixIa) {
    
    if (choixPlayer === choixIa){
    
        alert ("Vous avez gagné");
    }
    else if (choixPlayer < choixIa){
    
        alert ("C'est plus ! Rejouez");
    }
    else {
    
        alert ("C'est moins ! Rejouez");
    }
}