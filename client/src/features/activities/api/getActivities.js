export const getActivities = (query) => {
  const activities = ['Overwatch', 'Counter-Strike: Global Offensive', 'League of Legends', 'Dota 2', 'PUBG: BATTLEGROUNDS', 'Call of Duty: Warzone'];

  return activities
    .filter(activity => activity.startsWith(query));
};