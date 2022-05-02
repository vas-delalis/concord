import clsx from 'clsx';
import { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import { Link, useOutletContext } from "react-router-dom";
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
  <ul className='py-4 space-y-0.5 h-80'>
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
  const [searchQuery, setSearchQuery] = useState('');
  const [activities, setActivities] = useState([]);
  const { data } = useQuery(
    ['activities', searchQuery],
    () => getActivities(searchQuery)
  );
  const [, setFilters] = useOutletContext();

  useEffect(() => {
    // The intended behaviour is this:
    // When an activity is selected, it stays where it is. However, when the search query is then changed,
    // selected activities stick around (even if they don't match the search query) and move to the top.
    if (!data) {
      return
    };

    const fetched = data.map(
      activity => ({
        ...activity,
        selected: false
      })
    );
    
    // We use the functional form of setState in order to avoid 'activities' as a dependency,
    // which would make activities move to the top immediately upon selection
    setActivities(oldActivities => {
      const selected = oldActivities.filter(a => a.selected);
      return [
      ...selected, // Previously selected activities
      ...fetched.filter(fetchedActivity =>
        !selected.some(selectedActivity => 
          selectedActivity.id === fetchedActivity.id
        )
      ) // Newly fetched activities that weren't previously selected
    ]});
  }, [data]);

  const toggleActivitySelect = (id) => {
    setActivities(oldActivities => 
      oldActivities.map(activity => 
        activity.id === id
          ? { ...activity, selected: !activity.selected }
          : activity
      )
    );
  };

  const handleSubmit = (useSelected = true) => { 
    setFilters({ // Set activities in Outlet context
      activities: useSelected ? activities.filter(activity => activity.selected) : []
    });
    close(); // Close modal
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <Search query={searchQuery} setQuery={setSearchQuery} />
      <Link
        to='groups'
        onClick={() => handleSubmit(false)}
        className={clsx(
          'bg-primary-200 flex items-center justify-between rounded',
          'font-medium p-2 pl-4 text-primary-900 text-base'
        )}
      >
        I'm flexible
        <ChevronRightIcon className='h-7' />
      </Link>
      <ActivityList activities={activities} toggleActivitySelect={toggleActivitySelect} />
      <Link to='/app/groups' onClick={handleSubmit}>
        <Button
          variant="primary"
          size="full" 
          disabled={activities.filter(a => a.selected).length === 0}
        >
          See groups
        </Button>
      </Link>
    </Modal>
  )
};