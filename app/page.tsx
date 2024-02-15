import LoadMOre from "./components/LoadMOre";

import { fetchRickMorty } from "./action";
import { CharacterCard } from "./components/CharacterCard";

async function HomePage() {
  const data = await fetchRickMorty();
  console.log("data", data);

  return (
    <main className="flex  flex-col  rounded-md mi-h-screen m-2 p-3 ">
      <section className=" ">{data}</section>
      <LoadMOre />
    </main>
  );
}

export default HomePage;
