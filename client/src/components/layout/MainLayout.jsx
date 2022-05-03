import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  SearchIcon,
  ChatAltIcon,
  UserCircleIcon
} from '@heroicons/react/outline';
import clsx from "clsx";

const Link = ({ to, Icon, end=false }) => {
  return (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <Icon className={clsx(
          'w-6 ',
          isActive ? 'text-primary-900' : 'text-gray-500'
        )} />
      )}
    </NavLink>
  )
};

export const MainLayout = ({ children }) => (
  <>
    <main className='overflow-y-auto pb-14'>
      {children}
    </main>
    <nav className='fixed bottom-0 left-0 right-0 flex justify-evenly items-center h-14 border-t border-gray-300 bg-white'>
      <Link to="/app" Icon={HomeIcon} end />
      <Link to="/app/search" Icon={SearchIcon} />
      <Link to="/app/inbox" Icon={ChatAltIcon} />
      <Link to="/app/profile" Icon={UserCircleIcon} />
    </nav>
  </>
);