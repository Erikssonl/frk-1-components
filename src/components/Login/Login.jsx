import React, { useState } from "react"
import User from "./User"
import Password from "./Password"

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <User setUser={setUser} />
        <Password setPassword={setPassword} />
        <p>
            User: {user}
        </p>
        <p>
            Password: {password}
        </p>
    </div>
  )
}
export default Login