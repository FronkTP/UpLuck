import nikon from "../src/images/surprised_nikon.png"

export default function Card(){
    return(
        <>
        <div className="card_main">
            <div className="card_margin">
                <img src={nikon} className="card_img"/>
                <div className="card_info">
                    <div className="card_text">
                        <h2 className="card_title">Title here</h2>
                        <p className="card_desc">desc here</p>
                    </div>
                    <button className="card_btn">Read More</button>
                </div>
            </div>
        </div>
        
        </>
    )
}