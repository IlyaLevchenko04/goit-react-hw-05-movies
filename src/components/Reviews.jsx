import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'cbdd4abbcb92dd438a6c3b40fc45e1be';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    )
      .then(data => data.json())
      .then(({ results }) => setReviews(results));
  }, [movieId]);

  const render = () => {
    if (reviews.length === 0) {
      return <h2>There are no reviews</h2>;
    }

    return reviews.map(({ author, content, id }) => {
      return (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      );
    });
  };

  return <ul>{render()}</ul>;
};

export default Reviews;
