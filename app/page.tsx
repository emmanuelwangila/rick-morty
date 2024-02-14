import Image from "next/image";
import { CharacterCard } from "./components/CharacterCard";

export default function Home() {
  return (
    <div>
      <CharacterCard />
      <h1>Rick and Morty App</h1>
    </div>
  );
}
