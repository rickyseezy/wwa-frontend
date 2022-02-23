import React, { Fragment } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
