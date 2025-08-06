import type { ThemeConfig } from "antd"
import { theme } from "antd"

const { darkAlgorithm, defaultAlgorithm } = theme

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: "#0E6BA8",
    colorBgBase: "#EDF9FE",
    colorTextBase: "#001C55",
    colorTextSecondary: "#4f5b62",
  },
  algorithm: defaultAlgorithm,
}

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#34515e",
    colorBgBase: "#121212",
    colorTextBase: "#e9ecef",
    colorTextSecondary: "#ced4da",
  },
  algorithm: darkAlgorithm,
}
