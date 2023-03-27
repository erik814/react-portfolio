import resume from '../../assets/erik-neafus-resume.pdf';
import portrait from '../../images/me.jpg'

import './resume.css'

function Resume(){

    return(

    <div>    
        <div className='download-container'>
            <a href={resume} download='erik-neafus-resume.pdf' className="download">Download</a>
        </div>

        <div className='skills-container'>
            <div className='skills-left'>
                <h2>Hard Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>Node.js</li>
                    <li>Express</li>
                </ul>
            </div>

            <div className='skills-right'>
                <h2>Soft Skills</h2>
                <ul>
                    <li>Team Work</li>
                    <li>Time Management</li>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Adaptability</li>
                    <li>Leadership</li>
                </ul>
            </div>
        </div>

        {/* <div className="resume-big"> */}
            {/* <a href={resume} download='erik-neafus-resume.pdf' className="download">Download</a> */}

            {/* <div className="resume-header">
                <img className='resume-portrait' src={portrait} alt="placeholder profile picture"/>
                <div className="resume-header-text">
                    <h1>Erik Neafus</h1>
                    <h2>Web Developer</h2>
                </div>
            </div> */}

            {/* <div className="resume-page"> 
                <div className="resume-container">                    
                    <div className="resume-body">
                        <div className="resume-profile">
                            <h2 className="bold">Profile</h2>
                            <p>I have just recently completed a web development bootcamp through the University of Minnesota. This bootcamp focused on the MERN stack, teaching technologies such as JavaScript, React, Express, MongoDB, MySql, and Node.js. Throughout the three months, I was given 2-3 projects to complete each week, as well as three collaborative group projects.</p>

                            <p>As a former framing carpenter, I have developed a strong foundation in problem-solving and attention to detail. I was part of a large team, as well as leading my own smaller team, working together to build new apartments. As such, communication and team work were regular aspects of the job, to ensure that my team's work would fit in seamlessly with another team.</p>
                        </div>

                        <div className="resume-employment">
                            <h2 className="bold">Employment History</h2>
                            <p className="bold">Lead Carpenter at Braxton, Hopkins, MN</p>
                            <p className="timeline">December 2019 - December 2022</p>
                            <ul>
                                <li>Led a team to achieve goals that were often changing by the hour</li>
                                <li>Helped to work with and train new employees</li>
                                <li>Interpreted blueprints to ensure accurate and efficient completion of projects</li>
                                <li>Maintained a safe and organized worksite while adhering to company and OSHA safety standards</li>
                            </ul>
                        </div>

                        <div className="resume-education">
                            <h2 className="bold">Education</h2>
                            <p className="bold">University of Minnesota</p>
                            <p className="timeline">December 2022 - March 2023</p>
                            <p>Web Development Bootcamp</p>
                        </div>

                        <div className="resume-projects">
                            <h2 className="bold">Projects</h2>
                            <p>Asteroids</p>
                            <ul>
                                <li>Displays asteroid data using the NASA API</li>
                                <li>Has functionality for account creation and comments</li>
                                <li>JavaScript, Express, MySql, Node.js</li>
                            </ul>

                            <p>Social Network API</p>
                            <ul>
                                <li>Backend code for a social network</li>
                                <li>Allows CRUD operations for users, thoughts, friends, and reactions</li>
                                <li>MongoDB, Express, Mongoose, Node.js</li>
                            </ul>

                            <p>Portfolio Website</p>
                            <ul>
                                <li>A multi-page website including a contact form and downloadable PDF</li>
                                <li>React, CSS</li>
                            </ul>
                        </div>
                    </div>

                    <div className="resume-sidebar">
                        <div className="resume-details">
                            <p className="bold">Details</p>
                            <p>Saint Paul, MN</p>
                        </div>

                        <div className="resume-links">
                            <p className="bold">Links</p>
                            <div>
                                <a href="https://erik814.github.io/react-portfolio/" target="_blank">Portfolio</a>
                            </div>
                            <div>
                                <a href="https://github.com/erik814" target="_blank">GitHub</a>
                            </div>
                        </div>

                        <div className="resume-skills">
                            <p className="bold">Skills</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>MongoDB</p>
                            <p>MySql</p>
                            <p>Express</p>
                            <p>Node.js</p>
                            <p>CSS</p> */}
                        {/* </div>
                    </div>
                </div>
            </div> */}
        {/* </div> */}
    </div>    
    )

};


export default Resume;