import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieDetails, picturePicker } from 'services/apiFilmsServices';
import {
  StyledList,
  StyledContainer,
  StyledLink,
  StyledButton,
  StyledLinkButton,
} from 'components/styledComponents';

const MovieDetails = () => {
  const [apiResp, setApiResp] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    getMovieDetails(movieId).then(data => setApiResp(data));
  }, [movieId]);

  const {
    title,
    poster_path = 'https://i.stack.imgur.com/XFHxd.jpg',
    genres = [],
    overview,
    release_date = '0000',
    vote_average = 0.0,
  } = apiResp;

  return (
    <>
      <StyledButton>
        <StyledLinkButton to={locationRef.current.state?.from ?? '/movies'}>
          Go back
        </StyledLinkButton>
      </StyledButton>
      <StyledContainer>
        <img src={picturePicker(poster_path)} alt="" />
        <div>
          <h2>{`${title}(${release_date.slice(0, 4)})`}</h2>
          <h3>User score{` ${(vote_average * 10).toFixed(0)}%`}</h3>
          <h3>Genres</h3>
          <StyledList>
            {genres.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
          </StyledList>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      </StyledContainer>
      <StyledLink to={`cast`}>Cast</StyledLink>
      <StyledLink to="reviews">Reviews</StyledLink>
      <Outlet />
    </>
  );
};
export default MovieDetails;
