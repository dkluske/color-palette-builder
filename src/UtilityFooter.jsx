import './UtilityFooter.css'

function UtilityFooter({ addColor }) {
    return (
        <div className="utility-footer">
            <button className="utility-button" onClick={addColor}>Add Color</button>
        </div>
    )
}

export default UtilityFooter;