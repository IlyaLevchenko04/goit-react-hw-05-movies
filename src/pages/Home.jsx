import { TrandingMovies } from 'components/TrandingMovies';
import { useEffect, useState } from 'react';
const API_KEY = 'cbdd4abbcb92dd438a6c3b40fc45e1be';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
  const [apiResp, setApiResp] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(data => data.json())
      .then(({ results }) => setApiResp(results));
  }, []);

  return <TrandingMovies response={apiResp} imageUrl={IMAGE_URL} />;
};
export default Home;
