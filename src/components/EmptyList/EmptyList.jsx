import './EmptyList.css';
import illustration from '../../assets/images/pointingIllustration.png';
import InputContext from '../../context/InputContext.jsx';
import { useContext } from 'react';
import { useLocation } from "react-router-dom";

export const EmptyList = () => {
  const { task } = useContext(InputContext);
  const location = useLocation();
  return (
    <section className='empty-section-container'>
    {
      location.pathname === '/'
      ?
        <>
            <img className='empty-section-img' src={illustration} alt='illustration' />
            <p className='empty-section-text'>YOUR WISHES ARE WAITING TO BE CREATED!<br />
              START BY CLICKING ON THE CROSS.</p>
        </>
      :
            <p className='empty-section-text'>YOU DON'T HAVE ANY WISHES IN THIS LIST.</p>
    }
    </section>
  )
}
