import "../styles/header.css";
export default function Header() {
  return (
    <div className="header">
      <h1>CV Generator</h1>
      <label>
        Show Preview
        <input type="checkbox"></input>
      </label>
      <button>Clear All</button>
    </div>
  );
}
