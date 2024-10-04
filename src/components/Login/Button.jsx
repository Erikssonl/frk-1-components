import React from "react";
import styles from "./Login.module.css";

const Button = ({ btnTitle, style, btnClassName }) => {
  return (
    <div className={styles.buttonContainer}>
      <button style={style} className={`${styles.btn} ${btnClassName}`}>
        {btnTitle}
      </button>
    </div>
  );
};
export default Button;
