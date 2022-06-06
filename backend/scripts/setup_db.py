"""
This script will initialize the database according to the schema.sql file.

It must be run from the root directory.
"""
import sqlite3

connection = sqlite3.connect("concord.db")
cursor = connection.cursor()

with open("server/database/schema.sql") as schema:
    cursor.executescript(schema.read())

connection.close()
