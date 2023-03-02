import portrait from '../images/portrait-placeholder.png'

function About(){
    if (window.location.pathname === "/about"){
        return(
            <div>
                <div>
                    <h2>About Me</h2>
                    <p>Hi there! My name is [Your Name] and I'm a web developer based in [Your City]. I recently graduated from a coding bootcamp where I learned the latest web development technologies and gained hands-on experience building web applications.</p>

                    <p>
                    As a web developer, I enjoy building responsive and user-friendly websites that help businesses and individuals achieve their goals. I'm passionate about using technology to solve real-world problems and I'm excited to be part of the growing web development industry.
                    </p>

                    <p>
                    During my bootcamp, I learned how to develop full-stack web applications using technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB. I'm also experienced in using version control tools such as Git and GitHub to collaborate with other developers.
                    </p>

                    <p>
                    Apart from web development, I enjoy [hobbies or interests related to your personality]. I believe that having hobbies outside of work helps me stay motivated, creative, and energized.
                    </p>

                    <p>
                    I'm currently seeking opportunities to work with a team of experienced developers and contribute my skills to develop innovative web applications. If you're looking for a web developer who is eager to learn and grow, please feel free to [provide contact information or a link to your portfolio].</p>
                </div>

                {/* <div>
                    <img src={portrait} alt="placeholder profile picture"/>
                </div> */}
            </div>
        )
    }
};


export default About;