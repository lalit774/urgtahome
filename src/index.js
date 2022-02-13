import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {ThemeProvider} from '@material-ui/core/styles';
import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./components/store/favorites-context";
import theme from "./theme";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider> 
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
