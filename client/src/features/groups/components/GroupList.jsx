import { useQuery } from 'react-query';
import { fetchGroups } from '../api/fetchGroups';

export const GroupList = ({ filters }) => {
  const { data } = useQuery(
    ['activities', filters],
    () => fetchGroups(filters)
  );

  if (!data?.length) {
    return (
      <span>No groups found</span>
    )
  }

  return (
    <ul className='divide-y-2'>
      {data.map(group => (
        <article
          key={group.id}
          className='p-6 flex items-center'
        >
          <div className='rounded-full w-9 h-9 mr-4 bg-primary-200 flex-none'></div>
          <span className='text-gray-900'>{group.title}</span>
        </article>
      ))}
    </ul>
  )
}