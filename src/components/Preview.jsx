import PreviewHeader from "./PreviewHeader";
import PreviewSection from "./PreviewSection";

export default function Preview() {
  return (
    <div className="preview">
      <PreviewHeader />
      <div className="previewContent">
        <PreviewSection title="Name" items={["test"]} />
        <PreviewSection title="Contact" items={["other test"]} />
      </div>
      <PreviewSection title="test" items={["yoyo"]} />
    </div>
  );
}
