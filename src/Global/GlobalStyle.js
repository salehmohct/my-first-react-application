import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  @media (max-width: 897px) {
    body {
    text-align: center; 
  }
  .PageTitle{
    font-size :18px ;
  }
  .avatart{
    width: 30px !important;
    height: 30px !important;
  }
  .Description{
    font-size: 16px !important;
  }
}
`;
export default GlobalStyle;
