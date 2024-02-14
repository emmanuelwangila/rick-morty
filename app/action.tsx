"use server";

import { CharacterCard } from "./components/CharacterCard";
import { AnimeProp } from "./components/CharacterCard";

export const fetchRickMorty = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/location");
  const data = await response.json();
  console.log(data, "data");

  // Check if data is an array
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return []; // Return empty array
  }

  // Map over the array and return an array of CharacterCard components
  return data.map((item: AnimeProp, index: number) => (
    <CharacterCard key={item.id} anime={item} index={index} />
  ));
};
