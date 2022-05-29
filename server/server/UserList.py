from User import User


class UserList:
    users: list[User]

    def get_user(self, user_id: int):
        return

    def get_user_by_friend_code(self, friend_code: int) -> User:
        ...
