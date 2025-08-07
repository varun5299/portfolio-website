import {Card, Tag, theme, Typography} from "antd"
import {ClockCircleOutlined, UploadOutlined} from "@ant-design/icons"
import {BlogPost} from "@utils/fetchMediumFeed"
import {getTagColor} from "@utils/tagColors"
import {motion} from "framer-motion"
import React from "react"

const BlogCard: React.FC<{post: BlogPost}> = ({post}) => {
  const {token} = theme.useToken()

  return (
    <motion.div
      whileHover={{scale: 1.02}}
      transition={{type: "spring", stiffness: 300, damping: 20}}
    >
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration: "none"}}
      >
        <Card
          hoverable
          style={{
            borderRadius: 12,
            overflow: "hidden",
            background: token.colorBgContainer,
            color: token.colorTextBase,
            height: "100%",
          }}
          cover={
            post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                style={{
                  height: 180,
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            )
          }
        >
          <Typography.Title level={4} ellipsis={{rows: 2}} style={{marginBottom: 8}}>
            {post.title}
          </Typography.Title>

          <div style={{marginBottom: 8}}>
            <UploadOutlined style={{marginRight: 8}} />
            <Typography.Text type="secondary" style={{color: token.colorTextSecondary}}>
              {new Date(post.pubDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </Typography.Text>
            <Typography.Text type="secondary" style={{color: token.colorTextSecondary}}>
              <ClockCircleOutlined style={{marginRight: 8, marginLeft: 8}} />
              {Math.ceil(post.contentSnippet.split(" ").length / 200)} min read
            </Typography.Text>
          </div>

          {(post.categories ?? []).length > 0 && (
            <div style={{marginBottom: 8}}>
              {post.categories?.map((tag, idx) => (
                <Typography.Text key={idx}>
                  <Tag color={getTagColor(tag)} style={{marginBottom: "10px"}}>{tag}</Tag>
                </Typography.Text>
              ))}
            </div>
          )}

          <Typography.Paragraph ellipsis={{rows: 3}}>
            {post.contentSnippet}
          </Typography.Paragraph>
        </Card>
      </a>
    </motion.div>
  )
}

export default BlogCard
