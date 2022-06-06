from typing import Literal
from server.Group import Group


class GroupList:
    _groups: list[Group]

    def __init__(self):
        pass

    def add_group(self, group: Group):
        return

    # To add another option to the "sort" argument, simply add another string to the square brackets
    # e.g. Literal["recommended", "alphabetical"]
    def get_active(self, user_data, sort: Literal["recommended"] = "recommended"):
        return GroupList._groups
