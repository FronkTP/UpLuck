import nikon from "../src/images/surprised_nikon.png"

export default function Card(){
    return(
        <>
        <div className="main_card">
        <div className="margin_card">
        <div className="info_card">
        <img src={nikon} className ="img_card"/>
        <div className="text_card">
        <p className = "title_card">Title here</p>
        <p className = "desc_card">desc here</p>
        </div>
        <button className = "button_card">Read More</button>
        </div>
        </div>
        </div>
        
        </>
    )
}