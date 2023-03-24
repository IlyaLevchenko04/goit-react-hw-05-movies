import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast, picturePicker } from 'services/apiFilmsServices';
import { StyledList, StyledItemCast } from './styledComponents';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <StyledList>
      {cast.map(({ name, profile_path, id, character }) => {
        return (
          <StyledItemCast key={id}>
            <img src={picturePicker(profile_path)} alt="" width="100px" />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </StyledItemCast>
        );
      })}
    </StyledList>
  );
};

export default Cast;
