import {Col, Row} from "antd"
import EducationCard from "@components/education/EducationCard"
import vit from "@assets/vit.png"
import cmu from "@assets/cmu.png"
import Title from "antd/es/typography/Title"

const DegreeEarned = () => {
  return (
    <div style={{padding: "96px"}}>
      <Row justify="center" style={{marginBottom: 24}}>
        <Col span={24} style={{textAlign: "center"}}>
          <Title style={{fontSize: "72px", fontWeight: 700, marginBottom: 24}}>Degrees Received</Title>
        </Col>

        <Row align="middle" justify="space-between">
          <Col span={24}>
            <EducationCard
              logo={cmu}
              title="Carnegie Mellon University (CMU), Pittsburgh"
              subtitle="Master of Software Engineering"
              dateRange="2022 - 2023"
              bulletPoints={[
                "Advanced coursework in Distributed Systems, Software Architecture, API Design, Agile Methods, Quality Assurance, and Data Structures.",
                "Graduate Research Assistant for MCDS Capstone Project on Network Science and ML.",
                "Teaching Assistant for Full Stack Development: Guided teams in React + Node.js project delivery.",
              ]}
              website="https://www.cmu.edu"
            />
          </Col>

          <Col span={24}>
            <EducationCard
              logo={vit}
              title="Vellore Institute of Technology (VIT), Vellore"
              subtitle="B.Tech. in Information Technology"
              dateRange="2016 - 2020"
              bulletPoints={[
                "Coursework in DBMS, Data Structures & Algorithms, Advanced Java, and Operating Systems.",
                "Built academic projects including a Library Management System and a Food Recipe Organizer.",
                "Active member of the Creativity Club; contributed to technical and cultural events.",
                "Graduated with distinction, recipient of Merit-cum-Means Scholarship and Academic Excellence Award.",
              ]}
              website="https://vit.ac.in"
            />
          </Col>
        </Row>
      </Row>
    </div>
  )
}

export default DegreeEarned
