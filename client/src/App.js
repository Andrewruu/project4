import React, {useContext} from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { UserContext, UserProvider } from './context/UserContext';
import Login from './components/Login';
import Signup from './components/SignUp';


function App() {
  const {user, setUser} = useContext(UserContext)
  console.log(user)


  return (
    <div className="App">
      <Routes>
          <Route 
            path="/" 
            element={<Login onLogin={setUser}/> }/>

          
          <Route 
            path="/signup" 
            element={<Signup onLogin={setUser}/>}/>

      
      </Routes>
    </div>
  );
}

export default App;
