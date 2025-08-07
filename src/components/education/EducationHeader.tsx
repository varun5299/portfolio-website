import {Col, Row, theme, Tooltip, Typography} from "antd"
import {SiHackerrank, SiLeetcode, SiMedium} from "react-icons/si"
import gradHat from "@assets/education.svg"
import {motion} from "framer-motion"

const {Title, Paragraph} = Typography

const EducationHeader = () => {
  const {token} = theme.useToken()

  return (
    <Row align="middle" justify="space-between" style={{padding: "120px 96px"}}>
      <Col xs={24} md={14}>
        <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, ease: "easeOut"}}
        >
          <img
            src={gradHat}
            alt="Graduation Hat"
            style={{width: "auto", height: "auto", maxHeight: "100%", maxWidth: "100%"}}
          />
        </motion.div>
      </Col>

      <Col xs={24} md={10} style={{textAlign: "center"}}>
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.3, duration: 0.6, ease: "easeOut"}}
        >
          <Title style={{fontSize: "72px", marginBottom: 8, fontWeight: "bold"}}>Education</Title>
          <Paragraph style={{fontSize: "32px", marginTop: 16, color: token.colorTextSecondary, marginBottom: 0}}>
            Basic Qualification and Certifications
          </Paragraph>

          <div style={{marginTop: 10, display: "flex", justifyContent: "center", gap: 32}}>
            <Tooltip title="LeetCode">
              <motion.div
                whileHover={{scale: 1.2, rotate: 5}}
                transition={{type: "spring", stiffness: 300}}
                style={{cursor: "pointer"}}
                onClick={() => window.open("https://leetcode.com/u/varun5299/", "_blank")}
              >
                <SiLeetcode size={42} />
              </motion.div>
            </Tooltip>

            <Tooltip title="HackerRank">
              <motion.div
                whileHover={{scale: 1.2, rotate: -5}}
                transition={{type: "spring", stiffness: 300}}
                style={{cursor: "pointer"}}
                onClick={() => window.open("https://www.hackerrank.com/profile/varun_agarwal521", "_blank")}
              >
                <SiHackerrank size={42} />
              </motion.div>
            </Tooltip>

            <Tooltip title="Medium Blog">
              <motion.div
                whileHover={{scale: 1.2, rotate: -5}}
                transition={{type: "spring", stiffness: 300}}
                style={{cursor: "pointer"}}
                onClick={() => window.open("https://medium.com/@varun.agarwal5299", "_blank")}
              >
                <SiMedium size={42} />
              </motion.div>
            </Tooltip>

          </div>
        </motion.div>
      </Col>
    </Row>
  )
}

export default EducationHeader
