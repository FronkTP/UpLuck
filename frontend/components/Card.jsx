export default function Card(props){
    return(
        <>
            <div className={`card_main ${props.isSelected ? 'selected' : ''}`}>
                <div className="card_margin">
                    <img src={props.img} className="card_img"/>
                    <div className="card_text">
                            <h2 className="card_title">{props.title}</h2>
                            <p className="card_desc">{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}