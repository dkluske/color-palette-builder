import {useState} from 'react'
import './ColorEntry.css';

function ColorEntry({color, onDelete, onEdit, onRandomize}) {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(color.code || '#000000')
    const [error, setError] = useState('')

    const startEdit = () => {
        setValue(color.code || '#000000')
        setError('')
        setIsEditing(true)
    }

    const validate = (val) => {
        let v = (val || '').trim()
        if (!v) return false
        if (!v.startsWith('#')) v = '#' + v
        return /^#([0-9a-fA-F]{6})$/.test(v)
    }

    const finishEdit = () => {
        if (!validate(value)) {
            setError('Please enter a valid hex code., z.B. #1A2B3C')
            return
        }
        let v = value.trim()
        if (!v.startsWith('#')) v = '#' + v
        const normalized = '#' + v.slice(1).toUpperCase()
        onEdit && onEdit(normalized)
        setIsEditing(false)
    }

    const cancelEdit = () => {
        setIsEditing(false)
        setValue(color.code || '#000000')
        setError('')
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            finishEdit()
        } else if (e.key === 'Escape') {
            cancelEdit()
        }
    }

    return (
        <div className="color-entry" style={{backgroundColor: color.code}}>
            {isEditing ? (
                <div className="color-edit">
                    <input
                        className="color-input"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                            if (error) setError('')
                        }}
                        onKeyDown={onKeyDown}
                        aria-label="Hex color code"
                        placeholder="#RRGGBB"
                    />
                    <div className="color-edit-buttons">
                        <button className="color-button" onClick={finishEdit}>Save</button>
                        <button className="color-button" onClick={cancelEdit}>Cancel</button>
                    </div>
                    {error && <div className="color-error" role="alert">{error}</div>}
                </div>
            ) : (
                <div className="color-code">{color.code}</div>
            )}
            <div className="color-buttons">
                {!isEditing ? (
                    <div>
                        <button className="color-button" onClick={startEdit}>Edit</button>
                        <button className="color-button" onClick={onDelete}>Delete</button>
                    </div>
                ) : null}
                <button className="color-button" onClick={onRandomize}>Randomize</button>
            </div>
        </div>
    )
}

export default ColorEntry;