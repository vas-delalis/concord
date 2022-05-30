from server.Attribute import Attribute
from server.Activity import Activity
from server.Group import Group
from datetime import datetime
import string

class User:
    attributes: list
    activities: list

    def __init__(self, username: str, birthday: datetime):
        self.username: str = username
        self._reputation: int = 0
        self._birthday = birthday
        self._history: list[Group] = []
        self._attributes: list[Attribute] = []
        self._activities: list[Activity] = []
        self._commended_by: list[User] = []

    def get_last_group(self):
        return

    def get_history(self):
        return

    def get_attributes(self) -> list[Attribute]:
        return self._attributes.copy()

    def get_activities(self) -> list[Activity]:
        return self._activities.copy()

    def increase_reputation(self, amount: int) -> None:
        self._reputation += amount

    def is_logged_in(self) -> bool:
        ...

    def update_user_data(self):
        return

    def check_requirements(self):
        return

    def send_friend_request(self):
        return

    def add_friend(self):
        return
