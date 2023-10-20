import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context";
import { signin } from "../../apis/users"

export default function AuthProvider({children}) {
    const userConnect = useLoaderData();
    const [user, setUser] = useState(userConnect)
  console.log(user);

async function login(values) {
    const newUser = await signin(values)
    setUser(newUser)
}



  return (
  <AuthContext.Provider
  value={{
    user,
    login,
    setUser
  }}>
  {children}
  </AuthContext.Provider>
  )
}