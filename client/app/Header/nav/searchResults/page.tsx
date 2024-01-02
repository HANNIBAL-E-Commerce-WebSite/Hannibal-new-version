/* eslint-disable @next/next/no-img-element */
import "./popup.css";
import { useRef } from "react";
import Link from "next/link";

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  console.log(results, "results");

  const popupRef = useRef<HTMLDivElement>(null);

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="popup" ref={popupRef}>
      <div className="popup-content">
        {results.map((result, i) => (
          <div key={i} className="result-item">
            <Link href={`/Product/${result.id}`}>
              <p>
                <img src={result.image} alt="" /> {result.name} {result.price}$
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
