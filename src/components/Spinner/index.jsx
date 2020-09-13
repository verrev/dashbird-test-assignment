import React from "react";
import styles from "components/Spinner/styles.scss";

export default () => (
  <div className={styles.spinner}>
    <div className={styles.skFoldingCube}>
      <div className={`${styles.skCube1} ${styles.skCube}`} />
      <div className={`${styles.skCube2} ${styles.skCube}`} />
      <div className={`${styles.skCube3} ${styles.skCube}`} />
      <div className={`${styles.skCube4} ${styles.skCube}`} />
    </div>
  </div>
);
