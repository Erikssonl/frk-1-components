import React from "react";
import styles from "./Login.module.css";

const Button = ({ btnTitle, style, mainStyle, className }) => {
  return (
    <div className={styles.buttonContainer}>
      <button style={style} className={`${mainStyle} ${className}`}>
        {btnTitle}
      </button>
    </div>
  );
};
export default Button;
