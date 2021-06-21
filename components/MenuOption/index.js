import styles from '../../../styles/HomeMenu.module.css'


const index = () => {
  return (
    <div className={styles.menu_container}>
      <img src="/home_menu/eblue.svg" />
      <span>Historico</span>
    </div>
  );
}

export default index;