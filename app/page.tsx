import LoadMOre from "./components/LoadMOre";

import { fetchRickMorty } from "./action";
import { SearchComponent } from "./components/SearchComponent";
import { CharacterCard } from "./components/CharacterCard";
import { useState } from "react";

async function HomePage() {
  const data = await fetchRickMorty();
  console.log("data", data);

  return (
    <main className="flex  flex-col  rounded-md mi-h-screen m-2 p-3 ">
      <div>
        <input
          className=" p-3 bg-gray-300 m-2 tex-white  font-bold rounded-md w-full "
          type="text"
          placeholder="serch location"
        />
      </div>
      {/* <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMOre />
    </main>
  );
}

export default HomePage;
