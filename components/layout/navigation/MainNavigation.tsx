import SearchBar from "@components/searchbar/SearchBar";
import styles from "./MainNavigation.module.scss";
import Logo from "@components/logo/Logo";

export const MainNavigation = () => {
  return (
    <div className={styles.menu}>
      <nav className={styles.menu__content}>
        <p className={styles.logo}>
          <Logo src="/images/wwa-logo-black.png" />
        </p>
        <ul className={styles["nav-link"]}>
          <li className={styles["nav-link__link"]}>Projets</li>
          <li className={styles["nav-link__link"]}>Causes</li>
          <li className={styles["nav-link__link"]}>Connexion</li>
        </ul>
        <SearchBar />
        <div className={styles.spacer}></div>
        <div className={styles["btn-createcause"]}>
          <div className={styles["btn-createcause__text"]}>
            Je crée ma cause
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
