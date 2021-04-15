import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./UI/themes";
import AboutMe from "./pages/AboutMe";

function App() {

  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(theme => !theme)
  }

  return (
    <ThemeProvider theme={theme ? lightTheme: darkTheme}>
    <Router>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
