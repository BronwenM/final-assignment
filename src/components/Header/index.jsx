import './styles.css';
import {IoArrowBack} from 'react-icons/io5';
import {useNavigate} from 'react-router-dom';

export const Header = (props) => {
    const {hasArrow, title, hasSubtitle, subtitle} = props;

    let navigate = useNavigate();

    return (
        <header>
            {hasArrow && <button className='back-btn' onClick={()=>{navigate(-1)}}><IoArrowBack/></button>}
            <div id='header-text'>
                <h3>{title}</h3>
                {hasSubtitle && <p>{subtitle}</p>}
            </div>
        </header>
        
    );
}