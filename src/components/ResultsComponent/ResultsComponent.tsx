import { Component } from "react";
import { Planet } from "../../services/api";
import styles from "./ResultsComponent.module.scss";

interface ResultsComponentProps {
  results: Planet[];
}

class ResultsComponent extends Component<ResultsComponentProps> {
  render() {
    const { results } = this.props;

    return (
      <div>
        <h2>List Planet</h2>
        <div className={styles.resultWrapp}>
          {results.map((planet, index) => (
            <div key={index} className={styles.resultItem}>
              <h3 className={styles.resultTitle}>{planet.name}</h3>
              <p className={styles.resultClimate}>{planet.climate}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ResultsComponent;
