import Header from "./components/Header";
import Form from "./components/Form";
import Preview from "./components/Preview";
import "./styles/App.css";
import "./styles/content.css";

function App() {
  /*
    <Header>
      H1 title thing
      reset button?
      Toggle Preview
    </Header>
    <Form>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </Form>
    <Preview></Preview>
  */
  return (
    <>
      <Header></Header>
      <div className="content">
        <Form></Form>
        <Preview></Preview>
      </div>
    </>
  );
}

export default App;
