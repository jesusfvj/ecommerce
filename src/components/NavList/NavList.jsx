import { NavLink } from 'react-router-dom';
import FetchContext from '../../context/FetchContext.jsx';
import { useContext, useRef } from 'react';
import './NavList.css';

export const NavList = () => {
    const { dataFetch } = useContext(FetchContext);
    const listRef = useRef();

    const handleMouseLeave = (e) => {
        listRef.current.style.display = 'none';
      };

    return (
        <div className="nav-list-container" onMouseLeave={handleMouseLeave} ref={listRef}>
            <ul>
                {dataFetch.map(({ title, id }) => {
                    if (id <= 15) {
                        return (
                            <NavLink className="nav-list-elements" to={`/gallery/${title}`}>{title}<br/></NavLink>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
