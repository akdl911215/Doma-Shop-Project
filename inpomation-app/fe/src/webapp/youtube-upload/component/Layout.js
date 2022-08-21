import styles from "../style/Layout.module.css";
import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children, activeMenu }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.layout}>
        <Menu activeMenu={activeMenu} />
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
