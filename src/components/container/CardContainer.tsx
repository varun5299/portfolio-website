import {HTMLProps, ReactNode} from "react"
import styles from "./Container.module.less"

type CardContainerProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
}

export default function CardContainer({children, className, ...props}: CardContainerProps) {
  return (
    <div {...props} className={`${styles.cardContainer}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  )
}
