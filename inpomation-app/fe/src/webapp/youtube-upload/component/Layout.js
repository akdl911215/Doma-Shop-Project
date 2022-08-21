import styles from "../style/Layout.module.css";
// import Header from "./Header";
// import Menu from "./Menu";

const Layout = ({ children, activeMenu }) => {
  console.log("Layout : ", Layout);
  return (
    <div className={styles.container}>
      <div>Layout</div>
      {/* <Header /> */}
      <div className={styles.layout}>
        {/* <Menu activeMenu={activeMenu} /> */}
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
