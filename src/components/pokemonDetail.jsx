import * as React from 'react';

type IPokemonDetailProps = {
  pokemonSelected: any;
};

function PokemonDetail({
  pokemonSelected
}: IPokemonDetailProps) {

  const renderPokemonMoves = (pokemonMoveInfo: any) => {
    return (
      <li key={pokemonMoveInfo.move.name}>{pokemonMoveInfo.move.name}</li>
    );
  }

  return (
    <div>
        <h3>Pokemon selected: {pokemonSelected.name} </h3>
        <span>Weight: {pokemonSelected.weight} </span><br />
        <span>Moves: </span><br />
        <ul>
          {  pokemonSelected.moves ? pokemonSelected.moves.map(renderPokemonMoves) : [] }
        </ul>
    </div>
  );
}

export default PokemonDetail;
