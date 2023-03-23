import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TrandingMovies = ({ response, imageUrl }) => {
  const location = useLocation();
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

TrandingMovies.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  imageUrl: PropTypes.string.isRequired,
};
