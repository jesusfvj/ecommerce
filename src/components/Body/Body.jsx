import './Body.css';

export const Body = ({children, containerClassName}) => {
  return (
    <>
        <div className={containerClassName}>
        {children}
        </div>
    </>
  )
}
