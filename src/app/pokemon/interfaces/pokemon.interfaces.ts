import { Pokemon, Result } from './pokeapi-pokemon.interfaces';

export interface PokemonWithDetails extends Result, Pokemon {}
