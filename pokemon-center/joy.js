const jsonfile = require('jsonfile');

const pokedex = 'pokedex.json';

jsonfile.readFile(pokedex).then((pokemons) =>  {
    pokemons.pokemon.map(pokemon => console.log(pokemon.name));
});