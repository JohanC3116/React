import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useQuery } from "@tanstack/react-query";

export const ApisPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [cargando, setCargando] = useState(true);

  // const {
  //   data: data1,
  //   isLoading: isLoading1,
  //   error: error1,
  //   refetch: refetch1,
  // } = useQuery({
  //   queryKey: ["Consulta a pokeApi padre"],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       "httpss://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
  //     );
  //     return res.data.results;
  //     //   const res = await fetch(
  //     //     "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
  //     //   ).then((res) => res.json());
  //     //   return res.results;
  //   },
  // });

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["Consulta a pokeApi hijo"],
    queryFn: async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
      );
      return res.data.results;
      //   const res = await fetch(
      //     "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
      //   ).then((res) => res.json());
      //   return res.results;
    },
    // staleTime: 1000*60*1
    refetchOnWindowFocus: false,
    // enabled: !!data1,
  });
  // const isLoading = isLoading1 || isLoading2;
  // const error = error1 || error2;
  if (isLoading) {
    return <span>Cargando</span>;
  }
  if (error) {
    return <span>Error {error.message} </span>;
  }

  // useEffect(() => {
  //   // axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  //   //   .then((resp) => {
  //   //     setPokemons(resp.data.results);
  //   //     console.log("data:", resp.data.results);
  //   //     setCargando(false);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("error al cargar los pokemons", error);
  //   //     setCargando(false);
  //   //   });

  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPokemons(data.results);
  //       console.log("data:", data.results);
  //     })
  //     .catch((error) => console.error("Error de codigo: ", error));
  // }, []);
  return (
    <div className="h-full bg-amber-300 text-black">
      <h1>ApisPage</h1>
      {/* {pokemons?.abilities?.length > 0 && (
        <span>Abilitie: {pokemons.abilities[0].ability.name} </span>
      )}
      {pokemons?.stats?.length > 0 && (
        <span>State: {pokemons.stats[3].base_stat} </span>
      )}
      {pokemons.weight} */}
      {/* {cargando ? (
        <span>Cargando...</span>
      ) : (
        <section className="flex flex-col">
          {pokemons?.map((item, index) => {
            return <span key={index}> {item.name} </span>;
          })}
        </section>
      )} */}
      {/* <section className="flex flex-col">
        {pokemons?.map((item, index) => {
          return <span key={index}> {item.name} </span>;
        })}
      </section> */}
      <button className="bg-black text-white" onClick={() => refetch()}>
        Click a refresh
      </button>
      <section className="flex flex-col h-full">
        {data?.map((item, index) => {
          return <span key={index}> {item.name} </span>;
        })}
      </section>
    </div>
  );
};
