# concord
This is a Project created as an assignment for the Software Engineering course of the Computer Engineering and Informatics Department of the University of Patras.

Team Members:
Georgios Agelopoulos (Rabanis)
Vasilios Delalis (vas-delalis)
Maria Konstantina Bizoumi (MaritinaBiz)
Nikolaos Kantas (nickantas)
Alexandros Panagiotis Soilemezidis (Alexsoil)

Project Description:

A service that connects people with potential partners for activities such as video games, sports, fitness, and many others. It generalizes the idea of “looking for group” and match-making systems to any multi-person activity. The service will be accessible via a web application and will be optimized for Desktop and Mobile use.

-Features-

Activities:
The service will include an officially supported list of activities, each with their own unique attributes and parameters. The list will be structured in a way that is easily expandable, with the intention of increasing the selection of activities as the application grows in popularity. If it is considered feasable, we could implement a system that allows users to create their own custom activities under certain conditions. Some examples of activities could be:
- Team Sports (Football, Basketball etc)
- Video Games (Counter Strike, League of Legends, World of Warcraft etc)
- Club Activities (Tourist/Educational trips, Fan meet-ups, Car/Motorbike racing etc)
- Outdoor Sports (Rock Climbing, Mountain Biking, Paintball etc)

Attributes:
Each activity will have certain attributes which will determine the users that will be able to join. Activities may have attributes including and not limited to gender, age group, location, experience, monetary contribution per person if applicable and total number of people needed.
When a user wants to start an activity, they can select it from the list of available activities and fill in the attributes to comply with their needs.

User Profile:
Each user will have a profile. They will be able to log in with an email or a username and a password. They will then be able to choose from a list of activities that best suit them based on their needs, preferences, and most usual activities (ie choose a region or a country, gender, preferred activities like a sport or a hobby or a game). They will be able to add some additional info like their preferences, a short description etc. Each user will also have reputation,  a hidden numerical value indicating their trustworthiness, reliability, and overall quality as a member of the community. Reputation could potentially be used in the matchmaking algorithm.

Match-Making System:
A search mechanism, probably via a button, that will initiate the matching algorithm. A filter system will search for other people that search for the same activity or have put themselves as options for a match alongside some other options for preference purposes (for example looking for: basketball, preferences: male, 20-25, “position”, Patras, amateur)

Instant Messaging:
A chat capability for communication between matches.

Friends' List:
An ‘add friend’ function to make a network between users.
Search option for user profiles.
A suggestion function for activities a user may like based on their other preferences and what people with the same interests like.

Activity Suggestion:
A function for showing the most searched activities at the time. This will have filters as well, some very notable ones being the place, range of search and maybe the activities themselves.

A home screen with some of the above features at front and others accessible through a list or a menu.

- A group of 5 teenagers want to create a team for a casual football match at their local sports centre. They can create an activity for "Football" and set that they need 6 more players to join them. Given that it is a casual match, they can specify that there is no restriction to the players' experience or gender and for the sake of fairness limit the age to 14-19 years old. Optionally, they can specify what position each player will need to take (for example they may need someone to specifically be the Goalkeeper) or leave it open and decide once they have assembled their team. The activity will then be broadcasted to the users that fit the previously described parameters. Since this activity requires physical presense, it will also utilize the location of the activity's creator to limit the geographic range users that will be applicable (in that way, even a user that has the perfect profile for the activity will not be informed if his location is in a different continent.). Once the activity has been posted, users that are interested can request to join the group. The creator will be notified and can select which ones to pick based on his preference, the requestee's profile or their Reputation (Detailed description of Rep follows further below). The group will have a group chat in order to coordinate the details of the activity between them. After concluding, the users that were satisfied with the experience will be able to commend their teammates by gifting them Reputation (Rep), and will have the opportunity to add them to their friends' list to make it easier to connect and play again in the future.
- A group of 3 friends from Sweeden want to join an online CS:GO tournament and need 2 more players to create a team. They can create an activity for the game, set that they need 2 more players, an appropriate minimum skill level (by means of in-game rank) and the requirement that the players can speak either Sweedish or English. Since the tournament is played online, there is much less restriction on locality (for example a player from Germany may join the group, but a player outside of Europe will probably not be notified due to latency concerns.). Like described above, the group can chat, they can reward their teammates with Reo and add them to their friends list after the activity is over.