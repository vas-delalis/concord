# concord

## This is a Project created as an assignment for the Software Engineering course of the Computer Engineering and Informatics Department of the University of Patras

Team Members:
Georgios Agelopoulos (Rabanis)
Vasilios Delalis (vas-delalis)
Maria Konstantina Bizoumi (MaritinaBiz)
Nikolaos Kantas (nickantas)
Alexandros Panagiotis Soilemezidis (Alexsoil)

### Project Description

A service that connects people with potential partners for activities such as video games, sports, fitness, and many others. It generalizes the idea of “looking for group” and match-making systems to any multi-person activity. The service will be accessible via a web application and will be optimized for Desktop and Mobile use.

## -Features-

### Activities

The service will include an officially supported list of activities, each with their own unique attributes and parameters. The list will be structured in a way that is easily expandable, with the intention of increasing the selection of activities as the application grows in popularity. Custom activities are a special case that will not include any default attributes and will rely on the lobby creator to select the requirements for entry in a way that satisfies them. Each user will be able to save up to a certain a number of custom activities, allowing them to reuse them in the future. If it is considered feasable, we could implement a system that allows custom user activities with a large enough following to become officially supported (community verified activities). Some examples of activities could be:

- Team Sports (Football, Basketball etc)
- Video Games (Counter Strike, League of Legends, World of Warcraft etc)
- Club Activities (Tourist/Educational trips, Fan meet-ups, Car/Motorbike racing etc)
- Outdoor Sports (Rock Climbing, Mountain Biking, Paintball etc)

### Attributes

Each activity will have certain attributes which will determine the users that will be able to join. The attributes may be required or optional depending on the lobby creator's needs. When a user wants to start an event, they can select it from the list of available activities and fill in the attributes to comply with their requirements for entry. Some examples of attributes could be:

- Gender (Most team sport competitions are male or female exclusive)
- Age (Either as a limit or a range)
- Location (For activities which require physical presense of the users)
- Experience (Depending on if the group requires experienced members or is open to beginners)
- Monetary contribution per person (In case that the event requires an entry fee)
- Maximum number of people needed (Specifying how large the group can be depending on the event)
- Required/Provided Equipment (Weather users have to bring their own)

### Lobbies

A user can at any time create a new lobby to host an event. The lobby creation process will be initiated via a button on the main screen. Once pressed, the user will be presented with a lobby creation screen. From there the user will have to input a title, a planned date and time for the event, as well as the desired activity that will take place. The activity will be selected from a predetermined list, including officially supported activities, verified community activities and custom activities. After selection, the system will provide the lobby creator with a list of default attributes that are critical to said activity, which they will have to fill in in order to provide the matching algorithm with information regarding the requirements to join the lobby. Optionally, the lobby creator will be able to include a small description of the event that potential members will be able to quickly check, and add or remove attributes that are not required by the system for the activity. After the lobby is created, an instance will be created in the system and it will be kept alive until the events conclusion plus a set ammount of time. The lobby creator will have access to the lobby management screen, from which they can alter the attributes they set during creation, the time/date of the event, manage entry applications (if applicable), view and manage lobby members, create announcements/notifications, set reminders, change the title/description of the event, have access to the looby's chat and get an invite link for the lobby. Lobby members will have access to the chat, will be able to get the lobby's invite link to forward it to friends, will recieve notifications whenever the lobby creator makes a new announcement and will also have access to a button to leave the lobby.

### User Profile

Each user will have a profile. They will be able to sign up with an email, a username and a password. They will then be able to log in with their credentials, and set up their profile with information such as their country/region, gender, age and the activities that interest them from a list. They will also be able to personalise their profile with an avatar/profile picture, a description of themselves, a list of their accolades/achievements etc. Their Reputation level (explained below) will also be publically visible.

### Reputation

Each user will have Reputation, a hidden numerical value indicating their trustworthiness, reliability, and overall quality as a member of the community. Reputation will start from a base value for all new users, and can be increased by having other users commend them after completing a group activity. Reputation will also have specified levels which will be related to the hidden value and will help users gauge how well-behaved potential team members are. A higher reputation level will be a factor in matchmaking, leading the system to be biased towards recommending users with better behaviour.

### Match-Making System

A search mechanism, possibly via a button, that will initiate the matching algorithm. A filter system will look for lobbies that match the user's preffered activities and have attributes that fit their profile. The list of available lobbies will appear in descending order based on relevance to the user's preferences. An optional "I'm feeling lucky" button will instantly make the user join the most relevant available lobby and will reward the them with a reputation multiplier if they go ahead with the event. Selecting a lobby from the list will provide the user with a detailed description of all attributes and information available, and a button to join the lobby. Some examples could be:

- A university student is looking for others interested in a casual match of basketball at a local court:
Looking for: Basketball, Male, 20-25, Any position, Patras, Amateur, From 4 up to 6 more users.
- A Biking club located in Athens is organizing a trip on local mountain trails:
Looking for: Mountain Biking, Any gender, 16+, Attica, Any experience level, Up to 50 users (Currently 20).

### Instant Messaging

A functional chat feature will be provided for communication between friends/lobby members, including event scheduling and reminders.

### Friends' List

The application will feature an 'add friend' function to create a network between users as well as a search function for user profiles. In addition, the users will have the option to easily add friends from the same lobby after the completion of an event and view their 'Recently matched with...' list.

### Activity Suggestion

The user's home page will have an integrated panel for showing the most popular activities at the time and related lobbies that the user can quickly join. The user will be able to apply filters to the suggestion to suit their needs or search for activities themselves. Additionally, there could be a 'you may also like...' section which will provide suggestions of activities based on what the user's friends/users with similar interests also enjoy.

### Some complete examples of the Application's use

- A group of 5 teenagers want to create a team for a casual football match at their local sports centre. They can create an activity for "Football" and set that they need 6 more players to join them. Given that it is a casual match, they can specify that there is no restriction to the players' experience or gender and for the sake of fairness limit the age to 14-19 years old. Optionally, they can specify what position each player will need to take (for example they may need someone to specifically be the Goalkeeper) or leave it open and decide once they have assembled their team. The activity will then be broadcasted to the users that fit the previously described parameters. Since this activity requires physical presense, it will also utilize the location of the activity's creator to limit the geographic range users that will be applicable (in that way, even a user that has the perfect profile for the activity will not be informed if his location is in a different continent.). Once the activity has been posted, users that are interested can request to join the group. The creator will be notified and can select which ones to pick based on his preference, the requestee's profile or their Reputation (Detailed description of Rep follows further below). The group will have a group chat in order to coordinate the details of the activity between them. After concluding, the users that were satisfied with the experience will be able to commend their teammates by gifting them Reputation (Rep), and will have the opportunity to add them to their friends' list to make it easier to connect and play again in the future.
- A group of 3 friends from Sweeden want to join an online CS:GO tournament and need 2 more players to create a team. They can create an activity for the game, set that they need 2 more players, an appropriate minimum skill level (by means of in-game rank) and the requirement that the players can speak either Sweedish or English. Since the tournament is played online, there is much less restriction on locality (for example a player from Germany may join the group, but a player outside of Europe will probably not be notified due to latency concerns.). Like described above, the group can chat, they can reward their teammates with Rep and add them to their friends list after the activity is over.
