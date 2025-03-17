import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav>
            <a href="/" className="logo"><h1>Logo</h1></a>
            <ul>
                <Link to ='/about-us'><li>About Us</li></Link>
                
            </ul>
        </nav>
    )
}