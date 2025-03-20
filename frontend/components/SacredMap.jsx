export default function SacredMap() {
    return (
        <>
            <div className="fortune-header">
                <h2>แผนที่สถานที่ศักดิ์สิทธิ์</h2>
            </div>
            <div className="fortune-content map-container">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1GkVZF9m96WK6bgK_PSI_ZEutow2IHMc&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
                <div>
                    <h3>วิธีใช้แผนที่:</h3>
                    <ul>
                        <li>หมุดสีแดงในแผนที่คือศาลเจ้า</li>
                        <li>หมุดสีส้มในแผนที่คือวัด</li>
                        <li>หมุดสีม่วงในแผนที่คืออื่นๆ</li>
                    </ul>
                </div>
            </div>
        </>
    );
}