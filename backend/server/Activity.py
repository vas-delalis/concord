from typing import Optional


class Activity:
    _next_id: int = 0
    _activities = []  # TODO: delete this, connect to DB instead

    @classmethod
    def get(cls, activity_id: int) -> "Activity":
        ...  # <-- This is actually valid Python

    @classmethod
    def get_all(cls):
        ...

    @classmethod
    def search(cls, query: str) -> list["Activity"]:
        return [
            activity
            for activity in cls._activities
            if activity.name.lower().startswith(query.lower())
            or activity.alias.lower().startswith(query.lower())
        ]

    # Pydantic refuses to work with str | None = None (known issue)
    def __init__(self, name: str, category: str, alias: Optional[str] = None):
        self.id = Activity._next_id
        Activity._next_id += 1
        self.name = name
        self.alias = alias
        self.category = category

    def __repr__(self) -> str:
        return f"<Activity {self.id}: {self.name}>"
