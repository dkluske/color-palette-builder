import './UtilityFooter.css'

function UtilityFooter({ addColor, randomizeColors }) {
    return (
        <div className="utility-footer">
            <button className="utility-button" onClick={addColor}>Add Color</button>
            <button className="utility-button" onClick={randomizeColors}>Randomize</button>
        </div>
    )
}

export default UtilityFooter;