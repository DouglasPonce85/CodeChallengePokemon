import * as React from 'react';

import {
  DetailContainerList,
  DetailContainerLabel,
  DetailContainerWrapper,
  DetailContainerImg,
} from './styledComponent';

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
    <DetailContainerWrapper>
        <DetailContainerLabel>Pokemon selected: {pokemonSelected.name} </DetailContainerLabel>

        <DetailContainerImg>
          <img src={pokemonSelected.sprites.front_default} alt={pokemonSelected.name} />
          <img src={pokemonSelected.sprites.back_shiny} alt={pokemonSelected.name} />
        </DetailContainerImg>

        <span>Weight: {pokemonSelected.weight} </span><br />
        <span>Moves: </span><br />
        <DetailContainerList>
          {  pokemonSelected.moves ? pokemonSelected.moves.map(renderPokemonMoves) : [] }
        </DetailContainerList>
    </DetailContainerWrapper>
  );
}

export default PokemonDetail;
