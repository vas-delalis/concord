from typing import Any


class User:
    username: str
    reputation: int
    history: Any
    attributes: list
    activities: list

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
