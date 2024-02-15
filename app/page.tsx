import LoadMOre from "./components/LoadMOre";

import { fetchRickMorty } from "./action";
import { CharacterCard } from "./components/CharacterCard";

async function HomePage() {
  const data = await fetchRickMorty();
  console.log("data", data);

  return (
    <main className="flex  flex-col  rounded-md mi-h-screen m-2 p-3 ">
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMOre />
    </main>
  );
}

export default HomePage;
