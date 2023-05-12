import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import UserPage from './components/user/UserPage';
import Login from './components/Login';
import TutorialList from './components/tutorials/TutorialList';
import AddTutorial from './components/tutorials/AddTutrial';
import UserForm from './components/user/UserForm';

function App() {

  return (
    <div className="App">
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href="/" className="navbar-brand">
          Tatweer
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/addTutorial" className="nav-link">
              Add Tutorial
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/tutorials" className="nav-link">
              Tutorials
            </Link>
          </li>
        </div>
      </nav>
      <div className='container mt-3'>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/users" component={UserPage} />
          <Route exact path="/tutorials" component={TutorialList} />
          <Route exact path="/addTutorial" component={AddTutorial} />
          <Route exact path="/userForm" component={UserForm} />
        </Switch>
      </div>


    </div>
  );
}

export default App;
