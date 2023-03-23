import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const API_KEY = 'cbdd4abbcb92dd438a6c3b40fc45e1be';
// const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [apiResp, setApiResp] = useState([]);
  const [status, setStatus] = useState('idle');
  const location = useLocation();

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
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then(data => data.json())
      .then(({ results }) => {
        setApiResp(results);
        setStatus('resolved');
      });
    // eslint-disable-next-line
  }, [query]);

  const render = () =>
    apiResp.map(({ title, poster_path, id }) => {
      const profilePicture = `https://image.tmdb.org/t/p/w500${poster_path}`;

      const picturePicker = () => {
        const defaultImage = 'https://i.stack.imgur.com/XFHxd.jpg';
        if (!poster_path || poster_path === undefined) {
          return defaultImage;
        }

        return profilePicture;
      };
      return (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src={picturePicker()} alt="" />
            <h2>{title}</h2>
          </Link>
        </li>
      );
    });

  return (
    <>
      {status === 'idle' && (
        <form onSubmit={HandleSubmit}>
          <input
            value={searchParams.get('query') || ''}
            type="text"
            onChange={e => setSearchParams({ query: e.target.value })}
          />
          <button>Search</button>
        </form>
      )}

      {status === 'pending' && (
        <>
          (
          <form onSubmit={HandleSubmit}>
            <input
              value={searchParams.get('query') || ''}
              type="text"
              onChange={e => setSearchParams({ query: e.target.value })}
            />
            <button>Search</button>
          </form>
          <p>Loading...</p>)
        </>
      )}

      {status === 'resolved' && (
        <>
          <form onSubmit={HandleSubmit}>
            <input
              value={searchParams.get('query') || ''}
              type="text"
              onChange={e => setSearchParams({ query: e.target.value })}
            />
            <button>Search</button>
          </form>
          <ul>{render()}</ul>
        </>
      )}
    </>
  );
};
export default Movies;
