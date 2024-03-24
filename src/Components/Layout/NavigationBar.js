import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import { useContext } from "react";
import fav from "../../store/favourite-context";
function NavigationBar() {
  const favCtx = useContext(fav);
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Memories</h1>
      <ul>
        <li>
          {" "}
          <Link to="/AllMeetups">All Memories</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/NewMeetups">New Memory</Link>{" "}
        </li>
        <li>
          <Link to="/Favourites">Favourites</Link>
          <span className={styles.badge}>{favCtx.favouritesCount}</span>
        </li>
      </ul>
    </header>
  );
}

export default NavigationBar;
