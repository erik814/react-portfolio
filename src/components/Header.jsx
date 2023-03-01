import Nav from './Nav'

function Header(){

    return(
        <header className="header">
            <h1>
                <a className='link initials' href='/'>EN</a>
            </h1>
            <Nav/>

        </header>
    )
}

export default Header;