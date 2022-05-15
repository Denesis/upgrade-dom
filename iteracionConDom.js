// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showmeBtn = document.querySelector(".showme");
console.log(showmeBtn);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pilladoTitle = document.querySelector("#pillado");
console.log(pilladoTitle);

// 1.3 Usa querySelector para mostrar por consola todos los p

const allParrafo = document.querySelectorAll("p");
console.log(allParrafo);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const allPokemonTitles = document.querySelectorAll(".pokemon");
console.log(allPokemonTitles);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
// data-function="testMe".

const atributteTestMe = document.querySelectorAll(
  'span[data-function="testMe"]'
);
console.log(atributteTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

const atributtePersonjes = document.querySelectorAll(
  'span[data-function="testMe"]'
);

console.log(atributtePersonjes[2]);
