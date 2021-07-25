import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Clients from 'pages/Clients';

//

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
