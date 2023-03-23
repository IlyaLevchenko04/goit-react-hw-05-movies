import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cbdd4abbcb92dd438a6c3b40fc45e1be`
    )
      .then(data => data.json())
      .then(data => setCast(data.cast));
  }, [movieId]);

  const defaultImage = 'https://i.stack.imgur.com/XFHxd.jpg';
  const render = cast.map(({ name, profile_path, id, character }) => {
    const profilePicture = `https://image.tmdb.org/t/p/w500${profile_path}`;
    const picturePicker = () => {
      if (!profile_path) {
        return defaultImage;
      }

      return profilePicture;
    };
    return (
      <li key={id}>
        <img src={picturePicker()} alt="" width="100px" />
        <h2>{name}</h2>
        <p>Character: {character}</p>
      </li>
    );
  });

  return <ul>{render}</ul>;
};

export default Cast;
