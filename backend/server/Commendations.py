from datetime import datetime, timedelta
from server.User import User


class Commendations:
    _commendations: list = []  # This will be retrieved from and kept in sync with the DB
    _commendation_timeout_days = 7

    def commend(self, commender: User, recipient: User) -> None:
        if self.commendation_exists(commender, recipient):
            return

        recipient.increase_reputation(1)
        self._commendations.append(
            {"commender": commender, "recipient": recipient, "timestamp": datetime}
        )

    def commendation_exists(self, commender: User, recipient: User) -> bool:
        """Return True if the commender has commended the recipient recently."""
        for commendation in self._commendations:
            if (
                commendation["commender"] == commender
                and commendation["recipient"] == recipient
                and datetime.now() - commendation["timestamp"]
                < timedelta(days=self._commendation_timeout_days)
            ):
                return True
        return False
