import { useOutletContext } from 'react-router-dom';
import { PlusSmIcon } from '@heroicons/react/solid';
import { Button } from 'components/elements';

export const Groups = () => {
  const [filters, setFilters] = useOutletContext();

  return (
    <div className='bg-gradient-to-r from-primary-500 to-violet-400 text-white flex justify-between items-center p-4'>
      { filters.activities.length > 0 ? filters.activities.map(a => a.name).join(', ') : 'All activities' }
      <Button variant='white' className='py-0.5 pl-3 pr-4'>
        <PlusSmIcon className='w-6' />
        Create
      </Button>
    </div>
  );
};