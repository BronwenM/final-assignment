import './styles.css';
import {Tweet} from '../../Tweet';
import { Footer } from '../../Footer';

export const HomePage = () => {
    return(
        <div>
            <h1>Home page (currently testing)</h1>
            <table className='timeline'>
                <tr>
                    <Tweet screenName="Shadow" username="ArchivistShadow" timePosted="33s" likes={3}/>
                </tr>
                <tr>
                    <Tweet screenName="Shadow" username="ArchivistShadow" timePosted="33s" likes={3}/>
                </tr>
            </table>
            <Footer/>
            
        </div>
    );
}