import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
}) => {
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    if (page < 1) return; // Prevent navigating to page 0 or negative pages
    onPageChange(page);
    navigate(`/?page=${page}`);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        className={styles.pageButton}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
