import { Component } from "react";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import ResultsComponent from "./components/ResultsComponent/ResultsComponent";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ErrorTestButton from "./components/ErrorTestButton/ErrorTestButton";
import { fetchPlanets, Planet } from "./services/api";

interface AppState {
  results: Planet[];
}

class App extends Component<NonNullable<unknown>, AppState> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    const searchTerm = localStorage.getItem("searchTerm") || "";
    this.performSearch(searchTerm);
  }

  performSearch = async (searchTerm: string) => {
    try {
      const results = await fetchPlanets(searchTerm);
      this.setState({ results });
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  handleSearch = (searchTerm: string) => {
    this.performSearch(searchTerm);
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="container">
          <header className="header">
            <SearchComponent onSearch={this.handleSearch} />
            <ErrorTestButton />
          </header>
          <div>
            <ResultsComponent results={this.state.results} />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
