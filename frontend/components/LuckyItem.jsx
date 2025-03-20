import React, { useState, useEffect } from 'react';

export default function LuckyItem() {

    const items = [
        ["กระเป๋าสตางค์", "กระเป๋าสตางค์เป็นสัญลักษณ์ของการเก็บทรัพย์สินและโชคลาภ ควรพกกระเป๋าสตางค์ที่สะอาดและมีเงินตราผสมในนั้นเพื่อเสริมโชคลาภและความมั่งคั่งในชีวิต"],
        ["โทรศัพท์", "โทรศัพท์คือเครื่องมือที่เชื่อมต่อกับโลกภายนอก และเป็นเครื่องที่ช่วยให้คุณติดต่อสื่อสารกับผู้อื่นอย่างสะดวกสบาย เชื่อกันว่าการพกโทรศัพท์จะนำพาความสัมพันธ์ที่ดีและโชคลาภมาให้"],
        ["กุญแจ", "กุญแจเป็นสัญลักษณ์ของการเปิดประตูสู่โอกาสใหม่ๆ การมีกุญแจถือเป็นการเปิดทางให้ความโชคดีและความสำเร็จเข้าใกล้"],
        ["ปากกา", "ปากกาเป็นเครื่องมือที่ใช้ในการเขียนและสร้างผลงาน เชื่อว่าเมื่อใช้ปากกาคุณภาพดีในการลงมือทำสิ่งต่างๆ จะช่วยเสริมสร้างโชคลาภและความสร้างสรรค์"],
        ["กระจก", "กระจกเป็นสัญลักษณ์ของการสะท้อนและการมองเห็นตัวเอง ความสะอาดและความชัดเจนในกระจกเชื่อว่าจะช่วยให้ชีวิตคุณมีมุมมองที่ดีและโชคดี"],
        ["นาฬิกา", "นาฬิกาเป็นเครื่องบ่งบอกเวลาและการใช้ชีวิตอย่างมีระเบียบ เชื่อว่าเมื่อคุณพกนาฬิกาจะช่วยให้คุณจัดการเวลาได้อย่างมีประสิทธิภาพและนำพาความโชคดีมาให้"],
        ["ยาดม", "ยาดมช่วยให้หายใจสะดวกและคลายความเครียด เชื่อว่าเมื่อพกยาดมจะช่วยเพิ่มพลังและความสดชื่นให้กับชีวิต พร้อมทั้งดึงดูดโชคลาภ"],
        ["พวงกุญแจ", "พวงกุญแจเป็นเครื่องประดับที่เชื่อมโยงกับการถือกุญแจสำคัญต่างๆ และเป็นเครื่องมือในการคุ้มครองโชคลาภ ให้ชีวิตมีความปลอดภัยและโชคดี"],
        ["ลิปสติก", "ลิปสติกเป็นสัญลักษณ์ของความงามและความมั่นใจ การใช้ลิปสติกที่ดีจะเสริมเสน่ห์ให้กับชีวิตและทำให้มีโชคดีในความสัมพันธ์และความรัก"],
        ["ผ้าเช็ดหน้า", "ผ้าเช็ดหน้าเป็นสัญลักษณ์ของความสะอาดและการดูแลตัวเอง การใช้ผ้าเช็ดหน้าที่ดีจะช่วยดึงดูดโชคดีและความสุขให้เกิดขึ้นในชีวิต"],
        ["ถุงผ้า", "ถุงผ้าเป็นสัญลักษณ์ของการรักษาสิ่งแวดล้อมและความสะอาด เชื่อกันว่าถุงผ้าที่ใช้ซ้ำได้จะช่วยดึงดูดโชคดีและปกป้องทรัพย์สินจากความไม่คาดคิด"],
        ["แว่นตา", "แว่นตาช่วยให้มองเห็นโลกได้อย่างชัดเจน การใส่แว่นที่ดีจะช่วยให้มุมมองชีวิตดีขึ้นและนำโชคลาภในด้านการมองเห็นโอกาสใหม่ๆมาให้"],
        ["ที่ชาร์จโทรศัพท์", "การมีที่ชาร์จโทรศัพท์ที่ดีและพร้อมใช้งานจะช่วยให้ชีวิตไม่ขาดการเชื่อมต่อ เชื่อว่ามันจะเสริมสร้างโชคดีในการติดต่อสื่อสารและการทำงาน"],
        ["กระติกน้ำ", "กระติกน้ำเป็นสัญลักษณ์ของการดูแลสุขภาพและการรักษาความชุ่มชื้น เชื่อกันว่าเมื่อมีน้ำสะอาดและการดูแลตัวเองที่ดี จะนำพาความโชคดีและพลังงานบวกมาในชีวิต"],
        ["แบงค์", "ธนบัตรหรือแบงค์เป็นสัญลักษณ์ของความมั่งคั่งและความเจริญรุ่งเรือง การเก็บธนบัตรหรือแบงค์ไว้ในที่เหมาะสมจะช่วยดึงดูดโชคลาภและเพิ่มพูนทรัพย์สินในชีวิต"],
        ["สมุด", "สมุดคือเครื่องมือในการจดบันทึกความคิดและการวางแผน เชื่อว่าการมีสมุดที่ใช้สำหรับบันทึกความฝันและความตั้งใจจะช่วยดึงดูดโชคดีและการบรรลุเป้าหมาย"],
        ["สเปรย์น้ำหอม", "สเปรย์น้ำหอมเป็นสัญลักษณ์ของความสดชื่นและเสน่ห์ ความหอมที่ละมุนจะช่วยดึงดูดโชคลาภและความสุขในชีวิต ให้บรรยากาศรอบตัวเป็นมิตรและอบอุ่น"],
        ["ผ้าเช็ดมือ", "ผ้าเช็ดมือเป็นสัญลักษณ์ของความสะอาดและการดูแลตัวเอง เชื่อกันว่าผ้าเช็ดมือที่สะอาดจะช่วยนำโชคดีในการเริ่มต้นใหม่และการรักษาความเป็นระเบียบในชีวิต"],
        ["พาวเวอร์แบงค์", "พาวเวอร์แบงค์เป็นสัญลักษณ์ของการมีพลังงานเสริมในยามจำเป็น การพกพาวเวอร์แบงค์จะช่วยให้พร้อมรับมือกับทุกสถานการณ์และเสริมโชคในด้านความพร้อม"],
        ["สติกเกอร์", "สติกเกอร์เป็นเครื่องประดับที่ช่วยให้สิ่งของดูน่าสนใจและน่ารัก เชื่อว่าเมื่อใช้สติกเกอร์ที่มีความหมายดีๆจะช่วยดึงดูดโชคดีและความสนุกสนานในชีวิต"],
        ["ตั๋วเดินทาง", "ตั๋วเดินทางเป็นสัญลักษณ์ของการเปิดโอกาสใหม่และการผจญภัย การมีตั๋วเดินทางในกระเป๋าจะช่วยเสริมโชคลาภในการค้นหาประสบการณ์ใหม่ๆ และการเติบโตในชีวิต"],
        ["อุปกรณ์เสริมคอมพิวเตอร์", "อุปกรณ์เสริมคอมพิวเตอร์เชื่อว่าเป็นเครื่องมือที่ช่วยให้การทำงานหรือเรียนรู้มีประสิทธิภาพสูงขึ้น การมีอุปกรณ์ที่เหมาะสมจะช่วยเสริมโชคในด้านการศึกษาและการทำงาน"],
        ["แว่นกันแดด", "แว่นกันแดดไม่เพียงช่วยปกป้องดวงตาจากแสงแดด แต่ยังเป็นสัญลักษณ์ของการมองเห็นโลกด้วยมุมมองที่ชัดเจน การมีแว่นกันแดดที่ดีจะช่วยเพิ่มเสน่ห์และโชคลาภในชีวิต"],
        ["คีย์บอร์ด", "คีย์บอร์ดเป็นเครื่องมือที่สำคัญในการสื่อสารผ่านการพิมพ์ การมีคีย์บอร์ดที่ดีจะช่วยให้คุณสามารถสร้างสรรค์ผลงานได้อย่างราบรื่น และเสริมโชคลาภในการทำงาน"],
        ["แท็บเล็ต", "แท็บเล็ตเป็นเครื่องมือที่ช่วยให้เรามีความสะดวกในการทำงานหรือเรียนรู้ เชื่อว่าการพกแท็บเล็ตจะช่วยเสริมสร้างโชคดีในด้านเทคโนโลยีและการทำงานที่มีประสิทธิภาพ"],
        ["แปรงสีฟัน", "แปรงสีฟันเป็นเครื่องมือที่ใช้ในการดูแลสุขภาพช่องปาก เชื่อกันว่าการดูแลร่างกายและสุขภาพดีจะช่วยดึงดูดโชคลาภและพลังบวกในชีวิต"],
        ["ยาสีฟัน", "ยาสีฟันเป็นสัญลักษณ์ของการดูแลตัวเองและสุขอนามัยที่ดี การมียาสีฟันที่ดีจะช่วยเสริมความมั่นใจและโชคดีในเรื่องของการรักษาสุขภาพ"],
        ["รองเท้าผ้าใบ", "รองเท้าผ้าใบเป็นสัญลักษณ์ของการเดินทางและการเคลื่อนไหว เชื่อว่าการเลือกใช้รองเท้าที่เหมาะสมจะช่วยให้การเดินทางในชีวิตมีความสุขและโชคดี"],
        ["เสื้อกันหนาว", "เสื้อกันหนาวเป็นสัญลักษณ์ของการปกป้องตัวเองจากสิ่งรอบข้าง การพกเสื้อกันหนาวจะช่วยให้คุณพร้อมรับมือกับทุกสถานการณ์และเสริมความโชคดีในชีวิต"]
    ]
    
    const [date, setDate] = useState('');
    const [index, setIndex] = useState(0);
        
    useEffect(() => {
        const today = new Date();
        const options = { day: "2-digit", month: "long", year: "numeric" };
        const formattedDate = today.toLocaleDateString("th-TH", options);
        setDate(formattedDate);

        const dateHash = today.toLocaleDateString("en-GB").split('/').join('');
        const fixedIndex = parseInt(dateHash, 10) % items.length;
        setIndex(fixedIndex);
    }, []);

    const imageName = items[index][0].toLowerCase().replace(/\s+/g, '') + ".jpg";
    const imagePath = `/images/${imageName}`;
    
    
    return (
        <div>
            <div className='fortune-header'>
                <h2>ของนำโชคประจำวันที่ {date}</h2>
            </div>
            <div className='fortune-content item-container'>
                <div className='item-img-container'>
                    <img src={imagePath} alt={items[index][0]} className='item-img'/>
                    <p>{items[index][0]}</p>
                </div>
                <div className='item-text-container'>
                    <h3>{items[index][0]}</h3>
                    <p>{items[index][1]}</p>
                </div>
            </div>
        </div>
    );
}