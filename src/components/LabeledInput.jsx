export default function LabeledInput({name = 'Test', type = 'text'}) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input id={name} type={type}></input>
        </div>
    );
}