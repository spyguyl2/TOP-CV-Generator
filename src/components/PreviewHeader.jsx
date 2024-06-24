export default function PreviewHeader({
  firstName = "first",
  lastName = "last",
}) {
  return (
    <h1>
      {firstName} {lastName}
    </h1>
  );
}
