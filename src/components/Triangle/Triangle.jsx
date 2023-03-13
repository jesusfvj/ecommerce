import './Triangle.css';
import { TopArrow } from "../TopArrow/TopArrow";

export const Triangle = ({classAttribute}) => {
  return (
    <div className={`triangle-body ${classAttribute}`}>
      <TopArrow classAttribute="top-arrow arrow-body"/>
    </div>
  )
}
