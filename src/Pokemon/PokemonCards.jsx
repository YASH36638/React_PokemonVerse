import "./PokemonCards.css"
import { Link } from "react-router-dom"

export const PokemonCards = ({ data }) => {
  return (
    <>
      <li className="pokemon-card">
        <figure><img src={data.sprites.other.dream_world.front_default}
          alt={data.name} className="pokemon-image" />
        </figure>
        <h1 className="pokemon-name">{data.name}</h1>
        <div className="pokemon-info pokemon-highlight">
          <p> {data.types.map((curel) => curel.type.name).join(',')

          }</p>

        </div>
        <div className="grid-three-cols">
          <p className="pokemon-info">
            <span> Height:</span>{data.height}
          </p>
          <p className="pokemon-info">
            <span> Weight:</span>{data.weight}
          </p>
          <p className="pokemon-info">
            <span> speed:</span>{data.stats[5].base_stat}
          </p>
        </div>

        <div className="grid-three-cols">
          <div className="pokemon-info">

            <span> Experience:</span>
            <p>{data.base_experience}</p>
          </div>
          <div className="pokemon-info">

            <span>Attack: </span><p>{data.stats[1].base_stat}</p>
          </div>

          <div className="pokemon-info">
            <span>Ability:</span><p>{data.abilities.map((curel) => curel.ability.name).slice(0, 1).join(',')}</p>
          </div>

        </div>
        <Link to={`/${data.name}`}>
          <button
            style={{
              backgroundColor: "#45d37b",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "8px 14px",
              fontSize: "0.95rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#3bc06f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#45d37b")}>More Details</button>
        </Link>            </li>


    </>
  )
}


