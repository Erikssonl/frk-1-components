import React, { useState } from "react";
import User from "./User";
import Password from "./Password";
import Button from "./Button";
import styles from "./Login.module.css";

const Login = ({ btnTitle, style, btnStyle }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.loginContainer}>
      <User setUser={setUser} />
      <Password setPassword={setPassword} />
      <Button
        btnTitle={btnTitle}
        style={style}
        className={`${styles.btn} ${btnStyle}`}
      />
    </div>
  );
};
export default Login;
