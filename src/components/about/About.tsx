import {Button, Col, Row, theme, Typography} from "antd"
import home from "@assets/home-image.png"
import SocialIcons from "@components/social/SocialIcons"
import {socialMediaLinks} from "@components/social/social-links"
import {DownloadOutlined} from "@ant-design/icons"
import {motion} from "framer-motion"

const {Title, Paragraph} = Typography


const About = () => {
  const {token} = theme.useToken()
  return (
    <Row
      gutter={[32, 32]}
      align="middle"
      style={{
        minHeight: "calc(100vh - 65px)",
        padding: "96px",
        background: token.colorBgBase,
        color: token.colorTextBase,
      }}
    >
      <Col xs={24} md={12} style={{padding: 0, alignItems: "center"}}>
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.3, duration: 0.6, ease: "easeOut"}}
        >
          <Title style={{fontSize: "72px", marginBottom: 8, fontWeight: "bold"}}>
            Varun Agarwal
          </Title>
          <Paragraph style={{fontSize: "32px", marginTop: 16, color: token.colorTextSecondary}}>
            A Full Stack Developer specializing in React, TypeScript, and GraphQL. I build scalable,
            user-focused web apps at Smart Futures. Previously, I worked at Viasat, Verizon, and Honeywell,
            and hold a Master’s in Software Engineering from Carnegie Mellon University.
          </Paragraph>
          <SocialIcons links={socialMediaLinks} />
          <Button
            size="large"
            href="https://drive.google.com/file/d/1uWceOh0IEHtqWLDxFrweYJxeu1DBPzwF/view?usp=drive_link"
            target="_blank"
            icon={<DownloadOutlined />}
            style={{marginTop: 24}}
          >
            Download Resume
          </Button>
        </motion.div>
      </Col>

      <Col xs={24} md={12} style={{padding: 0}}>
        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, ease: "easeOut"}}
        >
          <img
            src={home}
            alt="illustration"
            style={{width: "auto", height: "auto", maxHeight: "100%", maxWidth: "100%"}}
          />
        </motion.div>
      </Col>
    </Row>
  )
}

export default About
