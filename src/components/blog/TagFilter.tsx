import { Tag, Typography } from "antd"
import { JSX } from "react/jsx-runtime"

type TagFilterProps = {
  allTags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

const TagFilter = ({ allTags, selectedTag, onSelectTag }: TagFilterProps): JSX.Element => {
  return (
    <div style={{ marginBottom: 24 }}>
      <Typography.Text strong>Filter by tag:</Typography.Text>{" "}
      <Tag
        color={selectedTag === null ? "processing" : "default"}
        onClick={() => { onSelectTag(null) }}
        style={{ cursor: "pointer" }}
      >
        All
      </Tag>
      {allTags.map(tag => (
        <Tag
          key={tag}
          color={selectedTag === tag ? "processing" : "default"}
          onClick={() => { onSelectTag(tag) }}
          style={{ cursor: "pointer" }}
        >
          {tag}
        </Tag>
      ))}
    </div>
  )
}

export default TagFilter
