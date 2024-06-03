import "../styles/toggle.css"
export default function Toggle ({text = "Show Preview", id, handleCheck}) {
    return (
        <div className="toggleLabelGroup">
            <label className="switch">
                <input onChange={handleCheck} name={text} type="checkbox" id={id}/>
                <span className="slider round"/>
            </label>
            <label htmlFor={id}>
            {text}
            </label>
        </div>
    );
}