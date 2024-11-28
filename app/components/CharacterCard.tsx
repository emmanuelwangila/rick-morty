"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";

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
  location: AnimeProp;
  index: number;
}

export const CharacterCard = ({ location, index }: Props) => {
  const [residentData, setResidentData] = useState<Resident[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [locations, setLocations] = useState<string>("");

  useEffect(() => {
    const fetchResidentData = async () => {
      const residentsData = await Promise.all(
        location.residents.map(async (residentURL) => {
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
  }, [location.residents]);

  const filteredResidents = residentData.filter((resident) =>
    resident.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="character-card">
      {/* <div>
        <input
          type="text"
          placeholder="Search characters "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded-md"
        />
      </div> */}
      <div className="">
        <div className="flex justify-between b flex-col items-center gap-1">
          <h2 className="font-bold m-5 bg-white rounded-md w-[80%] p-2 text-blue-500 text-md line-clamp-1 ">
            {location.name}
          </h2>
          <div className="py-1 px-2 bg-white  rounded-sm">
            <p className="text-black text-sm font-bold capitalize">
              {location.type}
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
