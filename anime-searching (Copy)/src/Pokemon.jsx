import { useEffect, useState } from "react";
import "./Pokemon.css";
import { PokemonCards } from "./PokemonCards";
export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon?offset=24&limit=24";
  const PokemonFun = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      //   console.log(data);
      const PokemonDetail = data.results.map(async (currele) => {
        // console.log(currele.url)
        const res = await fetch(currele.url);
        const data = await res.json();
        console.log(data);
        return data;
      });
      const PokemonAllData = await Promise.all(PokemonDetail);
      setPokemon(PokemonAllData);
      setloading(false);
      //   console.log(pokemon);
    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(error);
    }
    // console.log()
  };
  useEffect(() => {
    PokemonFun();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <section>
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div>
          <ul className="cards">
            {pokemon.map((currele) => {
              // return <li key={currele.id}>{currele.name}</li>
              // send pokemondata as the props in the other file componet
              return <PokemonCards key={currele.id} pokemondata={currele} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
