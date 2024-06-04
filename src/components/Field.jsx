import LabeledInput from "./LabeledInput";
import '../styles/field.css'

export default function Field ({title, props}) {
    

    return (
        <>
            <div className="fieldBorder">
                <h3 className="fieldHeader">{title}</h3>
                {props.map((prop) => <LabeledInput name={prop.name + ":"} key={prop.name} />)}
            </div>
        </>
    );
}