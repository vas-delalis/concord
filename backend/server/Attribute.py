from xmlrpc.client import boolean


class Attribute:
    _next_id: int = 0

    def __init__(self, name, values: tuple):
        self.id = Attribute._next_id
        Attribute._next_id += 1
        self.name = name
        self.values = values

    def __repr__(self) -> str:
        return f"<Activity {self.id}: {self.name}>"