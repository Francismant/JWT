import styles from "./Profile.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../context";

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex-fill d-flex justify-content-center align-items-center">
      {user ? (
        <div className={`${styles.profileContainer} card p20`}>
          <h1>Profile</h1>
          <ul>
            <li>Nom : {user.name}</li>
            <li>Email : {user.email}</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
