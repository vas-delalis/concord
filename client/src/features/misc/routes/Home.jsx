import clsx from 'clsx';
import {
  SearchIcon,
} from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useDisclosure } from 'hooks/useDisclosure';
import { Button } from 'components/elements';
import { ActivitySearch } from 'features/activities';

export const Home = () => {
  const { open, close, isOpen } = useDisclosure();

  return (
    <>
      {isOpen && (<ActivitySearch close={close} />)}
      <section className='flex flex-col items-center px-8 py-12 bg-gradient-to-r from-primary-500 to-violet-400'>
        <button
          onClick={open}
          className={clsx(
            'flex items-center justify-center',
            'bg-white/90 w-full rounded-full h-12',
            'shadow text-primary-800 font-medium'
          )}
        >
          <SearchIcon className='w-5 mr-1.5' />
          What would you like to do?
        </button>
        <Link to="lfg" className='mt-8'>
          <Button variant="transparent" size="small">
            I'm feeling lucky
          </Button>
        </Link>
      </section>
    </>
  )
}