import './ColorEntry.css';

function ColorEntry({ color }) {
    return (
        <div className="color-entry" style={{backgroundColor: color.code}}>
            <div className="color-code">{color.code}</div>
            <div className="color-buttons">
                <button className="color-button" >Edit</button>
                <button className="color-button" >Delete</button>
            </div>
        </div>
    )
}

export default ColorEntry;