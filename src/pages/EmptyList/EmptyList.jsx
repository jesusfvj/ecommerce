import './EmptyList.css';
import illustration from '../../assets/images/pointingIllustration.png';

export const EmptyList = () => {
  return (
    <section className='empty-section-container'>
        <img className='empty-section-img' src={illustration} alt='illustration'/>
        <p className='empty-sectino-text'>YOUR WISHES ARE WAITING TO BE CREATED!<br/>
START BY CLICKING ON THE CROSS.</p>
    </section>
  )
}
