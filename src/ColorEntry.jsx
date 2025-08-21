import './ColorEntry.css';

function ColorEntry({color, onDelete, onEdit, onRandomize}) {
    return (
        <div className="color-entry" style={{backgroundColor: color.code}}>
            <div className="color-code">{color.code}</div>
            <div className="color-buttons">
                <button className="color-button" onClick={onEdit}>Edit</button>
                <button className="color-button" onClick={onDelete}>Delete</button>
                <button className="color-button" onClick={onRandomize}>Randomize</button>
            </div>
        </div>
    )
}

export default ColorEntry;