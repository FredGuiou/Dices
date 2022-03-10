//Création d'une Div avec classe 

// var divDice = document.createElement("div");


//affectation d'une classe à l'Element

// divDice.className = ("dice");

//Récupération du parent

var parentDice = document.querySelector("#player");

//adoption

// parentDice.appendChild(divDice);

//CheckPoint OK 1ere partie terminée


var result = 0;

//Ajout d'une fonction Math.random Min 1 - Max 6

function launchDice(min, max) {
            result = Math.floor(Math.random() * (max - min + 1)) + min;
            var divDice = document.createElement("div");
            divDice.style.backgroundPosition = `${(result-1)*-100}px`;
            divDice.className = "dice";
            parentDice.appendChild(divDice);
}

// launchDice(1, 6);
// console.log(result);

//On crée une fonction pour déplacer le background affiché à l'écran

// function faceResult() {
//     for (i = 1; i < 7; i++) {
//         if (i === result) {
//             divDice.style.backgroundPosition = `${(i-1)*-100}px`;
//         };
//     };
// };

// faceResult();

//CheckPoint OK 2eme partie terminée


//On a demande à l'utilisateur combien dés il souhaite lancer

var numberOfLaunch = parseInt(prompt("Combien de lancé(s) souhiates tu effectuer ?"));

function generateDice() {
    for (i = 0; i < numberOfLaunch; i++) {
            launchDice(1, 6);
            console.log(result);
        };
    };


generateDice();