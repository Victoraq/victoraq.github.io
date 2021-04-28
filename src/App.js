import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Experience from "./pages/Experience";
import GlobalStyle from "./GlobalStyle";
import { reshapeArray } from "./utils";
import { projects_data } from "./info/projects";
import { experience_data } from "./info/experience";
import { darkTheme, lightTheme } from "./UI/themes";

function App() {
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  useEffect(() => {
    // Reshape projects to use in 3 x n visualization
    const cardsInColumn = 3;
    const reshaped_projects = reshapeArray(
      projects_data.updates,
      cardsInColumn
    );
    setProjects(reshaped_projects);
  }, []);

  useEffect(() => {
    setExperience(experience_data.updates);
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
          <Route exact path="/experience">
            <Experience experience={experience} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
