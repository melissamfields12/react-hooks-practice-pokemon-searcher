import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

   const mappedPokemon = pokemon.map((poke) => {
       return ( <PokemonCard 
          key={poke.id}
          pokemon={poke} 
          />    
       )
})
 
  return (
    <Card.Group itemsPerRow={6}>
      {mappedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
