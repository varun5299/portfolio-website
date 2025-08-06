import { Card, Tag, Typography } from "antd"
import { ClockCircleOutlined, UploadOutlined } from "@ant-design/icons"
import { BlogPost } from "@utils/fetchMediumFeed"
import { getTagColor } from "@utils/tagColors"
import { motion } from "framer-motion"
import { theme } from "antd"
import React from "react"

const { Title, Text, Paragraph } = Typography

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { token } = theme.useToken()

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        hoverable
        style={{
          borderRadius: 12,
          overflow: "hidden",
          background: token.colorBgContainer,
          color: token.colorTextBase,
        }}
        cover={
          post.thumbnail && (
            <img
              src={post.thumbnail}
              alt={post.title}
              style={{ height: 180, width: "100%", objectFit: "cover" }}
            />
          )
        }
        actions={[
          <motion.a
            key="read-more"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 500, display: "inline-block" }}
          >
            Read →
          </motion.a>,
        ]}
      >
        <Title level={4} ellipsis={{ rows: 2 }} style={{ marginBottom: 8 }}>
          {post.title}
        </Title>

        <div style={{ marginBottom: 8 }}>
          <UploadOutlined style={{ marginRight: 8 }} />
          <Text type="secondary">
            {new Date(post.pubDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
          <Text type="secondary" style={{ color: token.colorTextSecondary }}>
            <ClockCircleOutlined style={{ marginRight: 8, marginLeft: 8 }} />
            {Math.ceil(post.contentSnippet.split(" ").length / 200)} min read
          </Text>
        </div>

        {post.categories.length > 0 && (
          <div style={{ marginBottom: 8 }}>
            {post.categories.map((tag, idx) => (
              <Text key={idx}>
                <Tag color={getTagColor(tag)} style={{ marginBottom: "10px" }}>
                  {tag}
                </Tag>
              </Text>
            ))}
          </div>
        )}

        <Paragraph ellipsis={{ rows: 3 }}>
          {post.contentSnippet}
        </Paragraph>
      </Card>
    </motion.div>
  )
}

export default BlogCard
