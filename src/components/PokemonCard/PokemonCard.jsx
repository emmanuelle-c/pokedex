import PropTypes from "prop-types";
import "/Users/Manue_1/Documents/WCS-02:24/quetes/quetes_react/pokedex/src/components/PokemonCard/PokemonCard.css";

function PokemonCard({pokemon}) {
    return (
      <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
     </figure>

    )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}


export default PokemonCard;