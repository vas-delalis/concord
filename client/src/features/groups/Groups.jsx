import { useSearchParams } from 'react-router-dom';
import { PlusSmIcon } from '@heroicons/react/solid';
import { Button } from 'components/elements';

export const Groups = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.getAll('activity'));

  return (
    <div className='bg-gradient-to-r from-primary-500 to-violet-400 text-white flex justify-between items-center p-4'>
      Overwatch
      <Button variant='white' className='py-0.5 pl-3 pr-4'>
        <PlusSmIcon className='w-6' />
        Create
      </Button>
    </div>
  );
};