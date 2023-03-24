import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding-left: 0;
`;

export const StyledItem = styled('li')`
  border: solid black 1px;
  width: calc((100% - 40px) / 3);
`;

export const StyledPhoto = styled('img')`
  width: 100%;
`;

export const StyledLink = styled(NavLink)`
  color: #212121;
  text-decoration: none;
  margin: 15px;
  font-size: 20px;

  &.active {
    color: orangered;
    margin: 15px;
  }
`;

export const StyledNav = styled('nav')`
  margin-bottom: 15px;
`;

export const StyledContainer = styled('div')`
  display: flex;
  gap: 30px;
`;

export const StyledButton = styled('button')`
  margin-bottom: 16px;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 3px;
`;

export const StyledLinkButton = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 15px;
  font-size: 20px;
`;

export const StyledItemCast = styled('li')`
  border: solid black 1px;
  width: calc((100% - 40px) / 12);
`;

export const StyledReviews = styled('ul')`
  padding: 0;
  list-style: none;
`;
