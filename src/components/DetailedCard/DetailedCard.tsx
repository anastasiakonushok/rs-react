import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DetailedCard.module.scss";

interface PlanetDetails {
  name: string;
  climate: string;
  population: string;
}

const DetailedCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [planet, setPlanet] = useState<PlanetDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/planets/${id}/`
        );
        setPlanet(response.data);
      } catch (error) {
        console.error("Error fetching planet details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanet();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!planet) {
    return <div>Planet not found.</div>;
  }

  return (
    <div className={styles.detailedCard}>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default DetailedCard;
