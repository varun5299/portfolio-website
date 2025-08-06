import {createContext} from "react"
import {ThemeMode} from "@context/ThemeProvider"

type ThemeContextProps = {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const defaulThemeContextProps: ThemeContextProps = {
  mode: "light",
  toggleTheme: () => {
  },
}

export const ThemeContext = createContext<ThemeContextProps>(defaulThemeContextProps)
