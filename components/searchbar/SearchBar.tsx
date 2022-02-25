import styles from "./SearchBar.module.scss";
import { ChangeEvent, ChangeEventHandler } from "react";

const SearchBar = () => {
  function onType(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return (
    <div className={styles["search-bar"]}>
      <input
        className={styles["search-bar__input"]}
        type="text"
        onChange={onType}
        placeholder="Rechercher une cause à soutenir"
      />
      <div className={styles["icon-container"]}>
        <img
          className={styles["icon-container__search-icon"]}
          src="/icons/search_icon.svg"
          alt="An SVG of an eye"
        />
      </div>
    </div>
  );
};

export default SearchBar;
