import css from "styled-jsx/css";

export default css`
  .container {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    background-image: url("/city.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
  }
  .options_container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
  }
  .blur {
    position: absolute;
    opacity: 0.3;
    background-color: black;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;