import { render } from "react-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import GlobalStyle from "style";
import { selectors as uiSelector } from "redux/uiSlice";
import App from "App";
import store from "store";
import { persistor } from "store";
import reportWebVitals from "utils/reportWebVitals";
import { lightTheme, darkTheme } from "style/theme";

const Main = () => {
  const { theme } = useSelector(uiSelector.getTheme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
