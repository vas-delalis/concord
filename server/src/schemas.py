from pydantic import BaseModel

# Schema attributes should use camelCase, unlike Python's usual snake_case


class Activity(BaseModel):
    id: int
    name: str
    alias: str | None = None

    class Config:
        orm_mode = True


class Group(BaseModel):
    id: int
    activity: Activity
    title: str
    language: str | None = None
    totalSlots: int
    freeSlots: int

    class Config:
        orm_mode = True
