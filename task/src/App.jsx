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


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;



// <nav>
// <ul>
//   <li>
//     <Link to={'/'}>Home</Link>
//   </li>
//   <li>
//     <Link to={'/login'}>Login</Link>
//   </li>
//   <li>
//     <Link to={'/signup'}>Signup</Link>
//   </li>
// </ul>
// </nav>
