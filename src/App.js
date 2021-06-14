import "./App.css";
// get our fontawesome imports

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <section class="container">
      <div className="title">
        <h2>Fruits menu</h2>
        <div class="underline"></div>
      </div>

      <div className="button-container">
        <button class="prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button class="next-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <button className="random-btn">Random</button>
    </section>
  );
}

export default App;
