import React from "react";
import Search from "./Components/Search";
import MovieList from "./Components/MovieList";
import { useState } from "react";
import { Data } from "./Components/DataMovie";
import { Link } from "react-router-dom";


export function NavbarSearchAdd ({ user }) {
    const [KeyWord, setKeyWord] = useState("");
    const [newRate, setNewRate] = useState(0);
    const [movies, setMovies] = useState(Data);
    const search = (text) => {
      setKeyWord(text);
    };
  
    const setRate = (rate) => {
      setNewRate(rate);
    };
  
    const addMovie = (movie) => {
      setMovies(movies.concat(movie));
    };

return (
  <section>
      <nav>
      <h1>Hello, {user?.name}</h1>
        <Search search={search} setRate={setRate} newRate={newRate} />
      <div className="movies">
      
        <MovieList 
        addMovie={addMovie}
        movies={movies.filter(
          (el) =>
          el.rating >= newRate &&
          el.title.toLowerCase().includes(KeyWord.toLowerCase().trim())
        )}/>
      </div>
    </nav>
    <br></br>
    
       
    {/* <div className="products">
      {Data.map((product)=>{
        return <article key={product.id} >
          <h5>{product.title}</h5>
          <Link to={`/navbarsearchadd/${product.id}`}>  
          More info
          
        </Link>
        </article>

      })}
    </div> 
  */}

  </section>

);
}
