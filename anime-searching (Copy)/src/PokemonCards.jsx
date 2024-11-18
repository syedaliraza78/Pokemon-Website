import "./Pokemon.css";
export const PokemonCards = ({ pokemondata }) => {
  return (
    // <li>{pokemondata.name}</li>
    <li className="pokemon-card">
      <figure>
        <img
          className="pokemon-image"
          src={pokemondata.sprites.other.dream_world.front_default}
          alt={pokemondata.name}
        />
      </figure>
      <h1 className="pokemon-name">{pokemondata.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemondata.types.map((nextele) => nextele.type.name).join(", ")}
          {/* console.log(nextele.type.name); */}
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height:</span> {pokemondata.height}
        </p>
        <p className="pokemon-info">
          <span>Weight:</span> {pokemondata.weight}
        </p>
        <p className="pokemon-info">
          <span>speed:</span> {pokemondata.stats[3].base_stat}
        </p>
      </div>
    </li>
  );
};
