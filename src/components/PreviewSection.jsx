export default function PreviewSection({ title, items }) {
  return (
    <div className="previewSection">
      <h3>{title}</h3>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
