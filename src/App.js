import { useEffect, useState } from "react";

function App() {
  const [i1, setI1] = useState(0);
  const [i2, setI2] = useState(0);
  const [i3, setI3] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(+i1 + +i2 + +i3);
  }, [i1, i2, i3]);

  const handleChange = (e, state) => {
    const input = e.target.value;
    switch (state) {
      case 1:
        const value = 100 - input;
        setI3(value / 2);
        setI1(input);
        setI2(value / 2);
        break;
      case 2:
        const value2 = 100 - input;
        setI3(value2 / 2);
        setI1(value2 / 2);
        setI2(input);
        break;
      case 3:
        const value3 = 100 - input;
        setI3(input);
        setI1(value3 / 2);
        setI2(value3 / 2);
        break;

      default:
        break;
    }
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Range Slider</h1>

      <input
        type="range"
        value={i1}
        min={0}
        max={100}
        onChange={(e) => handleChange(e, 1)}
      />
      {i1}
      <input
        type="range"
        value={i2}
        min={0}
        max={100}
        onChange={(e) => handleChange(e, 2)}
      />
      {i2}
      <input
        type="range"
        value={i3}
        min={0}
        max={100}
        onChange={(e) => handleChange(e, 3)}
      />
      {i3}
      <h3>Total {total}</h3>
    </div>
  );
}

export default App;