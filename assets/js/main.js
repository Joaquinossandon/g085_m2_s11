const participantes = [
  "Carlos Nuñez",
  "Claudio Nuñez",
  "Dharma Reyes",
  "Felipe rivera",
  "Felipe Urtubia",
  "Fernando díaz",
  "Gabriel Alarcón",
  "Gustavo Pinto",
  "James Moreno",
  "Jorge Paillan",
  "Luis Abarca",
  "Maicon Manriquez",
  "Manuel Herrera",
  "Marcelo Emmott",
  "Maximiliano Gutierrez",
  "Michael Jamet",
  "Miguel Serrano",
  "Miguel Durán",
  "Natalia Campos",
  "Pablo Salcedo",
  "Paz Gutierrez",
  "Pedro Valdebenito",
  "Vicente Rosales",
  "Yanara Catrilelbún",
  "Beptson Cortes",
  "Luis Araya",
  "Carlos Roa",
  "Leonardo Quiroga",
  "Juan Pablo Quesada",
  "Manuel Gatica",
];

const button = document.querySelector("#ruleta");

const getRandom = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  const valorSeleccionado = array[randomNumber];
  return valorSeleccionado;
};

const renderRandom = () => {
  const persona = getRandom(participantes);
  const h1Seleccion = document.querySelector("#seleccion");
  h1Seleccion.textContent = persona;
};

button.addEventListener("click", renderRandom);
