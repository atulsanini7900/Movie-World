import Cards from "./components/Cards";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/addmovie" element={<AddMovie/>} />
        <Route path="/detail/:id" element={<Detail/>} />


        
      </Routes>
      
    </>
    
  );
}

export default App;
