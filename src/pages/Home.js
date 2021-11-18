import { useState, useEffect } from 'react'

const Home = () => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        getPokemon(1)
    }, [])

    const getPokemon = (id) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => setPokemon(data))
    }

    const handleClick = () => {
        const min = 1
        const max = 151 
        let random = Math.floor(Math.random() * (max - min)) + min
        console.log(random)
        getPokemon(random)
    }
  
    console.log("test", pokemon)
    
    if (!pokemon) {
       return <p>There is no Pokemon for the moment ... Wait !</p>
    }


    return (
        <div className="d-flex flex-column col-4 mx-auto mt-5" >
            <div className="card px-2">
                <img 
                    className="card-img-top"
                    // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    src={pokemon.sprites.other["official-artwork"].front_default}
                    alt={pokemon.name}
                />
                <div class="card-body">
                    <h3 className="card-title mb-3" style= {{ textTransform: "uppercase" }}>{pokemon.name}</h3>
                    <div>
                        <p className="mb-1">Height : {pokemon.height}</p>
                        <p>Weight : {pokemon.weight}</p>
                        <h5>Types :</h5>
                        <ul>
                            {pokemon.types.map(slot =>
                            <li>{slot.type.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <button 
                className="mt-4"
                onClick={handleClick}
            >
                Show random pokemon
            </button>
        </div>
 
    );
};

export default Home;