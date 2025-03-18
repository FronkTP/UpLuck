export default function FortuneNavbar({ onSelect, selected }) {
    return (
        <div className="fortune-nav">
            <ul className="fortune-list">
                <a onClick={() => onSelect('dailyhoroscope')}>
                    <li style={{ fontWeight: selected === 'dailyhoroscope' ? 'bold' : 'normal' }}>
                        Daily Horoscope
                    </li>
                </a>
                <a onClick={() => onSelect('shirtcolor')}>
                    <li style={{ fontWeight: selected === 'shirtcolor' ? 'bold' : 'normal' }}>
                        Lucky Shirt Colour
                    </li>
                </a>
                <a onClick={() => onSelect('luckyitem')}>
                    <li style={{ fontWeight: selected === 'luckyitem' ? 'bold' : 'normal' }}>
                        Lucky Item
                    </li>
                </a>
                <a onClick={() => onSelect('sacredmap')}>
                    <li style={{ fontWeight: selected === 'sacredmap' ? 'bold' : 'normal' }}>
                        Sacred Map
                    </li>
                </a>
            </ul>
        </div>
    )
}