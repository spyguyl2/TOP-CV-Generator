import FormSection from "./FormSection";

export default function Form() {
  const genInputs = [
    { name: "First Name" },
    { name: "Last Name" },
    { name: "Email", type: "email" },
    { name: "Phone Number", type: "tel" },
  ];
  return (
    <div className="form">
      <FormSection title="General Info" inputs={genInputs}></FormSection>
    </div>
  );
}
