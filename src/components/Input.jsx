export default function Input({ type = "text", name = "Give This a Name" }) {
  return (
    <div className="labelInputGroup">
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name}></input>
    </div>
  );
}
