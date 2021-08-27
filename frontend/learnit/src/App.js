import './App.css';
import Home from './Home';
import SignIn from "./SignIn"
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
