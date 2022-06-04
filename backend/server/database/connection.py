import sqlite3
import os

# Return a tuple with the connection object and the cursor object of the concord database
def concordConnect():
    path = 'server' + os.path.sep + 'database' + os.path.sep + 'concord_db.db'
    try:
        if not os.path.isfile(path):
            raise Exception("File not found")
        sqliteConn = sqlite3.connect(path)
        cursor = sqliteConn.cursor()
        return (sqliteConn, cursor)
    except Exception as err:
        print(err)

cock = concordConnect()