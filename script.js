const options = ["piedra", "papel", "tijeras"];
let choice = prompt("Escribe tu opción: piedra, papel o tijeras");

play(choice);

function play(choice) {
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];
  console.log(`Tu elección: ${choice}`);
  console.log(`Computadora: ${computerChoice}`);
  if(choice == computerChoice) {
    console.log(`Resultado: Empate`);
  } else if ((choice == 'piedra' && computerChoice == 'tijeras') || (choice == 'papel' && computerChoice == 'piedra') || (choice == 'tijeras' && computerChoice == 'papel')) {
    console.log("¡Ganaste!");
  } else {
    console.log("Lo siento, perdiste");
  }
}
