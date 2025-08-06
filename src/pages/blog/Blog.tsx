import {useEffect, useState} from "react"
import {Button, Col, Empty, Row, Skeleton, theme, Typography} from "antd"
import {BlogPost, fetchMediumFeed} from "@utils/fetchMediumFeed"
import BlogCard from "@components/blog/BlogCard"
import TagFilter from "@components/blog/TagFilter"
import {CardContainer, PageContainer} from "@components/container"

const {Title} = Typography

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const {token} = theme.useToken()

  useEffect(() => {
    fetchMediumFeed()
      .then(setPosts)
      .catch(() => {
        setPosts([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const allTags = Array.from(
    new Set(
      posts.flatMap(post => post.categories ?? []),
    ),
  )

  const filteredPosts = selectedTag
    ? posts.filter(post => post.categories?.includes(selectedTag))
    : posts

  return (
    <PageContainer>
      <Title level={2}>Blog</Title>

      {loading ? (
        <CardContainer>
          <Row gutter={[16, 16]}>
            {Array.from({length: 6}).map((_, idx) => (
              <Col xs={24} sm={12} md={8} key={idx}>
                <Skeleton active />
              </Col>
            ))}
          </Row>
        </CardContainer>
      ) : posts.length === 0 ? (
        <Empty description="No articles found." />
      ) : (
        <>
          <CardContainer style={{
            padding: "48px 24px",
            background: token.colorBgBase,
            color: token.colorTextBase,
          }}>
            <TagFilter
              allTags={allTags ?? []}
              selectedTag={selectedTag}
              onSelectTag={setSelectedTag}
            />
          </CardContainer>

          <CardContainer style={{
            padding: "48px 24px",
            background: token.colorBgBase,
            color: token.colorTextBase,
          }}>
            <Row gutter={[16, 16]}>
              {filteredPosts.map((post, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <BlogCard post={post} />
                </Col>
              ))}
            </Row>

            {filteredPosts.length === 0 && (
              <Empty description="No posts match this tag." style={{marginTop: 48}} />
            )}

            <div style={{marginTop: "32px", textAlign: "center"}}>
              <Button
                type="primary"
                size="large"
                href="https://medium.com/@varun.agarwal5299"
                target="_blank"
              >
                View All Articles
              </Button>
            </div>
          </CardContainer>
        </>
      )}
    </PageContainer>
  )
}

export default Blog
