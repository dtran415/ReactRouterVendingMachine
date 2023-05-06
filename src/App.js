import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './snacks/Chips';
import Cookies from './snacks/Cookies';
import GummyBears from './snacks/GummyBears';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/chips" exact>
            <Chips />
          </Route>
          <Route path="/cookies" exact>
            <Cookies />
          </Route>
          <Route path="/gummybears" exact>
            <GummyBears />
          </Route>
          <Route patch="/" exact>
            <VendingMachine />
          </Route>
      </Switch>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
