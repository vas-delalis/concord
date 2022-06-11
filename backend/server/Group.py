from __future__ import annotations
from typing import TypedDict, Literal, TYPE_CHECKING
from server.Activity import Activity

if TYPE_CHECKING:
    from server.User import User


class RequirementsDict(TypedDict):
    fee: float
    min_age: str | None
    max_age: str | None
    genders: str | None
    experience: str | None
    equipment: str | None
    language: str | None


class Group:
    # Fields starting with a _ are private.
    # Class field (shared between all instances)
    _next_id: int = 0
    _groups = []  # TODO: Delete this, connect to DB instead

    @classmethod
    def get_active(cls, user_data, sort: Literal["recommended"] = "recommended"):
        return cls._groups

    # "str | None" is called a union type and it means "string, but optional"
    def __init__(
        self,
        activity: Activity,
        owner: User,
        title: str,
        requirements: RequirementsDict,
        max_members: int | None = None,
    ):
        # Instance fields (unique to each instance)
        self.id: int = Group._next_id
        self._owner: User = owner
        self._members: list[User] = [owner]
        self._moderators: list[User] = []
        self.title: str = title
        self.max_members: int = max_members
        self._activity: Activity = activity
        self._is_complete: bool = False
        self._requirements: RequirementsDict = requirements
        Group._next_id += 1

    @property
    def owner(self) -> User:
        return self._owner

    @property
    def members(self) -> list[User]:
        return self._members

    @property
    def moderators(self) -> list[User]:
        return self._moderators

    @property
    def activity(self) -> Activity:
        return self._activity
    
    @property
    def is_complete(self) -> bool:
        return self._is_complete

    @property
    def requirements(self) -> RequirementsDict:
        return self._requirements

    def get_activity(self) -> Activity:
        return self._activity

    def mark_as_complete(self) -> None:
        # Do other things, e.g. trigger commend notification
        self._is_complete = True

    def add_member(self, user: User) -> None:
        self._members.append(user)

    def remove_member(self, user: User) -> None:
        self._members.remove(user)

    def get_members(self) -> list[User]:
        return self._members.copy()

    def get_details(self) -> dict:
        ...
