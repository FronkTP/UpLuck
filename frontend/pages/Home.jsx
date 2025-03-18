import React, { useState } from 'react';
import Header from "../components/Header";
import SimpleSlider from "../components/SimpleSlider";
import DailyHoroscope from "../components/DailyHoroscope";
import ShirtColor from "../components/ShirtColor";
import LuckyItem from "../components/LuckyItem";
import SacredMap from "../components/SacredMap";
import FortuneNavbar from "../components/FortuneNavbar";

export default function Home() {
    const [selected, setSelected] = useState('dailyhoroscope')
    const [selectedCard, setSelectedCard] = useState(null)

    const renderComponent = () => {
        switch (selected) {
            case 'dailyhoroscope':
                return <DailyHoroscope />;
            case 'shirtcolor':
                return <ShirtColor />;
            case 'luckyitem':
                return <LuckyItem />;
            case 'sacredmap':
                return <SacredMap />;
            default:
                return <DailyHoroscope />;
        }
    }

    return (
        <>
            <Header />
            <SimpleSlider
                onSelect={setSelected}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
            />
            <FortuneNavbar onSelect={setSelected} selected={selected} />
            {renderComponent()}
        </>
    )
}