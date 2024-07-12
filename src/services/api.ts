import axios from "axios";

const API_URL = "https://swapi.dev/api/planets/";

export interface Planet {
  name: string;
  climate: string;
}

export const fetchPlanets = async (
  searchTerm: string = ""
): Promise<Planet[]> => {
  const response = await axios.get<{ results: Planet[] }>(
    `${API_URL}?search=${searchTerm}`
  );
  return response.data.results;
};
