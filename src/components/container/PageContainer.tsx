import {HTMLProps, ReactNode} from "react"
import {theme} from "antd"

type PageContainerProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
}

export default function PageContainer({children, ...props}: PageContainerProps) {
  const {token} = theme.useToken()

  return (
    <div {...props} style={{
      padding: "48px 48px",
      minHeight: "calc(100vh - 65px)",
      background: token.colorBgBase,
      color: token.colorTextBase,
    }}>
      {children}
    </div>
  )
}
