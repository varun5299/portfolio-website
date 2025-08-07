import type {ThemeConfig} from "antd"
import {theme} from "antd"

const {darkAlgorithm, defaultAlgorithm} = theme

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: "#0E6BA8",
    colorBgBase: "#EDF9FE",
    colorTextBase: "#001C55",
    colorTextSecondary: "#4f5b62",
  },
  components: {
    Button: {
      defaultBg: "#001C55",
      defaultBorderColor: "#121212",
      defaultColor: "#e9ecef",
      defaultHoverBg: "transparent",
      defaultActiveBg: "transparent",
      defaultHoverBorderColor: "#001C55",
      defaultHoverColor: "#001C55",
      defaultActiveBorderColor: "#001C55",
      defaultActiveColor: "#001C55",
    },
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
  components: {
    Button: {
      defaultBg: "#e9ecef",
      defaultBorderColor: "#e9ecef",
      defaultColor: "#121212",
      defaultHoverBg: "transparent",
      defaultActiveBg: "transparent",
      defaultHoverBorderColor: "#121212",
      defaultHoverColor: "#e9ecef",
      defaultActiveBorderColor: "#121212",
      defaultActiveColor: "#e9ecef",
    },
  },
  algorithm: darkAlgorithm,
}
