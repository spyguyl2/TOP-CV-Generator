import Input from "./Input";

//!title ? <Button>test</Button>:
export default function FormSection({
  title = "Give me a Title",
  inputs = [],
}) {
  return (
    <div className="section">
      <h2>{title}</h2>
      {inputs.map((input) => (
        <Input type={input.type} name={input.name} key={input.name} />
      ))}
    </div>
  );
}
