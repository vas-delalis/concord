export const fetchGroups = async ({ activities }) => {
  const groups = [
    { 
      id: 0, 
      activityName: 'Overwatch',
      activityAlias: 'OW',
      title: 'Looking for mercy pocket [silver/gold]',
      freeSlots: 1,
      totalSlots: 2,
      language: null,
      activityAttributes: {
        voiceChat: true,
        gamemode: 'Quick Play'
      }
    },
    { 
      id: 1,
      activityName: 'Overwatch',
      activityAlias: 'OW',
      title: 'rank fr gold - mic 21+ comunication et bonne ambiance lets go', 
      freeSlots: 1, 
      totalSlots: 3, 
      language: 'French',
      activityAttributes: {
        voiceChat: true,
        gamemode: 'Competitive'
      }
    },
    { 
      id: 2,
      activityName: 'Overwatch',
      activityAlias: 'OW',
      title: 'PUGs Discord', 
      freeSlots: 2,
      totalSlots: 6, 
      language: 'English',
      activityAttributes: {
        voiceChat: false,
        gamemode: null
      }
    },
    { 
      id: 3,
      activityName: 'Counter-Strike: Global Offensive',
      activityAlias: 'CS:GO',
      title: 'Lassen Sie uns diese Noobs rollen', 
      freeSlots: 1, 
      totalSlots: 3, 
      language: 'German',
      activityAttributes: {
        voiceChat: true
      }
    },
    { 
      id: 4,
      activityName: 'Counter-Strike: Global Offensive',
      activityAlias: 'CS:GO',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 
      freeSlots: 1, 
      totalSlots: 2, 
      language: null,
      activityAttributes: {
        voiceChat: false
      }
    },
    { 
      id: 5,
      activityName: 'Counter-Strike: Global Offensive',
      activityAlias: 'CS:GO',
      title: 'Tryhards only', 
      freeSlots: 4, 
      totalSlots: 5, 
      language: 'English',
      activityAttributes: {
        voiceChat: true
      }
    },
    { 
      id: 6,
      activityName: 'Counter-Strike: Global Offensive',
      activityAlias: 'CS:GO',
      title: 'παμε', 
      freeSlots: 1, 
      totalSlots: 5, 
      language: 'Greek',
      activityAttributes: {
        voiceChat: true
      }
    },
    { 
      id: 7,
      activityName: 'League of Legends',
      activityAlias: 'LoL',
      title: 'League of Legends group', 
      freeSlots: 1, 
      totalSlots: 2, 
      language: null,
      activityAttributes: {
        voiceChat: false
      }
    },
    { 
      id: 8,
      activityName: 'VALORANT',
      activityAlias: null,
      title: 'VALORANT group', 
      freeSlots: 1, 
      totalSlots: 2, 
      language: null,
      activityAttributes: {
        voiceChat: false
      }
    },
    { 
      id: 9,
      activityName: 'VALORANT',
      activityAlias: null,
      title: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 
      freeSlots: 1, 
      totalSlots: 2, 
      language: 'Portuguese',
      activityAttributes: {
        voiceChat: true
      }
    },
  ];

  if (activities.length === 0) {
    return groups
  }

  return groups.filter(group => activities.map(a => a.name).includes(group.activityName))
};