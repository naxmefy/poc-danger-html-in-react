import "./App.css";
import ShowHtmlFromData from "./ShowHtmlFromData";

function App() {
  return (
    <div className="App">
      <div style={{ margin: "0 auto", width: "920px" }}>
        <ShowHtmlFromData item="example.html" />
      </div>
    </div>
  );
}

export default App;
