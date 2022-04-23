export const getActivities = (query) => {
  const activities = [
    { id: 0, name: 'Overwatch' },
    { id: 1, name: 'Counter-Strike: Global Offensive' },
    { id: 2, name: 'League of Legends' },
    { id: 3, name: 'Dota 2' },
    { id: 4, name: 'PUBG: BATTLEGROUNDS' },
    { id: 5, name: 'Call of Duty: Warzone' },
  ];

  return activities
    .filter(activity => activity.name.startsWith(query));
};