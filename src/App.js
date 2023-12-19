import "./App.css";

import Name from "./conponents/Name.jsx";
import Price from "./conponents/Price.jsx";
import Description from "./conponents/Description.jsx";
import Img from "./conponents/Img.jsx";
import { Card } from "react-bootstrap";

function App() {
  const userName = "Yassine Zzzz";

  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Img variant="Discount" />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <h3 className="text-light">Hello, {userName}!</h3>
    </div>
  );
}

export default App;
