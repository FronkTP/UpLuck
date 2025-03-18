import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"

export default function Header({target}) {
    return (
        <>
            <Navbar />
            <Hero target = {target}/>
        </>
    )
}