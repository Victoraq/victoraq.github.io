import {
  lightBackground,
  lightContent,
  lightThemeText,
  darkBackground,
  darkContent,
  darkThemeText,
  lightThemeSecondaryText,
  darkThemeSecondaryText,
} from "./variables";

export const lightTheme = {
  body: lightBackground,
  content: lightContent,
  text: lightThemeText,
  secondaryText: lightThemeSecondaryText,
  filter: "",
};

export const darkTheme = {
  body: darkBackground,
  content: darkContent,
  text: darkThemeText,
  secondaryText: darkThemeSecondaryText,
  filter: "invert(100%)",
};
