import { useState } from "react";
import "./App.css";

enum Strength {
  WEAK = "WEAK",
  MEDIUM = "MEDIUM",
  STRONG = "STRONG",
}

function App() {
  const [password, setPassword] = useState("PTx1f5DaFX");
  const [strength, setStrength] = useState(Strength.WEAK);

  return (
    <>
      <div>
        <h3>Password Generator</h3>
        <button>
          {password} <p>COPIED</p>
        </button>
      </div>
      <div>
        <label>Character Length</label>
        <p>Include Uppercase Letters</p>
        <p>Include Lowercase Letters</p>
        <p>Include Numbers</p>
        <p>Include Symbols</p>

        <div>
          <p>STRENGTH</p>
          <p>{strength}</p>
        </div>

        <button>GENERATE</button>
      </div>
    </>
  );
}

export default App;
