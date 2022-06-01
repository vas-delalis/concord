from typing import Literal
from datetime import datetime
from server.Activity import Activity


class User:
    def __init__(self, username: str, birthday: datetime, gender: Literal['Male', 'Female', 'Other']):
        self.username: str = username
        self._reputation: int = 0
        self._birthday: datetime = birthday
        self._history: list["Group"] = []
        self._activities: list[Activity] = []
        self._gender: Literal['Male', 'Female', 'Other'] = gender

    def get_last_group(self):
        return

    def get_history(self):
        return

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
