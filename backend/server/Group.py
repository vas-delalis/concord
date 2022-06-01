from typing import TypedDict
from server.Activity import Activity
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

    def user_can_join(self, user: User) -> bool:
        ...  # Check if user attributes match group requirements
