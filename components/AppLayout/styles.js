import css from "styled-jsx/css";
import { breakpoints } from "../../styles/global";

export default css`
  header {
    background-color: rgb(236, 236, 236);
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-around;
  }
  picture{
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${breakpoints.mobile}){
    .kaufman, .foton{
      display: none;
    }
  }
`;
