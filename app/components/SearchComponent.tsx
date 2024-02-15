import React from "react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchComponent: React.FC<SearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search locations"
      value={searchTerm}
      onChange={handleSearchChange}
      className="border m-2  border-gray-400 px-2 py-1 rounded-md"
    />
  );
};

export default SearchComponent;
