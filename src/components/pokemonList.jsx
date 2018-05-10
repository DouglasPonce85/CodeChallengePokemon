import React from "react"
import PokemonDetail from './pokemonDetail';

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
            <div key={pokemon.name} onClick={() => this.setPokemon(pokemon)}>
                <span>POKEMON: {pokemon.name}</span><br />
            </div>
        );
    }

    isPokemonSet = () => {
        return this.state.pokemonSelected ? true : false;
    }

    render() {
        return (
            <div>
                <h1>Code Challenge - DouglasPonce </h1>
                <div>
                    { this.state.listPokemons ? this.state.listPokemons.map(this.renderPokemonData) : [] }
                </div>

                <br /><hr />

                {
                    this.isPokemonSet() ?
                        <PokemonDetail
                            pokemonSelected={this.state.pokemonSelected}
                        />
                    : ''
                }
            </div>
        );
    }
}

export default PokemonList;
