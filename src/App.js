import "./App.css";
import CardComponent from "./components/Card";
import FormComponent from "./components/Form";

function App() {
  return (
    <div className="App">
      <FormComponent />
      <CardComponent title="Group3" description="Group3 Project" />
    </div>
  );
}

export default App;
