import './App.css';
import { BrowserRouter as Router , Redirect, Route, Switch} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
      </Switch>
      <Redirect to="/" />
    </Router>
  );
}

export default App;
