from __future__ import annotations
from typing import Literal, TYPE_CHECKING
from datetime import datetime
from server.Activity import Activity
from server.database.connect import cursor, connection
from server import schemas

if TYPE_CHECKING:
    from server.Group import Group


class User:
    def __repr__(self) -> str:
        return f"<User: {self._username}>"

    @classmethod
    def from_username(cls, username: str):
        cursor.execute("SELECT * FROM USER WHERE username = ?", (username,))
        user_dict: dict = cursor.fetchone()
        user_dict.update({"birthday": datetime.fromisoformat(user_dict["birthday"])})
        return cls(**user_dict)

    @classmethod
    def from_friend_code(cls):
        ...

    def __init__(
        self,
        *,
        username: str,
        email: str,
        real_name: str | None = None,
        birthday: datetime,
        password: str,
        gender: Literal["Male", "Female", "Other"],
        reputation: int = 0,
    ):
        self._username: str = username
        self._email: str = email
        self._real_name: str = real_name
        self._birthday: datetime = birthday
        self._password: str = password
        self._gender: Literal["Male", "Female", "Other"] = gender
        self._reputation: int = reputation
        self._history: list[Group] = []
        self._activities: list[Activity] = []

    @property
    def username(self) -> str:
        return self._username

    @property
    def email(self) -> str:
        return self._email

    @property
    def real_name(self) -> str:
        return self._real_name

    @property
    def birthday(self) -> datetime:
        return self._birthday

    @property
    def password(self) -> str:
        return self._password

    @property
    def gender(self) -> str:
        return self._gender

    @property
    def reputation(self) -> int:
        return self._reputation

    @property
    def activities(self) -> list[Activity]:
        return self._activities.copy()

    @property
    def history(self) -> list[Group]:
        return self._history.copy()

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

    def save(self):
        """Save this User instance to DB."""
        user_dict = schemas.User.from_orm(self).dict()
        cursor.execute(
            """
            INSERT INTO user VALUES 
                (:username, :email, :real_name, :birthday, :password, :gender, :reputation)
            ON CONFLICT(username) DO UPDATE SET 
                email = excluded.email, real_name = excluded.real_name, birthday = excluded.birthday,
                password = excluded.password, gender = excluded.gender, reputation = excluded.reputation
            """,
            user_dict,
        )

        connection.commit()
