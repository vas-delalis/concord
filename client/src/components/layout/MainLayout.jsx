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

const Link = ({ to, IconInactive, IconActive, end=false }) => {
  return (
    <NavLink to={to} end={end}>
      {({ isActive }) => isActive ? (
        <IconActive className='w-6 text-gray-800' />
      ) : (
        <IconInactive className='w-6 text-gray-500' />
      )}
    </NavLink>
  )
};

export const MainLayout = ({ children }) => (
  <>
    <main>
      {children}
    </main>
    <nav className='fixed bottom-0 left-0 right-0 flex justify-evenly items-center h-14 border-t border-gray-300'>
      <Link to="/app" IconInactive={HomeIcon} IconActive={SolidHomeIcon} end />
      <Link to="/app/search" IconInactive={SearchIcon} IconActive={SolidSearchIcon} />
      <Link to="/app/inbox" IconInactive={ChatAltIcon} IconActive={SolidChatAltIcon} />
      <Link to="/app/profile" IconInactive={UserCircleIcon} IconActive={SolidUserCircleIcon} />
    </nav>
  </>
);