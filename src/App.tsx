import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { CSSReset, ColorModeProvider } from "@chakra-ui/core";
import Jira from "pages/Jira-clone";

import { store, persistor } from "models";
import { StoreProvider } from "easy-peasy";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <ColorModeProvider>
            <CSSReset />
            <Jira />
          </ColorModeProvider>
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
