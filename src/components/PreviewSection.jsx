export default function PreviewSection({ title = "title", info = "info" }) {
  return (
    <div className="previewSection">
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
}
