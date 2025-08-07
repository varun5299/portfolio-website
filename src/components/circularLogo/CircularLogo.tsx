import React from "react"
import {theme} from "antd"

interface CircularLogoProps {
  src: string;
  alt?: string;
  size?: number;
}

const CircularLogo: React.FC<CircularLogoProps> = ({src, alt = "Logo", size = 220}) => {
  const {token} = theme.useToken()

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadowSecondary || "0 4px 16px rgba(0, 0, 0, 0.08)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: 12,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  )
}

export default CircularLogo
