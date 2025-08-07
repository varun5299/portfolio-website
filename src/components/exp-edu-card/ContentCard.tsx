import {Button, Card, theme, Typography} from "antd"

const {Title, Paragraph} = Typography

interface Props {
  title: string;
  subtitle: string;
  dateRange: string;
  bulletPoints: string[];
  website: string;
}

const ContentCard = ({title, subtitle, dateRange, bulletPoints, website}: Props) => {
  const {token} = theme.useToken()

  return (
    <Card
      title={
        <Title level={4} style={{marginBottom: 0, color: token.colorText}}>
          {title}
        </Title>
      }
      extra={
        <span style={{fontWeight: 500, color: token.colorTextSecondary}}>
          {dateRange}
        </span>
      }
      style={{
        background: token.colorBgContainer,
        border: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        borderRadius: 12,
      }}
      styles={{
        header: {
          borderBottom: `1px solid ${token.colorBorderSecondary}`,
          background: token.colorFillSecondary,
        },
      }}
    >
      <Paragraph strong style={{marginBottom: 16, color: token.colorText}}>
        {subtitle}
      </Paragraph>

      {bulletPoints.map((point, i) => (
        <Paragraph key={i} style={{marginBottom: 8, color: token.colorTextSecondary}}>
          ⚡ {point}
        </Paragraph>
      ))}

      <Button
        href={website}
        target="_blank"
        style={{
          marginTop: 16,
          backgroundColor: token.colorPrimary,
          color: token.colorTextLightSolid,
          borderRadius: 6,
          padding: "4px 16px",
          fontWeight: 500,
          border: "none",
        }}
      >
        Visit Website
      </Button>
    </Card>
  )
}

export default ContentCard
