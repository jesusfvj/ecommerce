import './Body.css';
import addIcon from '../../assets/images/addIconGrey.png';
import eyeIcon from '../../assets/images/eyeIcon.png';
import nowIcon from '../../assets/images/checkedIcon.png';
import checkedIcon from '../../assets/images/nowIcon.png';
import broomIcon from '../../assets/images/broomIcon.png';
import { EmptyList } from '../../pages';

export const Body = () => {
  return (
    <div className="body-container">
        <div className="main-container">
            <aside className='aside-container'>
                <img className='aside-icons' src={addIcon} alt="" />
                <img className='aside-icons' src={eyeIcon} alt="" />
                <img className='aside-icons' src={nowIcon} alt="" />
                <img className='aside-icons' src={checkedIcon} alt="" />
                <img className='aside-icons' src={broomIcon} alt="" />
                <p className='aside-number-wishes'>X items</p>
            </aside>
            <EmptyList/>
        </div>
    </div>
  )
}
