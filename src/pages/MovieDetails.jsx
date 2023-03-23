import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [apiResp, setApiResp] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cbdd4abbcb92dd438a6c3b40fc45e1be`
    )
      .then(data => data.json())
      .then(data => setApiResp(data));
  }, [movieId]);

  const {
    title,
    poster_path,
    genres = [],
    overview,
    release_date = '0000',
    vote_average = 0.0,
  } = apiResp;

  return (
    <>
      <button>
        <Link to={locationRef.current.state?.from ?? '/movies'}>Go back</Link>
      </button>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <h2>{`${title}(${release_date.slice(0, 4)})`}</h2>
        <h3>User score{` ${vote_average.toFixed(2)}`}</h3>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
      <Link to={`cast`}>Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
export default MovieDetails;
