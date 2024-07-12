import axios from "axios";

const API_URL = "https://swapi.dev/api/planets/";

export interface Planet {
  name: string;
  climate: string;
}

export const fetchPlanets = async (
  searchTerm: string = "",
  page: number = 1
): Promise<Planet[]> => {
  const response = await axios.get<{ results: Planet[] }>(
    `${API_URL}?search=${searchTerm}&page=${page}`
  );
  return response.data.results;
};
