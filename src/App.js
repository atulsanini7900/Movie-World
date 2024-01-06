import Cards from "./components/Cards";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";
import { createContext, useState } from "react";
// import Login from "./components/Login";
import Signup from "./components/Signup";
import Login from "./components/Login";




const AppState=createContext();
function App() {
  const [login, setLogin]=useState(false);
  const [userName, setUserName]=useState("");
  return (
    <AppState.Provider value={{Login, setLogin,userName, setUserName}}>
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/addmovie" element={<AddMovie/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />




        
      </Routes>
      
    </>
    </AppState.Provider>
    
  );
}

export default App;
export  {AppState};