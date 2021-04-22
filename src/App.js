import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./UI/themes";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import { projects as data_projects } from "./db";
import { reshapeArray } from "./utils";

function App() {
  const [projects, setProjects] = useState([]);
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  useEffect(() => {
    // Reshape projects to use in 3 x n visualization
    const cardsInColumn = 3;
    const reshaped_projects = reshapeArray(
      data_projects.updates,
      cardsInColumn
    );
    setProjects(reshaped_projects);
  }, []);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutme">
            <AboutMe />
          </Route>
          <Route exact path="/projects">
            <Projects projects={projects} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
