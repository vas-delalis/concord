from typing import Callable, Any, Container, Collection, TypedDict

class Requirements:
    class RequirementsDict(TypedDict):
        fee: float
        min_age: str | None
        max_age: str | None
        genders: str | None
        experience: str | None
        equipment: str | None
        languange: str | None

    # def __init__(self):
    #     self._validators: dict[str, Callable[[Any], bool]] = validators

    def check(self, attributes: dict[str, Any]) -> bool:
        """Return True if every attribute in `attributes` passes validation."""
        for name in attributes:
            # Could be done with a list comprehension, but this version short-circuits
            value = attributes[name]
            if not self._validators[name](value):
                return False
        return True
