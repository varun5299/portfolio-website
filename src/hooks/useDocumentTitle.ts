import {useEffect} from "react"

/**
 * Sets the document title directly on mount/update.
 * Automatically resets to default on unmount.
 */
export function useDocumentTitle(title: string, defaultTitle = "Varun's Portfolio") {
  useEffect(() => {
    document.title = title ? `${title} :: ${defaultTitle}` : defaultTitle

    return () => {
      document.title = defaultTitle
    }
  }, [title, defaultTitle])
}
