import React from "react";
import { useState } from "react";
import { useSearchMovies } from "../hooks/useSearchMovies";

export const SearchFilms: React.FC = () => {
  const [query, setQuery] = useState("");
  const { data, isFetching, isError } = useSearchMovies({ query });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search film"
        value={query}
        onChange={handleChange}
      />
      <div>
        {isFetching && <div>loading...</div>}
        {data?.map((el, i) => (
          <div key={i}> {el.title} </div>
        ))}
      </div>
    </div>
  );
};
