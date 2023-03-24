import { MoviesList } from 'components/TrandingMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/apiFilmsServices';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [apiResp, setApiResp] = useState([]);
  const [status, setStatus] = useState('idle');

  const [searchParams, setSearchParams] = useSearchParams();

  const HandleSubmit = e => {
    e.preventDefault();
    setQuery(searchParams.get('query') || '');
  };

  useEffect(() => {
    if (query === '') {
      return setQuery(searchParams.get('query') || '');
    }
    setStatus('pending');
    getMovieByName(query).then(({ results }) => {
      if (results.length === 0) {
        setStatus('idle');
        return alert('There is no film with such name, try again');
      }
      setApiResp(results);
      setStatus('resolved');
    });
    // eslint-disable-next-line
  }, [query]);

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          value={searchParams.get('query') || ''}
          type="text"
          onChange={e => setSearchParams({ query: e.target.value })}
        />
        <button>Search</button>
      </form>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'resolved' && <MoviesList response={apiResp} />}
    </>
  );
};
export default Movies;
