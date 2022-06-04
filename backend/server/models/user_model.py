import sqlite3
import sys
import os
sys.path.append(os.path.join(sys.path[0], '../../'))
from server.User import User
from server.database.connection import concordConnect
from datetime import datetime


def get_user_by_id(cursor: sqlite3.Cursor, uid: int) -> User:
    t = (uid,)
    try:
        cursor.execute('SELECT * FROM USER WHERE user_id = ?', t)
        data = cursor.fetchone()
        print(data)
        usr = User(username=data[1].replace("'",''), birthday=datetime.strptime(data[5].replace("'",''), "%Y-%m-%d"), gender= data[7].replace("'",''))
        return usr
    except sqlite3.IntegrityError:
        print("Oh fuck")




cock = concordConnect()
cock[1].execute('INSERT INTO USER VALUES (69, "cockman", "cock@man.kz", "Man", "Cock", "2000-06-29", "abnaroz", "Other")')
get_user_by_id(cock[1], 69)