import css from "styled-jsx/css";

export const globalStyles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
export const breakpoints = {
  mobile: '375px'
}