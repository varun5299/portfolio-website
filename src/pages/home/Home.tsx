import {Col, Row, theme, Typography} from "antd"
import home from "@assets/home-image.png"
import SocialIcons from "@components/social/SocialIcons"
import {socialMediaLinks} from "@components/social/social-links"
import TopButton from "@components/top-button/TopButton"

const {Title, Paragraph} = Typography

const Home = () => {
  const {token} = theme.useToken()

  return (
    <Row
      gutter={[32, 32]}
      align="middle"
      style={{
        minHeight: "calc(100vh - 65px)",
        padding: "48px 48px",
        background: token.colorBgBase,
        color: token.colorTextBase,
      }}
    >
      <Col xs={24} md={12}>
        <Title style={{fontSize: "60px", marginBottom: 8}}>
          Varun Agarwal
        </Title>
        <Paragraph style={{fontSize: "24px", marginTop: 16, maxWidth: 600, color: token.colorTextSecondary}}>
          A Full Stack Developer specializing in React, TypeScript, and GraphQL. I build scalable,
          user-focused web apps at Smart Futures. Previously, I worked at Viasat, Verizon, and Honeywell,
          and hold a Master’s in Software Engineering from Carnegie Mellon University.
        </Paragraph>
        <SocialIcons links={socialMediaLinks} />
      </Col>

      <Col xs={24} md={12}>
        <img
          src={home}
          alt="illustration"
          style={{width: "auto", height: "auto", maxHeight: "100%", maxWidth: "100%"}}
        />
      </Col>
      <Col xs={24} md={12}>
        <Title style={{fontSize: "60px", marginBottom: 8}}>
          Varun Agarwal
        </Title>
        <Paragraph style={{fontSize: "24px", marginTop: 16, maxWidth: 600, color: token.colorTextSecondary}}>
          A Full Stack Developer specializing in React, TypeScript, and GraphQL. I build scalable,
          user-focused web apps at Smart Futures. Previously, I worked at Viasat, Verizon, and Honeywell,
          and hold a Master’s in Software Engineering from Carnegie Mellon University.
        </Paragraph>
        <SocialIcons links={socialMediaLinks} />
      </Col>

      <Col xs={24} md={12}>
        <img
          src={home}
          alt="illustration"
          style={{width: "auto", height: "auto", maxHeight: "100%", maxWidth: "100%"}}
        />
      </Col>
      <Col xs={24} md={12}>
        <Title style={{fontSize: "60px", marginBottom: 8}}>
          Varun Agarwal
        </Title>
        <Paragraph style={{fontSize: "24px", marginTop: 16, maxWidth: 600, color: token.colorTextSecondary}}>
          A Full Stack Developer specializing in React, TypeScript, and GraphQL. I build scalable,
          user-focused web apps at Smart Futures. Previously, I worked at Viasat, Verizon, and Honeywell,
          and hold a Master’s in Software Engineering from Carnegie Mellon University.
        </Paragraph>
        <SocialIcons links={socialMediaLinks} />
      </Col>

      <Col xs={24} md={12}>
        <img
          src={home}
          alt="illustration"
          style={{width: "auto", height: "auto", maxHeight: "100%", maxWidth: "100%"}}
        />
      </Col>
      <Col xs={24} md={12}>
        <Title style={{fontSize: "60px", marginBottom: 8}}>
          Varun Agarwal
        </Title>
        <Paragraph style={{fontSize: "24px", marginTop: 16, maxWidth: 600, color: token.colorTextSecondary}}>
          A Full Stack Developer specializing in React, TypeScript, and GraphQL. I build scalable,
          user-focused web apps at Smart Futures. Previously, I worked at Viasat, Verizon, and Honeywell,
          and hold a Master’s in Software Engineering from Carnegie Mellon University.
        </Paragraph>
        <SocialIcons links={socialMediaLinks} />
      </Col>

      <Col xs={24} md={12}>
        <img
          src={home}
          alt="illustration"
          style={{width: "auto", height: "auto", maxHeight: "100%", maxWidth: "100%"}}
        />
      </Col>
      <TopButton />
    </Row>
  )
}

export default Home
