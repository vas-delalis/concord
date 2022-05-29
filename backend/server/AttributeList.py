from server.Attribute import Attribute
class AttributeList:
    class ActivityList:
        _attributes: list[Attribute] = [
            Attribute('Gender', ('male', 'female', 'other'))
        ]

    def get_attributes(self):
        return
