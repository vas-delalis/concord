import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  SearchIcon,
  ChatAltIcon,
  UserCircleIcon
} from '@heroicons/react/outline';
import {
  HomeIcon as SolidHomeIcon,
  SearchIcon as SolidSearchIcon,
  ChatAltIcon as SolidChatAltIcon,
  UserCircleIcon as SolidUserCircleIcon
} from '@heroicons/react/solid';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

const Nav = styled.nav`
  border-top: 1px solid var(--gray-200);
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const StyledNavLink = styled(NavLink)`
  svg {
    width: 24px;
  }

  color: var(--gray-700);

  &.active {
    color: var(--gray-800);
  }   
`

const Link = ({ to, iconOutline, iconSolid, end=false }) => (
  <StyledNavLink to={to} end={end}>
    {({ isActive }) => isActive ? iconSolid.render() : iconOutline.render() }
  </StyledNavLink>
);

export const MainLayout = ({ children }) => (
  <StyledLayout>
    <Main>
      {children}
    </Main>
    <Nav>
      <Link to="/app" iconOutline={HomeIcon} iconSolid={SolidHomeIcon} end />
      <Link to="/app/search" iconOutline={SearchIcon} iconSolid={SolidSearchIcon} />
      <Link to="/app/inbox" iconOutline={ChatAltIcon} iconSolid={SolidChatAltIcon} />
      <Link to="/app/profile" iconOutline={UserCircleIcon} iconSolid={SolidUserCircleIcon} />
    </Nav>
  </StyledLayout>
);