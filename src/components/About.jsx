import portrait from '../images/portrait-placeholder.png'

function About(){
    if (window.location.pathname === "/about"){
        return(
            <div>
                <div>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates fuga alias facilis dolorum recusandae aliquid, ipsum eaque. Architecto animi explicabo sunt a quibusdam omnis velit exercitationem possimus nobis sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam doloribus sequi minima voluptatibus consequatur, nemo at laborum ex. Veritatis ut id debitis voluptatibus est rerum autem delectus eligendi cupiditate alias.</p>
                </div>

                <div>
                    <img src={portrait} alt="placeholder profile picture"/>
                </div>
            </div>
        )
    }
};


export default About;