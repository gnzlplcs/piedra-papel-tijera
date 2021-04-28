// The same game using Switch conditional

const options = ["piedra", "papel", "tijeras"];
let choice = prompt("Escribe tu opción: piedra, papel o tijeras");

play(choice);

function play(choice) {
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];
  console.log(`Tu elección: ${choice}`);
  console.log(`Computadora: ${computerChoice}`);

  switch(choice == computerChoice) {
    case true:
      console.log('Empate');
      break;
    default: {
      switch((choice == 'piedra' && computerChoice == 'tijeras') || (choice == 'papel' && computerChoice == 'piedra') || (choice == 'tijeras' && computerChoice == 'papel')) {
        case true:
          console.log("¡Ganaste!");
          break;
        default:
          console.log("Lo siento, perdiste");
      }
    }
  }
}
