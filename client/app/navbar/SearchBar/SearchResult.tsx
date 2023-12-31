import React, { useRef } from 'react';
import './popup.css';

interface SearchResultProps {
  results: {
    image: string;
    name: string;
    price: number;
  }[];
}

const SearchResults: React.FC<SearchResultProps> = ({ results }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="popup" ref={popupRef}>
      {/* <div className="popup-content">
        {results.map((result, i) => (
          <div key={i} className="result-item">
            <p>
              <img
                src={result.image.slice(1, result.image.length - 1)}
                alt=""
              />{" "}
              {result.name} {result.price}Dt
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SearchResults;