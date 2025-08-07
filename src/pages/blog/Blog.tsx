import {useEffect, useState} from "react"
import {Button, Col, Empty, Row, Skeleton, Typography} from "antd"
import {BlogPost, fetchMediumFeed} from "@utils/fetchMediumFeed"
import BlogCard from "@components/blog/BlogCard"
import TagFilter from "@components/blog/TagFilter"
import PageContainer from "@components/container/PageContainer"
import {useDocumentTitle} from "@hooks/useDocumentTitle"

const {Title} = Typography

const Blog = () => {
  useDocumentTitle("Blog")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

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
        <Row gutter={[16, 16]}>
          {Array.from({length: 6}).map((_, idx) => (
            <Col xs={24} sm={12} md={8} key={idx}>
              <Skeleton active />
            </Col>
          ))}
        </Row>
      ) : posts.length === 0 ? (
        <Empty description="No articles found." />
      ) : (
        <>
          <TagFilter
            allTags={allTags ?? []}
            selectedTag={selectedTag}
            onSelectTag={setSelectedTag}
          />

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
        </>
      )}

      <div style={{marginTop: "32px", textAlign: "center"}}>
        <Button
          size="large"
          href="https://medium.com/@varun.agarwal5299"
          target="_blank"
        >
          View All Articles
        </Button>
      </div>
    </PageContainer>
  )
}

export default Blog
