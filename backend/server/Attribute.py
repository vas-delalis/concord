class Attribute:
    _next_id: int = 0

    # If the attribute value is represented by a number:
    # values[0] = min_value, values[1] = max_value
    def __init__(self, name, values: tuple):
        self.id = Attribute._next_id
        Attribute._next_id += 1
        self.name = name
        self.values = values

    def __repr__(self) -> str:
        return f"<Activity {self.id}: {self.name}>"