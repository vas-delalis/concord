import sqlite3
import os
from textwrap import dedent


# https://python-patterns.guide/python/prebound-methods/
class Database:
    def __init__(self):
        def dict_factory(cursor, row):
            d = {}
            for idx, col in enumerate(cursor.description):
                d[col[0]] = row[idx]
            return d

        if not os.path.isfile("concord.db"):
            raise OSError(dedent("""\
                Database not found.
                Run setup_db.py first and make sure the working directory is the project root.
            """))

        self.connection = sqlite3.connect("concord.db")
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()


_instance = Database()
connection = _instance.connection
cursor = _instance.cursor
