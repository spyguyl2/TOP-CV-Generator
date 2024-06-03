export default function LabeledInput({name = 'Test'}) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input id={name}></input>
        </div>
    );
}