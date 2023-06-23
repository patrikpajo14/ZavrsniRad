import React from "react";
import styles from "./PageLoader.module.css";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className={styles.loader}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
    </div>
  );
};

export default PageLoader;
