import abstract from "../../images/green-lines.jpg"
import './home.css'

function Home() {

    return(
        <div className="home">
            <div className="home-text">
                <h2>Erik Neafus</h2>
                <h3>Web Developer</h3>
                <p>I'm a web developer with a passion for creating engaging and responsive websites. Take a look around and see some of the projects I've worked on. If you want to know more, head over to my About page, or send me a message on my Contact page!</p>
            </div>

            <div className="home-image">
                <img src={abstract} alt="abstract green picture"/>
            </div>
        </div>
    )

};


export default Home;