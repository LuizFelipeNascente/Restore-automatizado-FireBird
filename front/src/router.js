import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  Home  from './components/pages/home/Home';
import  Login  from './components/pages/login/Login';
import  Aliases  from './components/pages/aliases/Aliases';
import  Guia  from './components/pages/guia/Guia';
import  PrivateRoute  from "./auth/PrivateRoute";
import { UserAuthContextProvider } from "./auth/Auth";
import Linux from "./components/pages/home/home-linux/Linux"
import Linuxinc from "./components/pages/home/home-linux/Linuxinc"


function Rotas () {
  return (
  
    <UserAuthContextProvider>
    
      <Router> 
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/Home" exact element={<PrivateRoute> <Home /> </PrivateRoute>} />
          <Route path="/Home/Linux" exact element={<PrivateRoute> <Linux /> </PrivateRoute>} />
          <Route path="/Home/Linux/inc" exact element={<PrivateRoute> <Linuxinc /> </PrivateRoute>} />
          <Route path="/Aliases" exact element={<PrivateRoute> <Aliases /> </PrivateRoute>} />
          <Route path="/Guia" exact element={<PrivateRoute> <Guia /> </PrivateRoute>} />
        </Routes>
      </Router>   
    </UserAuthContextProvider>   
  )
}

  export default Rotas;