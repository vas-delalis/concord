from server.Activity import Activity


class ActivityList:
    _activities: list[Activity] = [
        Activity("Call of Duty: Warzone", alias="COD", type="Video Game"),
        Activity("Counter-Strike: Global Offensive", alias="CSGO", type="Video Game"),
        Activity("Dota 2", type="Video Game"),
        Activity("League of Legends", alias="LoL", type="Video Game"),
    ]

    def get(self, activity_id: int) -> Activity:
        ...  # <-- This is actually valid Python

    def search(self, query: str) -> list[Activity]:
        return [
            activity
            for activity in self._activities
            if activity.name.lower().startswith(query.lower())
            or activity.alias.lower().startswith(query.lower())
        ]

    def get_all(self):
        # When returning a private list, remember to pass a copy instead of the original.
        # Otherwise, editing the list you get from this method will edit the original field too,
        # so it wouldn't be private anymore
        return self._activities.copy()
