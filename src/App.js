import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <>
        <Router>
        <Switch>
          <Route exact path="/onePage">
            <Index />
          </Route>
          </Switch>
          </Router>
    </>
  );
}

export default App;
