import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import "../pages/AboutusCSS.css"
import absolute_cinema from "../src/images/absolute_cinema.jpeg"

export default function Aboutus(){
    return (
        <>
            <Navbar/>
            <div className="main">
                <h1 class="questions">Who are we?</h1>
                <div class="answers">
                <p>
                    We are a team of sick(six) ISE students in the ICE program who love coding(but almost got an F in computer programming) and designing. 
                We have created this website to UpLuck(our website’s name)  for you. This website provides you with the sources of fortune telling and increasing your luck. 
                Hope you enjoy our website and have a great day!
                </p>
                </div>
                
                <h1 class="questions">How do we tell your fortune?</h1>
                <div class="answers">
                <p>
                    We use a super secret recipe made by our great-great-great grandparents that has been passed down to us.
                    If you are by chance interested in our secret recipe, give us pi baht, with infinite decimal places accuracy. 
                    If you can't, then we have to keep it a secret, sadly.
                    <br></br>
                    Nevertheless, we gaurantee that Upluck will up your luck and smoothen your uni's life!
                </p>
                </div>

                <img src={absolute_cinema} alt="peak" class="peak_img"/>
            </div>
            <Footer/>
        </>
    )
    
}