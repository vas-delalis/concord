class Activity:
    _next_id: int = 0

    def __init__(self, name: str, alias: str | None = None):
        self.id = self._next_id
        Activity._next_id += 1
        self.name = name
        self.alias = alias

    def __repr__(self) -> str:
        return f"<Activity {self.id}: {self.name}>"
