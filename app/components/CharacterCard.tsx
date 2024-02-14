import React from "react";

export interface AnimeProp {
  id: string;
  name: string;
  location: string;
  resident: string;
  status: string;
  episode: string;
  charcetr: string;
}

type Props = {};

export const CharacterCard = (props: Props) => {
  return <div>CharacterCard</div>;
};
