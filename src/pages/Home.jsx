import { MoviesList } from 'components/TrandingMovies';
import { useEffect, useState } from 'react';
import { getTranding } from 'services/apiFilmsServices';

const Home = () => {
  const [apiResp, setApiResp] = useState([]);

  useEffect(() => {
    getTranding().then(({ results }) => setApiResp(results));
  }, []);

  return <MoviesList response={apiResp} />;
};
export default Home;
