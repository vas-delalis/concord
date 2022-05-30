import string
from server.Activity import Activity
from server.User import User
from server.Attribute import Attribute


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
        max_members: int | None = None,
        language: str
        | None = None,  # TODO: create an Enum for languages and use it as a type here
    ):
        # Instance fields (unique to each instance)
        self.id: int = Group._next_id
        self.max_members: int = max_members
        self.title: str = title
        self.language = language
        self._activity: Activity = activity
        self._owner: User = owner
        self._members: list[User] = [owner]
        self._moderators: list[User] = []
        self._is_complete: bool = False
        self._attributes: list[Attribute]
        Group._next_id += 1

    def get_activity(self) -> Activity:
        return self._activity

    def mark_as_complete(self) -> None:
        # Do other things, e.g. trigger commend notification
        self._is_complete = True

    def add_member(self, user: User) -> None:
        self._members.append(user)

    def get_attributes(self) -> list[Attribute]:
        return self._activity._attributes

    def add_attribute(self, attribute: Attribute) -> None:
        self._activity._attributes.append(attribute)

    def remove_attribute(self, attribute: Attribute) -> None:
        try:
            # This will definately need to be reworked
            # After we talk about attributes
            self._activity._attributes.remove(attribute)
        except ValueError as e:
            # Swap with appropriate dialogue window when implemented
            print(e)
            

    def get_members(self) -> list[User]:
        return self._members
