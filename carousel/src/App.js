import "./App.css";
import { Carousel } from "./Carousel.js";

import data from './data/data.json'

function App() {
  return (
    <div className="App">
      <Carousel data={data} />
    </div>
  );
}

export default App;