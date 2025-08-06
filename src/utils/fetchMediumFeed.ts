export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail?: string;
  categories?: string[];
}

const MEDIUM_RSS_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@varun.agarwal5299"

export const fetchMediumFeed = async (): Promise<BlogPost[]> => {
  const response = await fetch(MEDIUM_RSS_URL)
  const result = await response.json()

  return result.items.map((item) => {
    const imageMatch = item.content?.match(/<img[^>]+src="([^">]+)"/i)
    const fallbackThumbnail = imageMatch?.[1] || ""

    const rawSnippet = item.description?.replace(/<[^>]+>/g, "").replace(/\n/g, " ") || ""

    const contentSnippet =
      rawSnippet.length > 200 ? rawSnippet.slice(0, 200).trim() + "..." : rawSnippet


    return {
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet,
      thumbnail: item.thumbnail || fallbackThumbnail,
      categories: item.categories || [],
    }
  })
}
