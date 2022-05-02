export const fetchGroups = async ({ activities }) => {
  const groups = [
    { id: 0, activityName: 'Overwatch', title: 'Looking for mercy pocket [silver/gold]' },
    { id: 1, activityName: 'Overwatch', title: 'rank fr gold - mic 21+ comunication et bonne ambiance lets go' },
    { id: 2, activityName: 'Overwatch', title: 'PUGs Discord' },
    { id: 3, activityName: 'Counter-Strike: Global Offensive', title: 'Lassen Sie uns diese Noobs rollen' },
    { id: 4, activityName: 'Counter-Strike: Global Offensive', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
    { id: 5, activityName: 'Counter-Strike: Global Offensive', title: 'Tryhards only' },
    { id: 6, activityName: 'Counter-Strike: Global Offensive', title: 'παμε' },
    { id: 7, activityName: 'League of Legends', title: 'League of Legends group' },
    { id: 8, activityName: 'VALORANT', title: 'VALORANT Group' },
  ];

  if (activities.length === 0) {
    return groups
  }

  return groups.filter(group => activities.map(a => a.name).includes(group.activityName))
};