import { Footer } from '../Footer';
import { Search } from '../Search';
import './styles.css';

export const Sidebar = (props) => {
    const {hasSearch, hasNews, hasFollows, hasTrending} = props;

    return (
        <div className='sidebar'>
            {hasSearch && <Search/>}
            {/*Has news etc panels here*/}
            <Footer/>
        </div>
    )
}