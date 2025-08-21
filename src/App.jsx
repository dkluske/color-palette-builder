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
    const deleteColor = (index) => {
        setColors((prev) => {
            if (prev.length === 1) {
                return prev
            }
            if (index < 0 || index >= prev.length) {
                return prev
            }
            return prev.filter((_, i) => i !== index)
        })
    }
    const randomizeColor = (index) => {
        setColors((prev) => {
            if (index < 0 || index >= prev.length) {
                return prev
            }
            return prev.map((color, i) => {
                if (i === index) {
                    color.code = generateRandomHexCode()
                }
                return color
            })
        })
    }
    const updateColor = (index, newCode) => {
        // Normalize and validate hex color; allow with or without leading '#'
        let code = String(newCode || '').trim()
        if (!code) return
        if (!code.startsWith('#')) {
            code = '#' + code
        }
        // Validate 6-digit hex
        const match = /^#([0-9a-fA-F]{6})$/.exec(code)
        if (!match) {
            return
        }
        const normalized = '#' + match[1].toUpperCase()
        setColors((prev) => {
            if (index < 0 || index >= prev.length) {
                return prev
            }
            return prev.map((color, i) => {
                if (i === index) {
                    // Return a new object to avoid mutating state
                    return {...color, code: normalized}
                }
                return color
            })
        })
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
                {colors.map((color, index) => <ColorEntry
                    color={color}
                    onDelete={() => deleteColor(index)}
                    key={index}
                    onEdit={(newCode) => {
                        updateColor(index, newCode)
                    }}
                    onRandomize={() => {
                        randomizeColor(index)
                    }}
                />)}
            </div>
            <div className="utility-bar">
                <UtilityFooter addColor={addColor}/>
            </div>
        </>
    )
}

export default App
