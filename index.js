//VARIABLES GLOBALES

const contenedorNintendo = document.querySelector(".nintendo");

let pokemonName = "";

//ESCUCHADORES DE EVENTOS

document.addEventListener("DOMContentLoaded", getPokemon);

//FUNCIONES

async function getPokemon() {
  let randomNumber = Math.ceil(Math.random() * 905);

  const respuesta = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
  );

  const resultado = await respuesta.json();

  contenedorNintendo.innerHTML = `

    <img width='200px' src = '${resultado.sprites.front_default}' />

    <input class='input' type='text' placeholder='¿Quien es este pokemon?' />

    <button type='button' onClick={checkPokemon()}>Probar</button>

    `;

  pokemonName = resultado.name;
}

function checkPokemon() {
  let inputPokemon = document.querySelector(".input").value;

  console.log(inputPokemon, pokemonName);

  if (inputPokemon === pokemonName) {
    getPokemon();
  } else {
    document.querySelector(".input").value = "";
  }
}
