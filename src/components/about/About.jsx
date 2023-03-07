import portrait from '../../images/me.jpg'
import './about.css'

function About(){

    return(
        <div className="about-container">
            <div className="about-text-container">
                <h2>About Me</h2>
                <p>Hi there! My name is Erik Neafus and I'm a web developer based in the Twin Cities. I recently graduated from the University of Minnesota full stack web development bootcamp where I learned the latest web development technologies and gained hands-on experience building web applications.</p>

                <p>
                During my bootcamp, I learned how to develop full-stack web applications using technologies such as JavaScript, React, Node.js, Express, and MongoDB. I'm also experienced in using version control tools such as Git and GitHub to collaborate with other developers.
                </p>

                <p>
                I'm currently seeking opportunities to work with a team of experienced developers and contribute my skills to develop web applications. If you're looking for a web developer who is eager to learn and grow, please feel free to contact me.</p>
            </div>

            <div className="portrait-container">
                <img className='portrait' src={portrait} alt="placeholder profile picture"/>
            </div>
        </div>
    )

};


export default About;