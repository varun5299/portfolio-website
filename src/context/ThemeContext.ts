import {createContext} from "react"
import {ThemeMode} from "@context/ThemeProvider"

type ThemeContextProps = {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null)
