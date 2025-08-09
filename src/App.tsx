import "./App.css";
import { Button, Card } from "./components";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <Card
        title="Welcome to Gova's App"
        description="This is a simple card component using inline styles. Click primary to continue."
      />
      <Button label="Submit" />
    </div>
  );
}

export default App;
