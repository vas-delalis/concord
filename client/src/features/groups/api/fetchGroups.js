export const fetchGroups = async ({ activities }) => {
  const groups = [
    { id: 0, activityName: 'Overwatch', title: 'Looking for mercy pocket [silver/gold]', freeSlots: 1, totalSlots: 2 },
    { id: 1, activityName: 'Overwatch', title: 'rank fr gold - mic 21+ comunication et bonne ambiance lets go', freeSlots: 1, totalSlots: 3 },
    { id: 2, activityName: 'Overwatch', title: 'PUGs Discord', freeSlots: 2, totalSlots: 6 },
    { id: 3, activityName: 'Counter-Strike: Global Offensive', title: 'Lassen Sie uns diese Noobs rollen', freeSlots: 1, totalSlots: 3 },
    { id: 4, activityName: 'Counter-Strike: Global Offensive', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', freeSlots: 1, totalSlots: 2 },
    { id: 5, activityName: 'Counter-Strike: Global Offensive', title: 'Tryhards only', freeSlots: 4, totalSlots: 5 },
    { id: 6, activityName: 'Counter-Strike: Global Offensive', title: 'παμε', freeSlots: 1, totalSlots: 5 },
    { id: 7, activityName: 'League of Legends', title: 'League of Legends group', freeSlots: 1, totalSlots: 2 },
    { id: 8, activityName: 'VALORANT', title: 'VALORANT Group', freeSlots: 1, totalSlots: 2 },
    { id: 9, activityName: 'VALORANT', title: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', freeSlots: 1, totalSlots: 2 },
  ];

  if (activities.length === 0) {
    return groups
  }

  return groups.filter(group => activities.map(a => a.name).includes(group.activityName))
};