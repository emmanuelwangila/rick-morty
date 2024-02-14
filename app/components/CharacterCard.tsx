import Image from "next/image";

import React from "react";

export interface AnimeProp {
  id: string;
  name: string;
  type: string;
  dimension: string;
  location: string;
  residents: [];
  image: {
    original: string;
  };
  status: string;
  episodes: number;
  charcetr: string;
}

interface Props {
  anime: AnimeProp;
  index: number;
}

export const CharacterCard = ({ anime, index }: Props) => {
  return (
    <div className="py-4 m-2  flex flex-col gap-3">
      <div className="flex justify-between items-center gap-1">
        <h2 className="font-bold m-5 p-2  text-blue-500 text-md  line-clamp-1 w-full">
          {anime.type}
        </h2>
        <div className="py-1 px-2 bg-[#161921] rounded-sm">
          <p className="text-white text-sm font-bold capitalize">
            {anime.dimension}
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="./vercel.svg"
            alt="episodes"
            width={20}
            height={20}
            className="object-contain"
          />
          <p className="text-base text-white font-bold">{anime.residents}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="./star.svg"
            alt="star"
            width={18}
            height={18}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
