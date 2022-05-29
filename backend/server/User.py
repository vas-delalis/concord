from server.Attribute import Attribute
from server.Activity import Activity


class User:
    attributes: list
    activities: list

    def __init__(self, username: str):
        self.username: str = username
        self._reputation: int = 0
        self._history: list["Group"]
        self._attributes: list[Attribute]
        self._activities: list[Activity]

    def get_last_group(self):
        return

    def get_history(self):
        return

    def get_attributes(self):
        return

    def get_activities(self):
        return

    def increase_reputation(self, amount: int) -> None:
        ...

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
