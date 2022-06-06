from __future__ import annotations
from typing import Literal, TYPE_CHECKING
from datetime import datetime
from server.Activity import Activity

if TYPE_CHECKING:
    from server.Group import Group


class User:
    def __init__(self, username: str, birthday: datetime, gender: Literal['Male', 'Female', 'Other']):
        self.username: str = username
        self._reputation: int = 0
        self._birthday: datetime = birthday
        self._history: list[Group] = []
        self._activities: list[Activity] = []
        self._gender: Literal['Male', 'Female', 'Other'] = gender

    @property
    def reputation(self) -> int:
        return self._reputation

    @property
    def birthday(self) -> datetime:
        return self._birthday

    @property
    def history(self) -> list[Group]:
        return self._history

    @property
    def activities(self) -> list[Activity]:
        return self._activities

    @property
    def gender(self) -> str:
        return self._gender

    def get_history(self):
        return

    def get_activities(self):
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
