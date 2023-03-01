import guacImg from '../images/square-placeholder.jpg';
import weatherImg from '../images/square-placeholder.jpg';

function Projects(){

    const projects = [
        // name, link, image, stack?
        {id: 1, name: 'GuacBottom', image: guacImg, deployed: 'https://odetothecode.github.io/GuacBottom/', repo: 'https://github.com/OdeToTheCode/GuacBottom'},
        {id: 2, name: 'Weather Forecast', image: weatherImg, deployed: 'https://erik814.github.io/weather-forecast/', repo: 'https://github.com/erik814/weather-forecast'}
    ]

    if (window.location.pathname === "/portfolio"){
        return(
            <div>
                {projects.map(project => (
                    <div key={project.id}>
                        <div>
                            <a href={project.deployed} target="blank">
                                <img src={project.image} alt={project.name}/>
                            </a>
                        </div>

                        <div>
                            <p>{project.name}</p>
                            <a href={project.repo} target="blank">GitHub</a>
                            <a href={project.deployed} traget="blank">Deployed Page</a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
};


export default Projects;