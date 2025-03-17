import { Link } from 'react-router-dom'
import logo from "../src/images/logo.png"

export default function Navbar() {
    return (
        <nav>
            <a href="/"><div className='logo-section'>
                <img src={logo} className="logo__img"/>
                <h1 className='logo__text'>UpLuck</h1>
            </div></a>
            <ul>
                <Link to ='/about-us'><li>About Us</li></Link>
                
            </ul>
        </nav>
    )
}