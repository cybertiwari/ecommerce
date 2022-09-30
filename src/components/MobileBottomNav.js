import styles from "../styles/MobileBottomNav.module.scss";
import GetIcon from "./GetIcon";
import MobileCategories from "./MobileCategories";
import { useState } from "react";
import MobileBasket from "./MobileBasket";
import clsx from "clsx";

const MobileBottomNav = () => {
  const [currentComponent, setCurrentComponent] = useState("");
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div className={clsx(styles.bottomNav, navIsOpen ? styles.fullHeight : styles.removeHeight)}>
      <div className={styles.content}>
        {(() => {
          switch (currentComponent) {
            case "categories":
              return <MobileCategories setNavIsOpen={setNavIsOpen} />;
            case "basket":
              return <MobileBasket />;
            default:
              return <div></div>;
          }
        })()}
      </div>
      <div className={styles.navContainer}>
        <button
          className={styles.navItem}
          onClick={() => {
            setCurrentComponent("");
            setNavIsOpen(false);
          }}
        >
          <GetIcon icon="BsHouseFill" size={20} />
        </button>
        <button
          className={styles.navItem}
          onClick={() => {
            setCurrentComponent("basket");
            setNavIsOpen((oldState) => !oldState);
          }}
        >
          <GetIcon icon="BsCartFill" size={20} />
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
