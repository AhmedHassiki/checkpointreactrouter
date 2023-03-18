import * as React from 'react';
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';
import './MovieCard.css';
import { useState } from "react";
import  {Link} from "react-router-dom";


function MovieCard({movies}) {
  const [value, setValue] = useState(movies.rating);

  return (
    <div className="card movie_card">
      
      <img src={movies.posterURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movies.title}</h5>
        <p className="description">{movies.description}</p>
        
        
        <Typography component="legend">Movie rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <br></br>
        <Link to={`/navbarsearchadd/${movies.id}`}>More Info</Link>
        
      </div>
    </div>
  );
}

export default MovieCard;
