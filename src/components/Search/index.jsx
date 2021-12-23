import './styles.css';
import {CgSearch} from 'react-icons/cg';

export const Search = () => {
    const icon = <CgSearch/>;
    return(
        <div className='search-bar'>
            <CgSearch className='search-icon'/> <input className='search' name='search' placeholder='Search Twitter'/>
        </div>
        
    );
}