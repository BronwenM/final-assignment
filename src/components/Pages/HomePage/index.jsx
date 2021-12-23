import './styles.css';
import {Tweet} from '../../Tweet';
import { Footer } from '../../Footer';
import { Button } from '../../Button';
import { Search } from '../../Search';

export const HomePage = () => {
    return(
        <div>
            <header>
                <h1>Home page (currently testing)</h1>
            </header>
            <div className='page-content'>
                <div className='main-content'>
                    <table className='timeline'>
                        <tr>
                            <Tweet screenName="Shadow" username="ArchivistShadow" timePosted="33s" likes={3}/>
                        </tr>
                        <tr>
                            <Tweet screenName="Shadow" username="ArchivistShadow" timePosted="33s" likes={3}/>
                        </tr>
                    </table>
                </div>
                <div className='sidebar'>
                    <Footer/>
                    <Button isDisabled={false} type="primary" text="Tweet"/>
                    <Button isDisabled={false} type="secondary" text="Follow"/>
                    <Button isDisabled={false} type="tertiary" text="Set up profile"/>
                    <Search/>
                </div>
                
            </div>
            
            
            
        </div>
    );
}