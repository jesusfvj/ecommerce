import './index.css';
import { TopArrow } from "../TopArrow";

export const Triangle = ({classAttribute}) => {
  return (
    <div className={`triangle-body ${classAttribute}`}>
      <TopArrow classAttribute="top-arrow arrow-body"/>
    </div>
  )
}
