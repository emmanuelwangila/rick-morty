"use server";

import { CharacterCard } from "./components/CharacterCard";
import { AnimeProp } from "./components/CharacterCard";

export const fetchRickMorty = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/location");

  const data = await response.json();
  console.log(data, "data");

  return data.map((item: AnimeProp, index: number) => (
    <CharacterCard key={item.id} anime={item} index={index} />
  ));
};
