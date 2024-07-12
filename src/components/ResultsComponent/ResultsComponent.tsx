import React from "react";
import { useNavigate } from "react-router-dom";
import { Planet } from "../../services/api";
import styles from "./ResultsComponent.module.scss";

interface ResultsComponentProps {
  results: Planet[];
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({ results }) => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className={styles.resultWrapp}>
      {results.length > 0 ? (
        results.map((planet, index) => (
          <div
            key={planet.name}
            className={styles.resultItem}
            onClick={() => handleCardClick(index + 1)}
          >
            <h3 className={styles.resultTitle}>{planet.name}</h3>
            <ul>
              <li>{planet.climate}</li>
              <li>{planet.population}</li>
              <li>{planet.terrain}</li>
            </ul>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default ResultsComponent;
