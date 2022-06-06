import React from "react";
import { useState } from "react";
import { useSearchMovies } from "../hooks/useSearchMovies";

export const SearchFilms: React.FC = () => {
  const [input, setInput] = useState("");
  const media = useSearchMovies(input);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search film"
        value={input}
        onChange={handleChange}
      />
      <div>
        {media.map((el, i) => (
          <div key={i}> {el.title} </div>
        ))}
      </div>
    </div>
  );
};
