import sqlite3
import sys
import os
sys.path.append(os.path.join(sys.path[0], '../../'))
from server.Group import Group
from datetime import datetime


def get_group_by_id(cursor: sqlite3.Cursor, gid: int) -> Group:
    t = (gid,)
    try:
        cursor.execute('SELECT * FROM GROUP WHERE group_id = ?', t)
        data = cursor.fetchone()
        print(data)
        # too many stuff needs to be finalized before this can be done, so I'm leaving it for now
        # grp = Group(activity=, owner, title, max_members=data[2])
        # return grp
    except sqlite3.IntegrityError:
        print("Error while attempting to get user from DB")