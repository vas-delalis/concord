from datetime import datetime
from server.User import User


class Commendations:
    commendationsList = None

    def log_commendation(self, commender: User, recipient: User, datetime: datetime):
        return

    def commend(self, commender: User, recipient: User, datetime: datetime):
        return

    def commendation_exists(self, commender: User, recipient: User) -> bool:
        ...
