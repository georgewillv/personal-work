import Intro from "../Intro.js";
import Thumbnails from "../Thumbnails.js";
import Data from "../../constants.js";
const HomePage = () => (
  <main>
    <Intro Name={Data.Name} Description={Data.Description} />
    <Thumbnails />
  </main>
);

export default HomePage;
