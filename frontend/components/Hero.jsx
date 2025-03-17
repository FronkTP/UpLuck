import nikon from "../src/images/surprised_nikon.png"

export default function Hero() {
    return (
        <header className="hero-section">
            <img src={nikon} alt="surprised nikon" className="hero__image"/>
            <div className="hero__text">
                <h1>UpLuck</h1>
                <p>คุณใช่ไหมที่ประสบปัญหาเกี่ยวกับเรื่องโชคเรื่องดวง คุณใช่ไหมที่ไม่รู้ว่าดวงของคุณเป็นยังไง คุณใช่ไหมที่ไม่รู้ว่าจะทำยังไงเพื่อเพิ่มโชคให้กับตัวเอง พวกเรา TV Di… เอ้ย UpLuck ขอเสนอเว็บไซต์ของเราที่รวบรวมข้อมูลการดูดวงและการเพิ่มโชคเอาไว้ให้แล้ว ถ้าพร้อมแล้วจะรอช้าอยู่ใย ไปลุยกันเลยยย!</p>
                <button className="hero__btn"><a href="">Start your do duang journey!</a></button>
            </div>
        </header>
    )
}