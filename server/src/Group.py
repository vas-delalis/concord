from Activity import Activity
from User import User
from Attribute import Attribute


class Group:
    # Fields starting with a _ are private.
    # Class field (shared between all instances)
    _next_id: int = 0

    # "str | None" is called a union type and it means "string, but optional"
    # TODO: create an Enum for languages and use it as a type here
    def __init__(
        self, activity: Activity, owner: User, title: str, language: str | None = None
    ):
        # Instance fields (unique to each instance)
        self.id: int = Group._next_id
        Group._next_id += 1
        self.activity: Activity = activity
        self._owner: User = owner
        self._members: list[User] = [owner]
        self._moderators: list[User] = []
        self.title: str = title
        self._is_complete: bool = False
        self._attributes: list[Attribute]
        self.language = language

    def mark_as_complete(self) -> None:
        # Do other things, e.g. trigger commend notification
        self._is_complete = True

    def add_member(self, user: User) -> None:
        self._members.append(user)

    def get_attributes(self):
        return

    def add_attribute(self, attribute: Attribute):
        return

    def remove_attribute(self, attribute: Attribute):
        return

    def get_members(self) -> list[User]:
        return self._members
