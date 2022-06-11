from server.database.connect import cursor, connection

# Reseting and Importing sample user(s)
cursor.execute("DELETE FROM user")
cursor.execute(
    'INSERT INTO user VALUES ("user1", "user1@example.com", "Real Name", "2022-06-06T17:25:17", "test", "Female", 0)'
)
# Reseting and Importing sample activities
cursor.execute("DELETE FROM activity")
cursor.execute(
    'INSERT INTO activity VALUES(0, "Call of Duty: Warzone", "Video Games", "CoD")'
)
cursor.execute(
    'INSERT INTO activity VALUES(1, "Counter-Strike: Global Offensive", "Video Games", "CSGO")'
)
cursor.execute(
    'INSERT INTO activity VALUES(2, "Dota 2", "Video Games", NULL)'
)
cursor.execute(
    'INSERT INTO activity VALUES(3, "League of Legends", "Video Games", "LoL")'
)
cursor.execute(
    'INSERT INTO activity VALUES(4, "Overwatch", "Video Games", "OW")'
)
cursor.execute(
    'INSERT INTO activity VALUES(5, "Football", "Team Sports", NULL)'
)
cursor.execute(
    'INSERT INTO activity VALUES(6, "Basketball", "Team Sports", NULL)'
)
cursor.execute(
    'INSERT INTO activity VALUES(7, "Movie Viewing", "Cultural Events", NULL)'
)
cursor.execute(
    'INSERT INTO activity VALUES(8, "Concert Attendance", "Cultural Events", NULL)'
)
cursor.execute(
    'INSERT INTO activity VALUES(9, "Dungeons and Dragons", "Board Games", "DnD")'
)
cursor.execute(
    'INSERT INTO activity VALUES(10, "Mountain Biking", "Extreme Sports", NULL)'
)
cursor.execute(
    'INSERT INTO activity VALUES(11, "Studying", "Quiet Activities", NULL)'
)
cursor.execute(
    'INSERT INTO activity VALUES(12, "Other", "Unspecified", NULL)'
)

connection.commit()
