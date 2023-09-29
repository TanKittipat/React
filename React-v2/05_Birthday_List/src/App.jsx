import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [People, setPeople] = useState(data);
  const clearAll = () => {
    setPeople([]);
  };

  return (
    <>
      <div>
        <h1>Workshop 1 : Birthday List Project</h1>
        <main>
          <section className="container">
            <h3>{People.length} Birthday Today</h3>
            <List People={People} />
            <button onClick={clearAll}>Clear All</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
