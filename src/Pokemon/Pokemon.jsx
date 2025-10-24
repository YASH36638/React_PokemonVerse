import { useEffect, useState } from 'react';
// import './index.css'
// import "./PokemonDetails.css";

import { PokemonCards } from './PokemonCards';
import { Outlet } from 'react-router-dom';



export const Pokemon = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [pokemonData, setPokemonData] = useState([]);
    const [sPokemon, setSPokemon] = useState('');
    const [found, setFound] = useState(true);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=135";

    const displayData = (data) => {
        return (
            <PokemonCards data={data}>

            </PokemonCards>
        );
    }



    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            console.log(data)
            const detailedData = data.results.map(async (curr) => {
                const API1 = `${curr.url}`;
                const res1 = await fetch(API1);
                const Data = await res1.json();
                // console.log(Data.name);
                setLoading(false);
                return Data;
            });
            // console.log(detailedData);
            const allDetails = await Promise.all(detailedData);
            // console.log(allDetails);
            setPokemonData(allDetails);
        }
        catch (error) {
            console.log(error);
            setError(error)
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchPokemon();
    }, [])

    const searchData = pokemonData.filter((curel) =>
        curel.name.toLowerCase().includes(sPokemon.toLowerCase()));

    if (error) {
        return <h1>Error:{error.message}</h1>
    }

    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
        <>
            <section className="container">
                <header>
                    <h1>Pokemon-Cards</h1>
                </header>
                <div className='pokemon-search'>
                    <input
                        type='text'
                        placeholder='Search Pokemon'
                        value={sPokemon}
                        onChange={e => setSPokemon(e.target.value)}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            outline: 'none',
                            width: '200px',
                            fontSize: '14px'
                        }}
                    /></div>

                <div>
                    <ul className="cards">
                        {
                            searchData.map((curel) => {
                                return <PokemonCards key={curel.id} data={curel} />
                            })
                        }

                    </ul>

                </div>

            </section>
            <Outlet />
        </>
    );
};

