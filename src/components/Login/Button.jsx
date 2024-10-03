import React from "react";
import styles from "./Login.module.css";

const Button = ({ btnTitle, style }) => {
  return (
    <div className={styles.buttonContainer}>
      <button style={{ style }} className={styles.btn}>
        {btnTitle}
      </button>
    </div>
  );
};
export default Button;
