import github from '../images/icons/github.png'
import linkedin from '../images/icons/linkedin.png'

function Footer({currentPage, setCurrentPage}){

    return(
        <footer className="footer">
            <div>
                <a className='footer-link' href='https://github.com/erik814' target='blank' onClick={() => setCurrentPage('about')}>
                    <img src={github} alt="github" className="footer-image"/>
                </a>
            </div>

            <div>
                <a className='footer-link' href='https://www.linkedin.com/in/erik-neafus/' target='blank' onClick={() => setCurrentPage('about')}>
                    <img src={linkedin} alt="github" className="footer-image"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;