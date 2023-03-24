const API_KEY = 'cbdd4abbcb92dd438a6c3b40fc45e1be';
const defaultImage = 'https://i.stack.imgur.com/XFHxd.jpg';

export const getTranding = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  ).then(data => data.json());
};

export const getReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  ).then(data => data.json());
};

export const getMovieDetails = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  ).then(data => data.json());
};

export const getMovieByName = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then(data => data.json());
};

export const getCast = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  ).then(data => data.json());
};

export const picturePicker = url => {
  const profilePicture = `https://image.tmdb.org/t/p/w500${url}`;
  if (!url) {
    return defaultImage;
  }

  return profilePicture;
};
