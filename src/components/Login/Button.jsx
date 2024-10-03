import React from "react";
import styles from "./Login.module.css";

const Button = ({ btnTitle, className }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.btn} ${className}`}>{btnTitle}</button>
    </div>
  );
};
export default Button;
