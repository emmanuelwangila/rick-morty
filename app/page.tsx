import LoadMOre from "./components/LoadMOre";

import { fetchRickMorty } from "./action";

async function HomePage() {
  const data = await fetchRickMorty();

  return (
    <main>
      <section>{data}</section>
      <LoadMOre />
    </main>
  );
}

export default HomePage;
