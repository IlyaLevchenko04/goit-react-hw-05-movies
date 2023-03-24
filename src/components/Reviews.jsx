import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/apiFilmsServices';
import { StyledReviews } from './styledComponents';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);

  const render = () => {};

  return (
    <StyledReviews>
      {reviews.length === 0 && <h2>There are no reviews</h2>}

      {reviews.length > 0 &&
        reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
    </StyledReviews>
  );
};

export default Reviews;
