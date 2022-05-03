import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { MdMic } from 'react-icons/md' ;
import { fetchGroups } from '../api/fetchGroups';
import avatar1 from '@/../../public/avatar1.svg';
import avatar2 from '@/../../public/avatar2.svg';

const Avatar = ({ groupId, ownerAvatar }) => {
  const avatar = groupId % 2 === 0 ? avatar1 : avatar2;
  return (
    <img src={avatar} alt='' className='rounded-full w-9 h-9 mr-4 bg-primary-200 flex-none' />
  );
};

const Info = ({ group }) => {
  const activityName = group.activityAlias ?? group.activityName;
  const tagArray = [activityName, group.activityAttributes.gamemode, group.language];
  const tagString = tagArray.filter(tag => tag).join(' · ')
  return (
    <div className='space-y-1 shrink'>
      <div className='text-gray-900 [overflow-wrap:anywhere]'>{group.title}</div>
      <div className='flex items-center space-x-1 overflow-hidden'>
        {group.activityAttributes.voiceChat && <MdMic size='20px' className='text-gray-400' />}
        <div className='text-gray-500 text-sm whitespace-nowrap truncate'>
          {tagString}
        </div>
      </div>
    </div>
  )
};

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
      <Avatar groupId={group.id} ownerAvatar={group.ownerAvatar} />
      <Info group={group} />
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
      <div className='text-center w-full py-8'>No groups found. Create your own!</div>
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