function Home(){
    if (window.location.pathname === "/"){
        return(
            <div>
                <div>
                    <h2>Hey, I'm Erik!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque velit consectetur molestias culpa esse temporibus. Quod minus atque exercitationem ab dicta doloribus dolorem expedita numquam enim, quas ipsum, labore earum.</p>
                </div>

                <div>
                    <img src="../images/portrait-placeholder.png" alt="placeholder profile picture"/>
                </div>
            </div>
        )
    }
};


export default Home;