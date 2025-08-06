const TAG_COLOR_POOL = [
  "blue", "geekblue", "purple", "cyan", "green",
  "magenta", "volcano", "orange", "gold", "lime",
  "red", "pink",
]

const tagColorMap = new Map<string, string>()
let colorIndex = 0

export const getTagColor = (tag: string): string => {
  if (!tagColorMap.has(tag)) {
    tagColorMap.set(tag, TAG_COLOR_POOL[colorIndex % TAG_COLOR_POOL.length])
    colorIndex++
  }
  return tagColorMap.get(tag)!
}
