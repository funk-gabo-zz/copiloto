import styles from "./styles";

import MenuOption from "../MenuOption";
export default function HomeMenu() {
  return (
    <div className="container">
      <div className="blur"></div>
      <div className="options_container">
        <MenuOption name="Histórico" color="red" to="historical" />
        <MenuOption name="Tiempo Real" color="white" />
        <MenuOption name="Gráficos" color="blue" />
        {/* <MenuOption name='Mother' color='yellow'/>
        <MenuOption name='Mother' color='orange'/> */}
      </div>
      <picture>
        <img
          src="/home_menu/eTrans_blanco.svg"
          alt="etransLogo"
          width='200'
        />
      </picture>
      <style jsx>{styles}</style>
    </div>
  );
}
