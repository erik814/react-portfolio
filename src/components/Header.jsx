import Nav from './Nav'

function Header({currentPage, setCurrentPage}){

    return(
        <header className="header">
            <h1>
                <a className='link initials' href='/react-portfolio/'>EN</a>
            </h1>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </header>
    )
}

export default Header;