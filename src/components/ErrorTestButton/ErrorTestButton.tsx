import { Component } from "react";
import styles from "./ErrorTestButton.module.scss";

class ErrorTestButton extends Component {
  throwError = () => {
    throw new Error("Test error");
  };

  render() {
    return (
      <button className={styles.errorButton} onClick={this.throwError}>
        Error
      </button>
    );
  }
}

export default ErrorTestButton;
