import css from "styled-jsx/css";
import { breakpoints } from "../../styles/global";

export default css`
  header {
    background-color: rgb(236, 236, 236);
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .foton {
    width: 200px;
    height: 110px;
  }
  .coPiloto {
    height: 120px;
  }
  .kaufman {
    width: 200px;
    height: 180px;
  }
  @media (max-width: ${breakpoints.mobile}) {

    .kaufman, .foton{
      display: none;
    }
  }
`;
