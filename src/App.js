import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import UserPage from './components/user/UserPage';
import Login from './components/Login';
import TutorialList from './components/tutorials/TutorialList';
import AddTutorial from './components/tutorials/AddTutrial';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import UserForm from './components/user/UserForm';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {isLoggedIn && (
      <nav className='navbar navbar-expand' style={{backgroundColor: "#3498db"}}>
        <a href="/" className="navbar-brand text-light">
          CodePact <span>{'</>'}&#60;/&#62;</span>
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to="/users" className="nav-link text-light">
              Users
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/addTutorial" className="nav-link text-light">
              Add Tutorial
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/tutorials" className="nav-link text-light">
              Tutorials
            </Link>
          </li>
        </div>
      </nav>
      )}
      <div className='container mt-3'>
        <Switch>
          {isLoggedIn ? (
            <>
            <Route exact path="/users" component={UserPage} />
            <Route exact path="/tutorials" component={TutorialList} />
            <Route exact path="/addTutorial" component={AddTutorial} />
            <Route exact path="/userForm" component={UserForm} />
            <button className='btn btn-danger text-uppercase'onClick={handleLogout}>logout</button>
            </>
          ):(
            <Route exact path="/" render={()=> <Login onLogin={handleLogin}/>}/>
          )}
        </Switch>
        <ToastContainer />
      </div>


    </div>
  );
}

export default App;
