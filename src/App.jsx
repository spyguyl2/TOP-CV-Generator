import Header from "./components/Header";
import "./styles/App.css";

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
      <div className="content"></div>
    </>
  );
}

export default App;
