from Activity import Activity


class ActivityList:
    activities: list[Activity] = [
        Activity("Call of Duty: Warzone", alias="COD"),
        Activity("Counter-Strike: Global Offensive", alias="CSGO"),
        Activity("Dota 2"),
        Activity("League of Legends", alias="LoL"),
    ]

    def get_all(self):
        return self.activities
