import React, {useState} from "react"
import {ConfigProvider, ThemeConfig} from "antd"
import {darkTheme, lightTheme} from "@config/themeConfig"
import {ThemeContext} from "./ThemeContext"

export type ThemeMode = "light" | "dark"

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [mode, setMode] = useState<ThemeMode>("light")

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"))
  }

  const theme: ThemeConfig = mode === "light" ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{mode, toggleTheme}}>
      <ConfigProvider theme={theme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}
