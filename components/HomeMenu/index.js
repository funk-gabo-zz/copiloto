import MenuOption from "../MenuOption";
export default function HomeMenu({ name }) {
  return (
    <div className="container">
      <div className="options_container">
        <MenuOption name="Historico" color="red" to="historical" />
        <MenuOption name="Analitics" color="white" />
        <MenuOption name="Gráficos" color="blue" />
        {/* <MenuOption name='Mother' color='yellow'/>
        <MenuOption name='Mother' color='orange'/> */}
      </div>
      <picture>
        <img src="/home_menu/eTrans_blanco.svg" alt="etransLogo" />
      </picture>
      <style jsx>
        {`
          .container {
            padding-top: 190px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.6839110644257703) 0%,
              rgba(0, 0, 0, 0.38139005602240894) 100%
            );

            width: 100%;
            height: 100%;
          }
          .container picture {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-end;
            width: 100%;
            height: 200px;
          }

          .container picture img {
            width: 180px;
            margin: 3rem;
          }

          .options_container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
