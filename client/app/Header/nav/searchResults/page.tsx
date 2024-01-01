import "./popup.css";
import { useRef } from "react";


const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className={styles.popup} ref={popupRef}>
      <div className={styles["popup-content"]}>
        {results.map((result, i) => (
          <div key={i} className={styles["result-item"]}>
            <p>
              <img
                src={result.image.slice(1, result.image.length - 1)}
                alt=""
              />{" "}
              {result.name} {result.price}Dt
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
