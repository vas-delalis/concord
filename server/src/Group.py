from Activity import Activity
from User import User
from Attribute import Attribute


class Group:
    activity: Activity
    owner: User
    moderators: list[User]
    members: list[User]
    title: str
    isComplete: bool
    attributes: Attribute

    def mark_as_complete(self):
        return

    def add_member(self, user_id: int):
        return

    def get_attributes(self):
        return

    def add_attribute(self, attribute: Attribute):
        return

    def remove_attribute(self, attribute: Attribute):
        return

    def get_members(self):
        return
