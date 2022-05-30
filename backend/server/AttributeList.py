from server.Attribute import Attribute


class AttributeList:
    class ActivityList:
        _attributes: list[Attribute] = [
            # These values are the SYSTEM LIMITS, not user defined limits!
            Attribute('Gender', ('male', 'female', 'other')),
            Attribute('Experience', ('beginner', 'amateur', 'experienced')),
            Attribute('Equipment', ('none', 'provided', 'byo')), # byo = bring your own
            Attribute('Age', (0, 100)),  # Probably should be a minimum age, for legal stuff
            Attribute('Members', (2, None)),  # None = Anyone can join
            Attribute('Fee', (0, None))
        ]

    def get_attributes(self):
        return
