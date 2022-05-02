import { useOutletContext } from 'react-router-dom';
import { PlusSmIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { Button } from 'components/elements';

function formatActivityNames(names) {
  switch (names.length) {
    case 0:
      return 'All activities';
    case 1:
      return names[0];
    default:
      return `${names.length} activities`
  }
}

const Activity = ({ activities }) => (
  <div className='pl-2 shrink min-w-0 mr-6'>
    <div className='flex'>
      <span className='text-xl font-medium text-ellipsis overflow-hidden whitespace-nowrap inline-block'>
        {formatActivityNames(activities.map(a => a.name))}
      </span>
      <ChevronDownIcon className='h-5 mt-1.5 flex-none' />
    </div>
    <span className='text-[#cfccff]'>127 openings</span>
  </div>
);

export const Groups = () => {
  const [filters, ] = useOutletContext();

  return (
    <div className='bg-gradient-to-r from-primary-500 to-violet-400 text-white flex justify-between items-center px-4 py-7'>
      <Activity activities={filters.activities} />
      <Button variant='white' className='py-0.5 pl-3 pr-4'>
        <PlusSmIcon className='w-6' />
        Create
      </Button>
    </div>
  );
};