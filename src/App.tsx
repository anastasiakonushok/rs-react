import React, { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import ResultsComponent from "./components/ResultsComponent/ResultsComponent";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ErrorTestButton from "./components/ErrorTestButton/ErrorTestButton";
import { fetchPlanets, Planet } from "./services/api";
import Pagination from "./components/Pagination/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const [results, setResults] = useState<Planet[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get("page");
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [location.search]);

  useEffect(() => {
    const searchTerm = localStorage.getItem("searchTerm") || "";
    performSearch(searchTerm, currentPage);
  }, [currentPage]);

  const performSearch = async (searchTerm: string, page: number) => {
    try {
      const results = await fetchPlanets(searchTerm, page);
      setResults(results);
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  const handleSearch = (searchTerm: string) => {
    performSearch(searchTerm, 1); // Reset to first page on new search
    setCurrentPage(1);
    navigate(`/?page=1`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/?page=${page}`);
  };

  return (
    <ErrorBoundary>
      <div className="container">
        <header className="header">
          <SearchComponent onSearch={handleSearch} />
          <ErrorTestButton />
        </header>
        <div>
          <ResultsComponent results={results} />
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
