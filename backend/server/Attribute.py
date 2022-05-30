from typing import Callable, Any, Container, Collection


class Validator:
    @staticmethod
    def in_range(
        range_min: int | float, range_max: int | float
    ) -> Callable[[int | float], bool]:
        """Return a function that checks if its input is between `range_min` and `range_max` (inclusive)."""

        def validator(x: int | float):
            """Return True if `x` is between `range_min` and `range_max` (inclusive)."""
            return range_min <= x <= range_max

        return validator

    @staticmethod
    def one_of(
        options: Container[str | int | float],
    ) -> Callable[[str | int | float], bool]:
        """Return a function that checks if its input is in `options`."""

        def validator(item: str | int | float) -> bool:
            """Return True if `items` is in of `options`."""
            return item in options

        return validator

    @staticmethod
    def multiple_of(
        options: Collection[str | int | float],
    ) -> Callable[[Collection[str | int | float]], bool]:
        """Return a function that checks if its input is a subset of `options`."""

        def validator(items: Collection[str | int | float]) -> bool:
            """Return True if `items` is a subset of `options`."""
            options_set = set(options)
            items_set = set(items)
            if len(items_set) != len(items):
                return False  # Return False for duplicate values in `items`
            return items_set.issubset(options_set)

        return validator


class Requirements:
    def __init__(self, validators: dict[str, Callable[[Any], bool]]):
        self._validators: dict[str, Callable[[Any], bool]] = validators

    def check(self, attributes: dict[str, Any]) -> bool:
        """Return True if every attribute in `attributes` passes validation."""
        for name in attributes:
            # Could be done with a list comprehension, but this one short-circuits
            value = attributes[name]
            if not self._validators[name](value):
                return False
        return True


class Attribute:
    def __init__(self, name, validator):
        self.name: str = name
        self.validate: Callable[[Any], bool] = validator
        # Transient == not saved to DB == not on user's profile
        # == filter (a concept which only exists on the front-end)
        self.transient: bool = False
        self._value: Any = None

    def set_value(self, new_value):
        if not self.validate(new_value):
            raise ValueError("Attribute value does not pass validation")
        self._value = new_value
