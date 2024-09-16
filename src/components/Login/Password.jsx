import React from "react";

const Password = ({setPassword}) => {

    const onPasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

  return (
    <div>
        Password
        <input type="password" onChange={onPasswordChange} />
    </div>
  )
}
export default Password