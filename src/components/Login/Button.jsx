import React from "react";
import styles from "./Login.module.css";

const Button = ({ title, className }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.btn} ${className}`}>{title}</button>
    </div>
  );
};
export default Button;
