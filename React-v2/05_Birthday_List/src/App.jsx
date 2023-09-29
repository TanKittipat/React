import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [People, setPeople] = useState(data);

  return (
    <>
      <div>
        <h1>Workshop 1 : Birthday List Project</h1>
        <main>
          <section className="container">
            <h3>Birthday Today</h3>
            <List />
            <button>Clear All</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
