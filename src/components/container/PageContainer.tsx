import {HTMLProps, ReactNode} from "react"
import styles from "./Container.module.less"

type PageContainerProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
}

export default function PageContainer({children, className, ...props}: PageContainerProps) {
  return (
    <div {...props} className={`${styles.pageContainer}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  )
}
