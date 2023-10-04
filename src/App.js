import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/navbar/navbar.js"
import Home from "./components/home/home.js"
import TelephoneValidator from "./components/telephone/telephone.js"
import TriangleValidator from "./components/triangle/triangle.js"
function App() {
  return (
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route path="/telephone-validator" component={TelephoneValidator} />
        <Route path="/triangle-validator" component={TriangleValidator} />
        <Route exact path="/" component={Home} />
        {/* Add an exact prop to the home route to ensure it matches only the root path */}
      </Switch>
    </>
  </Router>
  );
}

export default App;
