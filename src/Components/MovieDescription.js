import { Link, useParams } from 'react-router-dom';
import { Data } from './DataMovie';


// **************************THIS IS THE PAGE WHERE WE WILL SEE TRAILER AND DESCRIPTION  *******************


const MovieDescription = () => {
    // console.log(useParams());
    const {movieId} = useParams();
    const film = Data.find((product)=> product.id===movieId);
    const {title, posterURL, embedvideo, description} = film ;
  return (
    <section className='section product'>
        <img src={posterURL} alt={title}/>
        <h2>{title}</h2>
        <p style={{position:"" }}>{description}</p>
        <div dangerouslySetInnerHTML={{ __html: embedvideo }}></div>
        <Link to='/navbarsearchadd'>Back to movies</Link>
    </section>
  )
}

export default MovieDescription