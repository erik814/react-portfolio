
function Nav({currentPage, setCurrentPage}){
    return(
        <nav>
            {/* <div className={currentPage === "about" ? "current" : ""} onClick={() => setCurrentPage("about")}>
                About
            </div>
            <div className={currentPage === "portfolio" ? "current" : ""} onClick={() => setCurrentPage("portfolio")}>
                Portfolio
            </div>
            <div className={currentPage === "resume" ? "current" : ""} onClick={() => setCurrentPage("resume")}>
                Resume
            </div>
            <div className={currentPage === "contact" ? "current" : ""} onClick={() => setCurrentPage("contact")}>
                Contact
            </div> */}



            <div>
                <a className='nav-link link' href='#about' onClick={() => setCurrentPage('about')}>About</a>
            </div>

            <div>
                <a className='nav-link link' href='#portfolio' onClick={() => setCurrentPage('portfolio')}>Portfolio</a>
            </div>

            <div>
                <a className='nav-link link' href='#resume' onClick={() => setCurrentPage('resume')}>Resume</a>
            </div>

            <div>
                <a className='nav-link link' href='#contact' onClick={() => setCurrentPage('contact')}>Contact</a>
            </div>



            {/* <div>
                <a className='nav-link link' href='/react-portfolio/about'>About</a>
            </div>

            <div>
                <a className='nav-link link' href='/react-portfolio/portfolio'>Portfolio</a>
            </div>

            <div>
                <a className='nav-link link' href='/react-portfolio/resume'>Resume</a>
            </div>

            <div>
                <a className='nav-link link' href='/react-portfolio/contact'>Contact</a>
            </div> */}
        </nav>
    )
}

export default Nav;