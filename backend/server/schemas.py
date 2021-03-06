from datetime import datetime
from pydantic import BaseModel
from typing import Literal


class Activity(BaseModel):
    id: int
    name: str
    alias: str | None = None

    class Config:
        orm_mode = True


def group_alias(string: str) -> str:
    words = string.split("_")
    return words[0] + "".join(word.capitalize() for word in words[1:])


class Group(BaseModel):
    id: int
    activity: Activity
    title: str
    language: str | None = None
    max_members: int | None
    member_count: int

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        alias_generator = group_alias


class UserBase(BaseModel):
    username: str
    email: str
    birthday: datetime
    reputation: int

    class Config:
        orm_mode = True


class User(UserBase):
    real_name: str | None
    password: str
    gender: Literal["Male", "Female", "Other"]
    reputation: int

