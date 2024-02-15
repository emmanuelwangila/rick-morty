"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Resident {
  id: number;
  name: string;
  image: string;
  status: string;
}

interface Episode {
  id: number;
  name: string;
}

export interface AnimeProp {
  id: number;
  name: string;
  type: string;
  residents: string[];
  dimension: string;
  url: string;
  episodes: Episode[];
}

interface Props {
  anime: AnimeProp;
  index: number;
}

export const CharacterCard = ({ anime, index }: Props) => {
  const [residentData, setResidentData] = useState<Resident[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchResidentData = async () => {
      const residentsData = await Promise.all(
        anime.residents.map(async (residentURL) => {
          const response = await fetch(residentURL);
          const data = await response.json();
          return {
            id: data.id,
            name: data.name,
            image: data.image,
            status: data.status, // Assuming image is a string URL
          };
        })
      );
      setResidentData(residentsData);
    };

    fetchResidentData();
  }, [anime.residents]);

  const filteredResidents = residentData.filter((resident) =>
    resident.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="character-card">
      <div>
        <input
          type="text"
          placeholder="Search by character name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded-md"
        />
      </div>
      <div className="py-4 flex flex-col m-2 bg-gray-300 rounded-md gap-3">
        <div className="flex justify-between flex-col items-center gap-1">
          <h2 className="font-bold m-5 p-2 text-blue-500 text-md line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.type}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            {filteredResidents.map((resident) => (
              <div
                key={resident.id}
                className="flex flex-row gap-2 items-center"
              >
                <Image
                  src={resident.image}
                  alt={resident.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <p className="text-base gap-2 m-2 flex flex-col    text-white font-bold">
                  <span className="text-blue-500 m-1  ">
                    {" "}
                    name.. {resident.name}
                  </span>
                  <span className="text-green-500  m-1 ">
                    {" "}
                    status.. {resident.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
