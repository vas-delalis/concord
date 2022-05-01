import clsx from 'clsx';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Modal, Button } from "components/elements";
import { getActivities } from "../api/getActivities";

const Search = ({ query, setQuery }) => (
  <div className='flex items-center pl-3 mb-4 border-b-2 border-gray-400'>
    <SearchIcon className='h-6 text-gray-500' />
    <input
      type="text"
      placeholder="Search activities"
      spellCheck="false"
      value={query}
      onChange={e => setQuery(e.target.value)}
      className='p-3 w-full text-gray-700 placeholder:text-gray-400 focus:outline-none'
    />
  </div>
);

const ActivityList = ({ activities, toggleActivitySelect }) => (
  <ul className='py-4 space-y-0.5'>
    {activities.slice(0, 5).map(activity => (
      <article
        key={activity.id}
        onClick={() => toggleActivitySelect(activity.id)}
        className={clsx(
          'px-6 py-4 rounded',
          { 'bg-gray-200': activity.selected },
        )}
      >
        {activity.name}
      </article>
    ))}
  </ul>
);

export const ActivitySearch = ({ isOpen, close }) => {
  const [query, setQuery] = useState('');
  const [activities, setActivities] = useState([]);

  // When query changes, get activities matching query from API
  useEffect(() => {
    setActivities(getActivities(query).map(
      activity => ({
        ...activity,
        selected: false
      })
    ));
  }, [query]);

  const toggleActivitySelect = (id) => (
    setActivities(activities.map(activity => 
      activity.id === id ? 
      { ...activity, selected: !activity.selected } :
      activity
    ))
  );

  return (
    <Modal isOpen={isOpen} close={close}>
      <Search query={query} setQuery={setQuery} />
      <Link
        to='groups'
        className={clsx(
          'bg-primary-200 flex items-center justify-between rounded',
          'font-medium p-2 pl-4 text-primary-900 text-base'
        )}
      >
        I'm flexible
        <ChevronRightIcon className='h-7' />
      </Link>
      <ActivityList activities={activities} toggleActivitySelect={toggleActivitySelect} />
      <Button variant="primary" size="full" disabled={activities.filter(a => a.selected).length === 0}>
        See groups
      </Button>
    </Modal>
  )
};