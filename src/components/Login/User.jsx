import React from "react";

const User = ({setUser}) => {

    const onUserComplete = (e) => {
        console.log(e.target.value)
        setUser(e.target.value)
    }

  return (
    <div>
        User
        <input 
        type="text" 
        // onChange={(e) => setUser(e.target.value)} kan funka, men bättre att köra med on blure när fältet inte behöver kontrolleras
        onBlur={onUserComplete} 
        />
    </div>
  )
}
export default User