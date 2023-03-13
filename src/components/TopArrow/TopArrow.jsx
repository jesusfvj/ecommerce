import "./TopArrow.css";

export const TopArrow = ({classAttribute, handleClick}) => {
  return (
    <div className={classAttribute} onClick={handleClick}></div>
  )
}
