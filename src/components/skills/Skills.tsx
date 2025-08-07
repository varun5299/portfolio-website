import {Row, theme, Typography} from "antd"
import {
  SiApachekafka,
  SiApollographql,
  SiDocker,
  SiExpress,
  SiGooglecloud,
  SiHeroku,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
} from "react-icons/si"
import {FaAws, FaJava} from "react-icons/fa"
import {
  ApiOutlined,
  ClockCircleOutlined,
  CloudServerOutlined,
  CodeOutlined,
  DeploymentUnitOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons"
import fullStack from "@assets/fullstack.svg"
import backend from "@assets/backend.svg"
import cloud from "@assets/cloud.svg"
import SkillCard from "@components/skills/SkillsCard"

const {Title} = Typography

const Skills = () => {
  const {token} = theme.useToken()

  return (
    <div
      style={{
        padding: "96px",
        background: token.colorBgBase,
        color: token.colorTextBase,
      }}
    >
      <Row justify={"center"} style={{marginBottom: 48}}>
        <Title style={{fontSize: "72px"}}>What I Do?</Title>
      </Row>

      {/* MERN STACK */}
      <SkillCard
        title="MERN Stack Development"
        iconSet={[
          {Icon: SiMongodb, label: "MongoDB"},
          {Icon: SiExpress, label: "Express.js"},
          {Icon: SiReact, label: "React.js"},
          {Icon: SiNodedotjs, label: "Node.js"},
          {Icon: SiTypescript, label: "TypeScript"},
          {Icon: SiJavascript, label: "JavaScript"},
          {Icon: SiApollographql, label: "Apollo GraphQL"},
        ]}
        image={fullStack}
        experience={{
          label: "5+ yrs",
          tooltip: "Working with MERN Stack since 2020",
          color: "green",
          icon: <ClockCircleOutlined />,
        }}
        paragraphs={[
          <>
            <ThunderboltOutlined style={{marginRight: 8, color: token.colorPrimary}} />
            Building full-stack apps using MongoDB, Express, React, and Node.js.
          </>,
          <>
            <CodeOutlined style={{marginRight: 8, color: token.colorPrimary}} />
            RESTful and GraphQL APIs with modular backend architecture.
          </>,
        ]}
      />

      {/* JAVA + NODE BACKEND STACK */}
      <SkillCard
        title="Backend Development"
        iconSet={[
          {Icon: FaJava, label: "Java"},
          {Icon: SiSpringboot, label: "Spring Boot"},
          {Icon: SiMysql, label: "MySQL"},
          {Icon: SiRedis, label: "Redis"},
          {Icon: SiApachekafka, label: "Apache Kafka"},
        ]}
        image={backend}
        experience={{
          label: "5+ yrs",
          tooltip: "Working with Backend Stack since 2020",
          color: "green",
          icon: <ClockCircleOutlined />,
        }}
        reverse
        paragraphs={[
          <>
            <ApiOutlined style={{marginRight: 8, color: token.colorPrimary}} />
            Microservices and APIs with Java (Spring Boot), Redis, Kafka, and MySQL.
          </>,
          <>
            <DeploymentUnitOutlined style={{marginRight: 8, color: token.colorPrimary}} />
            Event-driven architecture, caching, message brokers, and async processing.
          </>,
        ]}
      />

      {/* CLOUD & DEVOPS STACK */}
      <SkillCard
        title="Cloud & DevOps"
        iconSet={[
          {Icon: FaAws, label: "AWS"},
          {Icon: SiGooglecloud, label: "Google Cloud Platform"},
          {Icon: SiHeroku, label: "Heroku"},
          {Icon: SiNetlify, label: "Netlify"},
          {Icon: SiDocker, label: "Docker"},
          {Icon: SiTerraform, label: "Terraform"},
        ]}
        image={cloud}
        experience={{
          label: "2+ yrs",
          tooltip: "Working with Cloud Stacks since 2023",
          color: "volcano",
          icon: <ClockCircleOutlined />,
        }}
        paragraphs={[
          <>
            <CloudServerOutlined style={{marginRight: 8, color: token.colorPrimary}} />
            Deploying and managing services with AWS, GCP, Heroku, and Netlify.
          </>,
          <>
            <CodeOutlined style={{marginRight: 8, color: token.colorPrimary}} />
            Using Docker and Terraform for containerization and infrastructure automation.
          </>,
        ]}
      />
    </div>
  )
}

export default Skills
