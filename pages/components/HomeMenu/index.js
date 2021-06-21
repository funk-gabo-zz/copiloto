import styles from '../../../styles/HomeMenu.module.css'

import MenuOption from '../MenuOption'
const index = () => {
  return (

    <div className={styles.container}>
      <MenuOption />
      <MenuOption />
      <MenuOption />
      <MenuOption />
    </div>
  );
}

export default index;