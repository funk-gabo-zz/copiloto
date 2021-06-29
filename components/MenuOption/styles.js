import css from "styled-jsx/css";

export default css`
  
  .menu_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: aliceblue;
            position: relative;
            margin: 0 100px;
            padding-bottom: 35px;
          }

          .menu_container a img {
            opacity: 0.8;
            transition: opacity 0.2s ease;
          }
          .menu_container a img:hover {
            opacity: 1;
          }

          .menu_container:hover > span {
            opacity: 1;
            margin-top: 0;
          }

          .menu_container span {
            font-size: 3rem;
            margin-top: 5px;
            transition: margin-top 0.2s;
          }
         
`;
