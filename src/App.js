import "./App.css";
// import MovieList from "./Components/MovieList";
// import Search from "./Components/Search";
// import TestLink from "./Components/TestLink";
import Error from "./Components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarSearchAdd } from "./NavbarSearchAdd";
import SharedLayouts from "./Components/SharedLayouts";
import Accueil from "./Components/Accueil";
import MovieDescription from "./Components/MovieDescription";
import Login from "./Components/Login";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);


  return (
        <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayouts/>}>
            <Route index element={<Login setUser={setUser} />}/>
            <Route path="navbarsearchadd" 
            element={
              <ProtectedRoute user={user} >
            <NavbarSearchAdd user={user} />
            </ProtectedRoute>}/>
            <Route path="navbarsearchadd/:movieId" element={<MovieDescription />}/>
            <Route path="*" element={<Error />}/>
          </Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;