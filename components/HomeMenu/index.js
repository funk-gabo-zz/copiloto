import styles from "../../../styles/HomeMenu.module.css";

import MenuOption from "../MenuOption";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.options_container}>
        <MenuOption />
        <MenuOption />
        <MenuOption />
      </div>
      <picture>
        <img src="/home_menu/eTrans_blanco.svg" alt="etransLogo" />
      </picture>
    </div>
  );
};

export default index;
