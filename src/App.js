import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
