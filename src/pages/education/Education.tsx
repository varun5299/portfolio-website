import EducationHeader from "@components/education/EducationHeader"
import {theme} from "antd"
import DegreeEarned from "@components/education/DegreeEarned"
import TopButton from "@components/top-button/TopButton"

const Education = () => {
  const {token} = theme.useToken()

  return (
    <div style={{background: token.colorBgBase, color: token.colorTextBase}}>
      <EducationHeader />
      <DegreeEarned />
      <TopButton />
    </div>
  )
}
export default Education
