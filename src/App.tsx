import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import router from "./router";
import theme from "./styles/theme";
import { AppWrapper, GlobalStyle } from "./styles/page";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <AppWrapper>
          <RouterProvider router={router} />
        </AppWrapper>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
