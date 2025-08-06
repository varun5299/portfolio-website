import React, {useEffect, useState} from "react"
import {ArrowUpOutlined} from "@ant-design/icons"
import "./TopButton.css"
import {Button} from "antd"
import {useTheme} from "@context/useThemeContext"

const TopButton: React.FC = () => {
  const {mode} = useTheme()
  const [visible, setVisible] = useState(false)

  const showButton = () => {
    if (window.scrollY > 30) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showButton)
    return () => {
      window.removeEventListener("scroll", showButton)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  const isDark = mode === "dark"
  const textColor = isDark ? "#fff" : "#000"
  const bgColor = isDark ? "#000" : "#fff"

  return (
    <Button
      className={`top-button ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      shape="circle"
      size="large"
      style={{
        color: textColor,
        backgroundColor: bgColor,
        border: `1px solid ${textColor}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = bgColor
        e.currentTarget.style.backgroundColor = textColor
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = textColor
        e.currentTarget.style.backgroundColor = bgColor
      }}
    >
      <ArrowUpOutlined />
    </Button>
  )
}

export default TopButton
