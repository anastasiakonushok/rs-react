import React from "react";
import styles from "./ErrorTestButton.module.scss";

const ErrorTestButton: React.FC = () => {
  const throwError = () => {
    throw new Error("Test error");
  };

  return (
    <button className={styles.errorButton} onClick={throwError}>
      Throw Error
    </button>
  );
};

export default ErrorTestButton;
