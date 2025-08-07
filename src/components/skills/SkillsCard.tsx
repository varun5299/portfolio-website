import {Col, Row, Tag, theme, Tooltip, Typography} from "antd"
import {motion} from "framer-motion"
import React from "react"

const {Title, Paragraph} = Typography

export interface SkillCardProps {
  title: string;
  iconSet: {
    Icon: React.ElementType;
    label: string;
  }[];
  image: string;
  paragraphs: React.ReactNode[];
  reverse?: boolean;
  experience?: {
    label: string;
    tooltip: string;
    color?: string;
    icon?: React.ReactNode;
  };
}

const SkillCard: React.FC<SkillCardProps> = ({title, iconSet, image, paragraphs, reverse, experience}) => {
  const {token} = theme.useToken()

  return (
    <Row
      gutter={[32, 32]}
      align="middle"
      style={{marginBottom: 64, flexDirection: reverse ? "row-reverse" : "row"}}
    >
      <Col xs={24} md={12}>
        <img
          src={image}
          alt={title}
          style={{width: "auto", height: "auto", maxHeight: "100%", maxWidth: "100%"}}
        />
      </Col>

      <Col xs={24} md={12}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 20,
        }}>
          <Title level={2} style={{fontSize: "44px", margin: 0}}>
            {title}
          </Title>
          {experience && (
            <Tooltip title={experience.tooltip} placement="top">
              <Tag
                color={experience.color || "blue"}
                style={{
                  fontSize: 16,
                  padding: "4px 10px",
                  borderRadius: 8,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  height: "auto",
                }}
              >
                {experience.icon}
                <span style={{marginLeft: 6}}>{experience.label}</span>
              </Tag>
            </Tooltip>
          )}
        </div>

        <div style={{fontSize: 44, marginBottom: 20, display: "flex", flexWrap: "wrap"}}>
          <motion.div
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, duration: 0.6, ease: "easeOut"}}
            style={{display: "flex", gap: 16, flexWrap: "wrap"}}
          >
            {iconSet.map((Icon, idx) => (
              <Tooltip title={Icon.label} key={idx}>
                <motion.div
                  whileHover={{scale: 1.2, rotate: -5}}
                  transition={{type: "spring", stiffness: 300}}
                  style={{
                    marginRight: 16,
                    cursor: "pointer",
                    fontSize: 42,
                  }}
                >
                  <Icon.Icon />
                </motion.div>
              </Tooltip>
            ))}
          </motion.div>
        </div>

        {paragraphs.map((text, idx) => (
          <Paragraph key={idx} style={{fontSize: 22, color: token.colorTextSecondary}}>
            {text}
          </Paragraph>
        ))}
      </Col>
    </Row>
  )
}

export default SkillCard
