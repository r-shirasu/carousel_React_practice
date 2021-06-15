import "./App.scss";
import { Fruits } from "./Fruits";
// get our fontawesome imports

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <section className="container">
      <div className="title">
        <h2>Fruits menu</h2>
        <div className="underline"></div>
      </div>
      <Fruits />
      <div className="button-container">
        <button className="prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <button className="random-btn">Random</button>
    </section>
  );
}

export default App;
