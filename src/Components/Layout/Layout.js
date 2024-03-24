import styles from "./Layout.module.css";
import NavigationBar from "./NavigationBar";

function Layout(props) {
  return (
    <div>
      <NavigationBar />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
