import "../styles/header.css";
import Button from "./Button";
export default function Header() {
  return (
    <div className="header">
      <h1>CV Generator</h1>
      <Button text="edit" />
    </div>
  );
}
