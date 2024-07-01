import { Link } from "react-router-dom"


export default function Home(){
    return (
        <div className="Home">
            <div className="allhome">
            <div className="mainComponent">
                <h4 className="developer aroundName">full stack development</h4>
                <h1 className="name">Kass Ferland Haroun</h1>
                <h4 className="product aroundName">product design</h4>
            </div>

            <div className="linkComponent">
                <h1 className="title">Product Design</h1>

                <div className="portfolio box">
                    <Link className="link" to="/portfolio">Portfolio</Link>
                </div>

                <h1 className="title">Software Development</h1>
                <div className="daisydropbox box">
                    <a href="https://daisydrop.surge.sh/">Daisy Drop!</a>
                    <p className="language">javascript</p>
                    <p className="language">css</p>
                </div>
                <div className="barbie box">
                    <a href="">Barbie Collector's Closet</a>
                    <p className="language">node.js</p>
                    <p className="language">mongodb</p>
                    <p className="language">javascript</p>
                    <p className="language">css</p>
                    <p className="language">axios</p>
                </div>
                <div className="recipe box">
                    <a href="">The Recipe.</a>
                    <p className="language">node.js</p>
                    <p className="language">css</p>
                    <p className="language">react</p>
                    <p className="language">axios</p>
                    <p className="language">express</p>
                </div>
                <div className="DND box">
                    <a href="">DND Adventurer's Atlas</a>
                    <p className="language">node.js</p>
                    <p className="language">mongodb</p>
                    <p className="language">react</p>
                    <p className="language">css</p>
                    <p className="language">axios</p>
                    <p className="language">express</p>
                </div>
            </div>
        </div>
        </div>
    )
}