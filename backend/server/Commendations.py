from datetime import datetime
from server.User import User


class Commendations:
    commendationsList: list = None

    def log_commendation(self, commender: User, recipient: User, datetime: datetime):
        recipient._commended_by.append(commender)
        # Increace recipient's rep
        recipient._reputation += 1
        # Log commendation
        self.commendationsList.append((commender, recipient, datetime))

    def commend(self, commender: User, recipient: User, datetime: datetime):
        return

    def commendation_exists(self, commender: User, recipient: User) -> bool:
        ...
