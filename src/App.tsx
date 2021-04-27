// imports of react component
import { BrowserRouter, Route, Switch } from "react-router-dom";

// imports of custom component
import Home from "./component/Home";
import Navbar from "./component/Layout/Navbar";
import Count from "./component/Count";
import AddUser from "./AddUser";

// imports of css files
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = ()=> {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/count" component={Count} />
          <Route exact path="/employee/add" component={AddUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
