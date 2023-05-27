import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import UserPage from './components/user/UserPage';
import Login from './components/Login';
import TutorialList from './components/tutorials/TutorialList';
import AddTutorial from './components/tutorials/AddTutrial';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserForm from './components/user/UserForm';
import { useEffect, useState } from 'react';
import DateTimeLabel from './utils/DateTimeLabel';
import { Dropdown } from 'react-bootstrap';
import { FiLogOut, FiEdit } from "react-icons/fi";
import Dashboard from './components/dashboard/Dashboard';
import ProductTable from './components/prodcut/ProductTable';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  }


  const getUser = () => {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    return parsedUser;
  }

  const getUserNameFromLocalStorage = () => {
    return getUser()?.client_first_name;
  }

  const isAdmin = () => {
    const user = getUser();
    if(user.role === 'admin'){
      return true
    }
    return false;
  }

  return (
    <div className="App">
      {isLoggedIn && (
        <div>
          <DateTimeLabel />
          <nav className="navbar navbar-expand" style={{ backgroundColor: "#3498db" }}>
            <a href="/" className="navbar-brand text-light">
              CodePact <span>{"</>"}&#60;/&#62;</span>
            </a>
            <label className='text-light text-uppercase'>Welcome {getUserNameFromLocalStorage()}</label>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto"> {/* Use ms-auto class here */}
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link text-light">
                    Dashboard
                  </Link>
                </li>
                {isAdmin() && (
                  <li className="nav-item">
                  <Link to="/users" className="nav-link text-light">
                    Users
                  </Link>
                </li>
                )}
                <li className="nav-item">
                  <Link to="/products" className="nav-link text-light">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link text-light">
                    Suppliers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link text-light">
                    Shifts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link text-light">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link text-light">
                    Invoice
                  </Link>
                </li>
                <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link text-light"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FiEdit className="dropdown-icon" />{" "}
                  {/* Edit Profile Icon */}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      <FiLogOut className="dropdown-item-icon" /> Logout
                    </button>
                  </li>
                  <li>
                    <Link to="/userForm" className="dropdown-item">
                      <FiEdit className="dropdown-item-icon" /> Edit
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>
              </ul>
              {/* <Dropdown>
                <Dropdown.Toggle
                  className="justify-content-center"
                  style={{ position: "relative" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Profile"
                    className="rounded-circle img-thumbnail img-fluid"
                    style={{ width: "50px", height: "50px" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="dropdown-item">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout} className="logout-item">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
          </nav>
        </div>
      )}
      <div className='container mt-3'>
        <Switch>
          {isLoggedIn ? (
            <>
              {isAdmin() && (
                  <Route exact path="/users" component={UserPage} />
                )}
              <Route exact path="/tutorials" component={TutorialList} />
              <Route exact path="/addTutorial" component={AddTutorial} />
              <Route exact path="/userForm" component={UserForm} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/products" component={ProductTable} />
            </>
          ) : (
            <Route exact path="/" render={() => <Login onLogin={handleLogin} />} />
          )}
        </Switch>
        <ToastContainer />
      </div>


    </div>
  );
}

export default App;
