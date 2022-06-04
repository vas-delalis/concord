from typing import Optional

class Activity:
    _next_id: int = 0
    # Pydantic refuses to work with str | None = None (known issue)
    def __init__(self, name: str, type: str, alias: Optional[str] = None):
        self.id = Activity._next_id
        Activity._next_id += 1
        self.name = name
        self.alias = alias
        self.type = type

    def __repr__(self) -> str:
        return f"<Activity {self.id}: {self.name}>"
