from server.Activity import Activity


class ActivityList:
    _activities: list[Activity] = [
        Activity("Call of Duty: Warzone", alias="COD", type="Video Games"),
        Activity("Counter-Strike: Global Offensive", alias="CSGO", type="Video Games"),
        Activity("Dota 2", type="Video Games"),
        Activity("League of Legends", alias="LoL", type="Video Games"),
        # Not sure about the wording, feel free to alter it
        Activity("Football", type="Team Sports"),
        Activity("Basketball", type="Team Sports"),
        Activity("Movie Viewing", type="Cultural Event"),
        Activity("Concert Attendance", type="Cultural Event"),
        Activity("Dungeons and Dragons", type="Board Games"),
        Activity("Mountain Biking", type="Extreme Sports"),
        Activity("Studying", type="Quiet Activities"),
        # The infamous "Custom Activity"
        Activity("Other", type="Unspecified")
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
