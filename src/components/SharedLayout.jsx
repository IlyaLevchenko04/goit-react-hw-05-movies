import { StyledNav, StyledLink } from './styledComponents';
const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
      <Outlet />
    </>
  );
};

export default SharedLayout;
