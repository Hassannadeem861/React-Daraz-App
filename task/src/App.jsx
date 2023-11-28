import './App.css';
import Home from './Components/Pages/Home/Home'
import Login from './Components/Pages/Login/Login'
import Signup from './Components/Pages/Signup/Signup'
import Logout from './Components/Pages/Logout/Logout'
import PageNotFound from './Components/Pages/404 Page Not Found/PageNotFound'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
          <li>
            <Link to={'/signup'}>Signup</Link>
          </li>
        </ul>
      </nav>

      
        <Routes>
          <Route path="/Home" elemet={<Home/>} />
          <Route path="/Login" elemet={<Login/>} />
          <Route path="/Signup" elemet={<Signup/>} />
          <Route path="/Logout" elemet={<Navigate to={'/login'} replace={true}/>} />
          <Route path="*" elemet={<Navigate to='/pagenotfound' replace={true}/>} />
        </Routes>
    


    </div>
  );
}

export default App;
