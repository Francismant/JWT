import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { signout } from "../../apis/users";

export default function Header() {
  const { user, setUser } = useContext(AuthContext);

  function handleClick() {
    setUser(null)
    signout()
  }

  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <div className="flex-fill">
        <NavLink end to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <ul>
        {user ? (
          <>
          <NavLink onClick={handleClick} to="" className={`mr10 btn btn-primary-reverse`}>
          <span>Logout</span>
        </NavLink>
        <NavLink to="profile" className={`mr10 btn btn-primary-reverse`}>
          <span>Profile</span>
        </NavLink>
          </>
        ) : (
          <>
          <NavLink to="login" className={`mr10 btn btn-primary-reverse`}>
          <span>Login</span>
        </NavLink>
        <NavLink to="register" className={`mr10 btn btn-primary-reverse`}>
          <span>Register</span>
        </NavLink>
          </>
          )}
      </ul>
    </header>
  );
}
