import React, { useState } from "react";
import Add from "./Add";
import MovieCard from './MovieCard';
import { Data } from './DataMovie';
import { Link } from 'react-router-dom';

function MovieList({ movies, addMovie}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [ratingFilter] = useState(0);

  // const filteredMovies = movies.filter(movie => movie.rating >= ratingFilter);
  // console.log(ratingFilter)

  return (
    <>
      <div className="add">
        <button className="addButton" onClick={handleShow}>Add Movie</button>
        <Add show={show} handleClose={handleClose} addMovie={addMovie} />
      </div>
      
      
      {movies.map((movie) => (
        <div className="image-container" key={movie.id} > 
          <MovieCard movies={movie} />
           
        </div>
      ))}
    </>
  );
}

export default MovieList;

{/* <div className="products">
            {Data.map((product)=> (
              <div key={product.id} >
                  <h5>{product.title}</h5>
                  <Link to={`/navbarsearchadd/${product.id}`}>
                  More info */}
                  {/* **************************** 59:37 *************************** */}
    //               </Link>
    //             </div>
    //   ))}
    // </div>