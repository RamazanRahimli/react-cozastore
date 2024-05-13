import React from "react";
import styles from "../SectionTwo/SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.logoWriteBox}>
          <div className={styles.writeBox}>
            <h1>Women</h1>
            <p>Spring 2018</p>
          </div>
        </div>
        <div className={styles.logoWriteBoxMen}>
          <div className={styles.writeBox}>
            <h1>Men</h1>
            <p>Spring 2018</p>
          </div>
        </div>
        <div className={styles.logoWriteBoxShop}>
          <div className={styles.writeBox}>
            <h1>Acessiores</h1>
            <p>New Trend</p>
          </div>
        </div>
        <div className={styles.hoverBox}>
          <div className={styles.writeBox}>
            <span>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
