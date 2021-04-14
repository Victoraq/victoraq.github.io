import {
  lightBackground,
  lightContent,
  lightThemeText,
  darkBackground,
  darkContent,
  darkThemeText,
} from "./variables";

export const lightTheme = {
  body: lightBackground,
  content: lightContent,
  text: lightThemeText,
  filter: "",
};

export const darkTheme = {
  body: darkBackground,
  content: darkContent,
  text: darkThemeText,
  filter: "invert(100%)",
};
