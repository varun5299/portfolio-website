import {Col, Row} from "antd"
import CircularLogo from "@components/circularLogo/CircularLogo"
import ContentCard from "@components/exp-edu-card/ContentCard"

interface Props {
  logo: string;
  title: string;
  subtitle: string;
  dateRange: string;
  bulletPoints: string[];
  website: string;
}

const EducationCard = ({logo, title, subtitle, dateRange, bulletPoints, website}: Props) => {
  return (
    <Row gutter={24} align="middle" style={{marginBottom: 48}}>
      {/* Logo */}
      <Col
        xs={24}
        md={4}
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}
      >
        <CircularLogo src={logo} alt={title} />
      </Col>

      {/* Card Content */}
      <Col xs={24} md={20}>
        <ContentCard
          title={title}
          subtitle={subtitle}
          dateRange={dateRange}
          bulletPoints={bulletPoints}
          website={website}
        />
      </Col>
    </Row>
  )
}

export default EducationCard
