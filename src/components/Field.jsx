import LabeledInput from "./LabeledInput";
import '../styles/field.css'

export default function Field ({title, inputNames}) {
    return (
        <>
            <div className="fieldBorder">
                <h3 className="fieldHeader">{title}</h3>
                {inputNames.map((name) => <LabeledInput name={name + ":"} key={name}></LabeledInput>)}
            </div>
        </>
    );
}