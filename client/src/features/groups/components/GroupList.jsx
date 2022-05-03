import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchGroups } from '../api/fetchGroups';

const ProfilePic = () => (
  <div className='rounded-full w-9 h-9 mr-4 bg-primary-200 flex-none' />
);

const Info = ({ title, activityName }) => (
  <div>
    <div className='text-gray-900 [overflow-wrap:anywhere]'>{title}</div>
    <div className='text-gray-500 text-sm'>{activityName}</div>
  </div>
);

const Slots = ({ freeSlots, totalSlots }) => (
  <div className='flex items-baseline whitespace-nowrap ml-8 text-gray-500'>
    <span className='font-medium'>{totalSlots - freeSlots}</span>
    <span className='mx-0.5'>/</span>
    <span>{totalSlots}</span>
  </div>
);

const Group = ({ group }) => (
  <article className='p-6 flex items-center justify-between'>
    <div className='flex items-center'>
      <ProfilePic />
      <Info title={group.title} activityName={group.activityName} />
    </div>
    <Slots freeSlots={group.freeSlots} totalSlots={group.totalSlots} />
  </article>
);

export const GroupList = ({ filters, setOpenings }) => {
  const { data } = useQuery(
    ['activities', filters],
    () => fetchGroups(filters)
  );

  useEffect(() => {
    if (!data) {
      return
    }
    setOpenings(data.map(group => group.freeSlots).reduce((p, c) => p + c, 0));
  }, [data, setOpenings]);


  if (!data?.length) {
    return (
      <span>No groups found</span>
    )
  }

  return (
    <ul className='divide-y-2'>
      {data.map(group => (
        <Group key={group.id} group={group} />
      ))}
    </ul>
  )
}