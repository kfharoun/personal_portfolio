import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="NavBar">
            <div className="header-links">
            <Link className="linkhome" to="/">home</Link>
            <Link to="/about">about</Link>
            <Link className="contactlink" to="/contact">contact</Link>
            </div>
            <div className="Wavey1"></div>
            
        </div>
    )
}