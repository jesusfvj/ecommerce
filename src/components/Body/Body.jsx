import './Body.css';

export const Body = (props) => {
  return (
    <>
        <div className="body-container">
        {props.children}
        </div>
    </>
  )
}
