import React, { Component } from "react";
import styles from "./SearchComponent.module.scss";

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchComponentState {
  searchTerm: string;
}

class SearchComponent extends Component<
  SearchComponentProps,
  SearchComponentState
> {
  constructor(props: SearchComponentProps) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem("searchTerm") || "",
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    const trimmedSearchTerm = searchTerm.trim();
    localStorage.setItem("searchTerm", trimmedSearchTerm);
    this.props.onSearch(trimmedSearchTerm);
  };
  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };
  render() {
    return (
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          className={styles.searchInput}
        />
        <button onClick={this.handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchComponent;
