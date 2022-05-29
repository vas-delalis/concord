from typing import Literal
from .ActivityList import ActivityList
from .Group import Group
from .User import User


activities = ActivityList().get_all()  # Remove this when we have a database


class GroupList:
    _groups: list[Group] = [
        Group(
            activities[3],
            User("user1"),
            "Looking for mercy pocket [silver/gold]",
            max_members=2,
        ),
        Group(
            activities[2],
            User("user2"),
            "rank fr gold - mic 21+ comunication et bonne ambiance lets go",
            max_members=6,
            language="French",
        ),
        Group(activities[1], User("user3"), "PUGs Discord"),
        Group(
            activities[0],
            User("user4"),
            "Lassen Sie uns diese Noobs rollen",
            max_members=5,
            language="German",
        ),
    ]

    def __init__(self):
        pass

    def add_group(self, group: Group):
        return

    # To add another option to the "sort" argument, simply add another string to the square brackets
    # e.g. Literal["recommended", "alphabetical"]
    def get_active(self, user_data, sort: Literal["recommended"] = "recommended"):
        return GroupList._groups
