import sqlite3

# Return a tuple with the connection object and the cursor object of the concord database
def concordConnect():
    sqliteConn = sqlite3.connect('concord_db.db')
    cursor = sqliteConn.cursor()
    return (sqliteConn, cursor)
