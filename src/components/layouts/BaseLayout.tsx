import {Layout, Menu, Switch} from "antd"
import {Link, useLocation} from "react-router-dom"
import React from "react"
import {MoonOutlined, SunOutlined} from "@ant-design/icons"
import logo from "@assets/logo.png"
import {useTheme} from "@context/useThemeContext"

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const location = useLocation()
  const {mode, toggleTheme} = useTheme()

  return (
    <Layout style={{minHeight: "100vh"}}>
      <Layout.Header style={{display: "flex", alignItems: "center", gap: "16px", paddingLeft: 0}}>
        <Link to="/">
          <img src={logo} alt="Logo"
               style={{aspectRatio: "1/1", width: "300px", height: "300px", paddingTop: "12px"}} />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          style={{flex: 1}}
          items={[
            {key: "/", label: <Link to="/">Home</Link>},
            {key: "/education", label: <Link to="/education">Education</Link>},
            {key: "/experience", label: <Link to="/experience">Experience</Link>},
            {key: "/projects", label: <Link to="/projects">Projects</Link>},
            {key: "/blog", label: <Link to="/blog">Blog</Link>},
            {key: "/contact", label: <Link to="/contact">Contact</Link>},
          ]}
        />
        <Switch
          checked={mode === "dark"}
          onChange={toggleTheme}
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
        />
      </Layout.Header>
      <Layout>
        <Layout.Content>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
