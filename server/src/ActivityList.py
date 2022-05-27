from Activity import Activity


class ActivityList:
    activities: list[Activity] = [
        Activity("Call of Duty: Warzone", alias="COD"),
        Activity("Counter-Strike: Global Offensive", alias="CSGO"),
    ]

    def get_all(self):
        return self.activities
