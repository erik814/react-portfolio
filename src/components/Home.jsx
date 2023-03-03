import abstract from "../images/green-lines.jpg"

function Home() {
    if (window.location.pathname === "/react-portfolio"){
        return(
            <div className="home">
                <div className="home-text">
                    <h2>Erik Neafus</h2>
                    <h3>Web Developer</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque velit consectetur molestias culpa esse temporibus. Quod minus atque exercitationem ab dicta doloribus dolorem expedita numquam enim, quas ipsum, labore earum.</p>
                </div>

                <div className="home-image">
                    <img src={abstract} alt="placeholder profile picture"/>
                </div>
            </div>
        )
    }
};


export default Home;