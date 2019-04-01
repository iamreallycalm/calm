import jsonfile from 'jsonfile';

const pokedex = 'pokemon-center/pokedex.json';

const showPokemons = () => jsonfile.read(pokedex).then((pokemons) =>  {
    pokemons.map(pokemon => console.log(pokemon.name));
});

export default showPokemons;