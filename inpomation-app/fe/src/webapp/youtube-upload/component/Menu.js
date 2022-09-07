import { Link, useNavigate } from "react-router-dom";
import styles from "../style/Menu.module.css";
import { TiHome } from "react-icons/ti";
import { FaRegCompass } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { useState } from "react";

const Menu = ({ activeMenu }) => {
  return (
    <div className={styles.Menu}>
      <div>
        <Link
          to="/"
          className={activeMenu === "home" ? styles.focused : styles.link}
        >
          <TiHome className={styles.icon} />
          <div className={styles.text}>홈</div>
        </Link>
      </div>
      <div>
        <Link
          to="/youtube_explore"
          className={activeMenu === "explore" ? styles.focused : styles.link}
        >
          <FaRegCompass className={styles.icon} />
          <div className={styles.text}>탐색</div>
        </Link>
      </div>
      <div>
        <Link
          to="/youtube_register"
          className={activeMenu === "register" ? styles.focused : styles.link}
        >
          <MdSubscriptions className={styles.icon} />
          <div className={styles.text}>업로드</div>
        </Link>
      </div>
      <div>
        <Link
          to="/youtube_mylist"
          className={activeMenu === "list" ? styles.focused : styles.link}
        >
          <MdSubscriptions className={styles.icon} />
          <div className={styles.text}>내 동영상</div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
