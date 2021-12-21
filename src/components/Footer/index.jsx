import './styles.css';

export const Footer = () => {
    return(
        <div className='footer'>
            <a href='/tos'>Terms of Service</a>
            <a href='/privacy'>Privacy Policy</a>
            <a href='/cookies'>Cookie Policy</a>
            <a href='/accessibility'>Accessibility</a>
            <a href='/ads'>Ads Info</a>
            <p>© 2021 Twitter, Inc.</p>
        </div>
    );
}