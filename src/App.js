import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const initAPICall = async () => {
    const url = `https://api.frontendeval.com/fake/food/${value}`;
    const data1 = await fetch(url);
    const data = await data1.json();
    setList(data);
  };

  useEffect(() => {
    if (value) {
      initAPICall();
    }
  }, [value]);

  return (
    <div className="App">
      <h1> Search </h1>

      <div className="search-container">
        <div className="search-inner">
          <input
            type="text"
            placeholder="search"
            value={value}
            onChange={handleChange}
          />
        </div>

        {list && list.length > 0 && (
          <div className="dropdown">
            {list && list.map((item, index) => <div key={index}>{item}</div>)}
          </div>
        )}
      </div>
    </div>
  );
}
