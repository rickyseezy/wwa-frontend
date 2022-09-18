import React from "react";
import styles from "./HomeLayout.module.scss";
import MainNavigation from "@components/navigation/MainNavigation";
import Footer from "@components/footer/Footer";
import MenuBurger from "@components/menu-burger/MenuBurger";

interface LayoutProps {
  children: React.ReactNode;
}
const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainNavigation  />
       <MenuBurger />
      
      <div className={styles["container-block"]}>
      <div className={styles["first-bloc"]}></div>
      <div className={styles["second-bloc"]}> </div>
      <div className={styles["third-bloc"]}>
        <div className={styles.bottom}>
          <div className={styles["bottom__title"]}>Découvrez World We Act</div>
          <div className={styles["pusher--l"]} />
          <div className={styles["poster"]}>
            <div className={styles["play-button"]}>
              <div className={styles["play-button__icon"]}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["content"]}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
