import nikon from "../src/images/surprised_nikon.png"

export default function Header() {
    return (
        <header className="hero-section">
            <img src={nikon} alt="surprised nikon" className="hero__image"/>
            <div className="hero__text">
                <h1>UpLuck</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="hero__btn"><a href="">Start your do duang journey!</a></button>
            </div>
        </header>
    )
}