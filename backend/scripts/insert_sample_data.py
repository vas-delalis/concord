from server.database.connect import cursor, connection

cursor.execute("DELETE FROM user")
cursor.execute(
    'INSERT INTO user VALUES ("user1", "user1@example.com", "Real Name", "2022-06-06T17:25:17", "test", "Female", 0)'
)

connection.commit()
