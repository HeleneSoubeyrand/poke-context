import React from 'react';
import { useState, useEffect } from 'react'

const Home = () => {
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => setPokemon(data))
    }, [id])

    const handleClick = () => {
        const min = 1
        const max = 151 
        
        let random = Math.floor(Math.random() * (max - min)) + min
        console.log(random)
        setId(random)
    }
  
    console.log("test", pokemon)

    return (
        <div className="d-flex flex-column col-3 mx-auto mt-5 " >
            {pokemon === null ?
                <p>There is no Pokemon for the moment ... Wait !</p>
            :
                <div className="card px-2">
                    <img 
                        className="card-img-top"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
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
            }
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