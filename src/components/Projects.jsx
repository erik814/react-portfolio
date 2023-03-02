import 'bootstrap/dist/css/bootstrap.min.css';

import asteroidImg from '../images/asteroid-image.png';
import guacImg from '../images/guac-image.png';
import weatherImg from '../images/weather-image.png';
import noteImg from '../images/note-image.png';
import plannerImg from '../images/planner-image.png';
import socialImg from '../images/social-img.png';


function Projects(){

    const projects = [
        // name, link, image, stack?
        {id: 1, name: 'Asteroid Tracker', image: asteroidImg, deployed: 'https://asteroids.herokuapp.com/', repo: 'https://github.com/strongjaw15/asteroids'},
        {id: 2, name: 'Recipe Page', image: guacImg, deployed: 'https://odetothecode.github.io/GuacBottom/', repo: 'https://github.com/OdeToTheCode/GuacBottom'},
        {id: 3, name: 'Weather Forecast', image: weatherImg, deployed: 'https://erik814.github.io/weather-forecast/', repo: 'https://github.com/erik814/weather-forecast'},
        {id: 4, name: 'Social Network API', image: socialImg, deployed: '', repo: 'https://github.com/erik814/social-network-api'},
        {id: 5, name: 'Note Taker', image: noteImg, deployed: 'https://note-taker-814.herokuapp.com/', repo: 'https://github.com/erik814/note-taker'},
        {id: 6, name: 'Work Day Planner', image: plannerImg, deployed: 'https://erik814.github.io/work-day-planner/', repo: 'https://github.com/erik814/work-day-planner'}
    ]

    if (window.location.pathname === "/portfolio"){
        return(

            <div>
                    {projects.map(project => (
                        <div className="project-container" key={project.id}>
                            <div className="project-image-container">
                                <a href={project.deployed} target="blank">
                                    <img className="project-image" src={project.image} alt={project.name}/>
                                </a>
                            </div>

                            <div className="project-text-container">
                                <h4 className="project-name">{project.name}</h4>
                                <div className="project-text">
                                    <div>
                                        <a className='project-link' href={project.deployed} target="blank">Deployed Page</a>
                                    </div>
                                    <div>
                                        <a className='project-link' href={project.repo} target="blank">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>




            // <div className="big-project-container">
            //     <div className="project-row">
            //         {projects.map(project => (
            //             <div className='project-container' key={project.id}>
            //                 <div>
            //                     <a href={project.deployed} target="blank">
            //                         <img className="project-image" src={project.image} alt={project.name}/>
            //                     </a>
            //                 </div>

                            // <div>
                            //     <h4 className="project-name">{project.name}</h4>
                            //     <div className="project-text">
                            //         <div>
                            //             <a className='project-link' href={project.deployed} target="blank">Deployed Page</a>
                            //         </div>
                            //         <div>
                            //             <a className='project-link' href={project.repo} target="blank">GitHub</a>
                            //         </div>
                            //     </div>
                            // </div>
            //             </div>
            //         ))}
            //     </div>
            // </div>
        )
    }
};


export default Projects;