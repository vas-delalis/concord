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
        print("Error while attempting to get user from DB")

def add_new_user(cursor: sqlite3.Cursor, usr: User, fname: str, sname: str, email: str, pwd: str) -> None:
    try:
        t = (usr.username, fname, sname, email, usr.birthday, pwd, usr.gender, usr.reputation,)
        cursor.execute("INSERT INTO USER VALUES (?, ?, ?, ?, ?, ?, ?, ?)", t)
    except sqlite3.IntegrityError:
        print("Error while attempting to insert user to DB")