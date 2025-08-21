import {useEffect, useState} from 'react'
import './App.css'
import ColorEntry from "./ColorEntry.jsx";
import UtilityFooter from "./UtilityFooter.jsx";

function App() {
    const [colors, setColors] = useState([])
    const generateRandomHexCode = () => {
        let letters = "0123456789ABCDEF"
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }
    const addColor = () => {
        if (colors.length >= 10) {
            return
        }
        setColors(
            [
                ...colors,
                {
                    code: generateRandomHexCode()
                }
            ]
        )
    }
    useEffect(() => {
        let randomColors = []
        for (let i = 0; i < 5; i++) {
            randomColors.push( {
                code: generateRandomHexCode()
            } )
        }
        setColors(randomColors)
    }, []);

    return (
        <>
            <h1>Color Palette Builder</h1>
            <div className="palette-wrapper">
                { colors.map((color, index) => <ColorEntry color={color} key={index}/>) }
            </div>
            <div className="utility-bar">
                <UtilityFooter addColor={addColor}/>
            </div>
        </>
    )
}

export default App
