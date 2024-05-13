import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/image/logo-01.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerTopBox}>
        <div className={styles.topBox}>
          <div className={styles.leftBox}>
            Free shipping for standard order over $100
          </div>
          <div className={styles.rigthBox}>
            <nav>
              <ul>
                <li>Help & FAQs</li>
                <li>MY account</li>
                <li>EN</li>
                <li>USD</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.headerBottomBox}>
        <div className={styles.bottomBox}>
          <img src={logo} alt="" />
          <div className={styles.menuBox}>
            <nav>
              <ul>
                <li>Home</li>
                <li>Shop</li>
                <li className={styles.featuresTag}>
                  Features <p>HOT</p>
                </li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div className={styles.iconBox}>
            <nav>
              <ul>
                <li>
                  <FaSearch />
                </li>
                <li>
                  <FaShoppingCart />
                  <p>1</p>
                </li>
                <li>
                  <CiHeart />
                  <p>1</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
