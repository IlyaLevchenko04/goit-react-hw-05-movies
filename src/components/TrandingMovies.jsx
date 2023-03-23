import { Link, useLocation } from 'react-router-dom';

export const TrandingMovies = ({ response, imageUrl }) => {
  const location = useLocation();
  console.log(location);
  const render = response.map(({ title, poster_path, id }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <img src={imageUrl + poster_path} alt="" />
          <h2>{title}</h2>
        </Link>
      </li>
    );
  });
  return <ul>{render}</ul>;
};
