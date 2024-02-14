import React from "react";

export interface AnimeProp {
  id: string;
  name: string;
  location: string;
  resident: string;
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
  return <div>CharacterCard</div>;
};
