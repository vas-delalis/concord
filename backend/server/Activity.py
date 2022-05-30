from server.Attribute import Attribute


class Activity:
    _next_id: int = 0

    def __init__(self, name: str, type: str, attributes: list[Attribute],alias: str | None = None):
        self.id = Activity._next_id
        Activity._next_id += 1
        self._attributes = attributes
        self.name = name
        self.alias = alias
        self.type = type

    def __repr__(self) -> str:
        return f"<Activity {self.id}: {self.name}>"
