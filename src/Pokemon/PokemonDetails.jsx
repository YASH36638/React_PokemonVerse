import "./PokemonDetails.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [name]);

  if (!pokemon) return <h2>Loading...</h2>;

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
        <p>
          <strong>Height:</strong> {pokemon.height}
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight}
        </p>
        <p>
          <strong>Base Experience:</strong> {pokemon.base_experience}
        </p>

        <div className="moves-section">
          <h3>Moves</h3>
          <ul className="moves-list">
            {pokemon.moves.slice(0, 30).map((m) => (
              <li key={m.move.name}>{m.move.name}</li>
            ))}
          </ul>
        </div>

        <Link to="/" className="back-link">
          ⬅️ Back to Pokémon List
        </Link>
      </div>
    </div>
  );
};
