import React from "react";
import styles from "../SetionOne/SectionOne.module.css";

const SectionOne = () => {
  return (
    <div className={styles.box}>
      <div className={styles.leftBox}>
        <div className={styles.leftBoxEntry}>
        <span>Men Collection 2018</span>
        <h2>Jackets & Coats</h2>
        <button>Shop Now</button>
        </div>
      </div>
      <div className={styles.rigthBox}></div>
    </div>
  );
};

export default SectionOne;
