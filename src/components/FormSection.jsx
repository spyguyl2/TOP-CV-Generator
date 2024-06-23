import Input from "./Input";
import Button from "./Button";

//!title ? <Button>test</Button>:
export default function FormSection({
  title = "Give me a Title",
  inputs = [],
}) {
  return title === "Give me a Title" ? (
    <div className="section newSection">
      <Button text="Add Section" />
    </div>
  ) : (
    <div className="section">
      <h2>{title}</h2>
      {inputs.map((input) => (
        <Input type={input.type} name={input.name} key={input.name} />
      ))}
    </div>
  );
}
