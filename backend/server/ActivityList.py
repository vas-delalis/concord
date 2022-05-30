from server.Activity import Activity


class ActivityList:
    _activities: list[Activity] = [
        Activity("Call of Duty: Warzone", attributes=None , alias="COD", type="Video Games"),
        Activity("Counter-Strike: Global Offensive", attributes=None, alias="CSGO", type="Video Games"),
        Activity("Dota 2", attributes=None, type="Video Games"),
        Activity("League of Legends", attributes=None, alias="LoL", type="Video Games"),
        # Not sure about the wording, feel free to alter it
        Activity("Football", attributes=None, type="Team Sports"),
        Activity("Basketball", attributes=None, type="Team Sports"),
        Activity("Movie Viewing", attributes=None, type="Cultural Event"),
        Activity("Concert Attendance", attributes=None, type="Cultural Event"),
        Activity("Dungeons and Dragons", attributes=None, type="Board Games"),
        Activity("Mountain Biking", attributes=None, type="Extreme Sports"),
        Activity("Studying", attributes=None, type="Quiet Activities"),
        # The infamous "Custom Activity"
        Activity("Other", attributes=None, type="Unspecified")
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
