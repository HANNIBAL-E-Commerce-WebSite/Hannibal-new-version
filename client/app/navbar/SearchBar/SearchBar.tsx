import React, { useState, useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

interface Product {
  name: string;
  // Add other product properties as needed
}

interface FormProps {
  setResults: (results: Product[]) => void;
}

const Form: React.FC<FormProps> = ({ setResults }) => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    fetchData(input);
  }, [input, setResults]);

  const fetchData = async (value: string): Promise<void> => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const json = await response.json() as Product[];

      const results = json.filter((product) => {
        return (
          value &&
          product &&
          product.name &&
          product.name.toLowerCase().includes(value.toLowerCase())
        );
      });

      if (typeof setResults === "function") {
        setResults(results);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <form className="search__form">
      <input
        type="text"
        placeholder="Search for products"
        className="search__form__input"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />

      <button className="search__form__button" type="submit">
        {/* <SearchIcon fontSize="medium" /> */}
      </button>
    </form>
  );
};

export default Form;