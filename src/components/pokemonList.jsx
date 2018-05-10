import React from 'react';
import PokemonDetail from './pokemonDetail';

import {
    AppWrapper,
    AppContainer,
    PokemonListContainer,
    DetailContainer,
    PokemonCard,
    Button,
    CodeChallengeLabel,
} from './styledComponent';

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listPokemons: [],
            pokemonSelected: null,
        };
    }

    componentDidMount() {
        this.loadPokemonData();
    }

    loadPokemonData = () => {
        const url = 'https://pokeapi.co/api/v2/pokemon';
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    listPokemons: data.results
                });
            });
    }

    setPokemon = (pokemon: any) => {
        if (!pokemon) return;

        fetch(pokemon.url)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    pokemonSelected: data
                });
            });
    }

    renderPokemonData = (pokemon: any) => {
        return (
            <PokemonCard key={pokemon.name} onClick={() => this.setPokemon(pokemon)}>
                <h3>{pokemon.name}</h3><br />
                <Button>See Details</Button>
            </PokemonCard>
        );
    }

    isPokemonSet = () => {
        return this.state.pokemonSelected ? true : false;
    }

    render() {
        return (
            <AppWrapper>
                <CodeChallengeLabel>Code Challenge - DouglasPonce </CodeChallengeLabel>

                <AppContainer>
                    <PokemonListContainer>
                        { this.state.listPokemons ? this.state.listPokemons.map(this.renderPokemonData) : [] }
                    </PokemonListContainer>

                    <DetailContainer>
                        {   this.isPokemonSet() ?
                                <PokemonDetail
                                    pokemonSelected={this.state.pokemonSelected}
                                />
                            : ''
                        }
                    </DetailContainer>
                </AppContainer>
            </AppWrapper>
        );
    }
}

export default PokemonList;
