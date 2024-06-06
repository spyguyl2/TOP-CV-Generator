import Input from "./Input";

export default function FormSection({ title = "Give me a Title", inputs }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      {inputs.map((input) => (
        <Input type={input.type} name={input.name} key={input.name}></Input>
      ))}
    </div>
  );
}
