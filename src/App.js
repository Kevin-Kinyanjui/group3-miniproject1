import "./App.css";
import CardComponent from "./components/Card";
import FormComponent from "./components/Form";

function App() {
  return (
    <div className="App">
      <br />
      <FormComponent />
      <br />
      <CardComponent
        title="The mind's eye"
        description="A chatbox to help open up your view of the world."
      />
    </div>
  );
}

export default App;
