import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { picturePicker } from 'services/apiFilmsServices';
import { StyledList, StyledItem, StyledPhoto } from './styledComponents';

export const MoviesList = ({ response }) => {
  const location = useLocation();

  return (
    <StyledList>
      {response.map(({ title, poster_path, id }) => {
        return (
          <StyledItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <StyledPhoto src={picturePicker(poster_path)} alt="" />
              <h2>{title}</h2>
            </Link>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

MoviesList.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
