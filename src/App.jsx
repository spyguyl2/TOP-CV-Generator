import Header from "./components/Header";
import Form from "./components/Form";
import Preview from "./components/Preview";
import "./styles/App.css";
import "./styles/content.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className="content">
        <Form />
        <Preview />
      </div>
    </>
  );
}

export default App;
