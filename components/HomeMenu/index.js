import styles from "../../styles/HomeMenu.module.css";
import MenuOption from "../MenuOption";
export default function HomeMenu({name}) {
  return (
    <div className={styles.container}>
      <div className={styles.options_container}>
        <MenuOption name='Historico' color='red' to='historical'/>
        <MenuOption name='Analitics' color='white'/>
        <MenuOption name='Gráficos' color='blue'/>
        {/* <MenuOption name='Mother' color='yellow'/>
        <MenuOption name='Mother' color='orange'/> */}
      </div>
      <picture>
        <img src="/home_menu/eTrans_blanco.svg" alt="etransLogo" />
      </picture>
    </div>
  );
};

