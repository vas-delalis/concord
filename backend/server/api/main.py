from fastapi import FastAPI
from server.ActivityList import ActivityList
from server.GroupList import GroupList
from server.User import User
from server import schemas

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello world"}


@app.get("/users/{username}", response_model=schemas.UserBase)
async def get_users(username: str):
    return User.from_username(username)


@app.post("/users/{username}", status_code=200)
async def test(username: str):
    user = User.from_username(username)
    user.increase_reputation(1)
    user.save()


@app.get("/activities")
async def get_activities():
    print(ActivityList().get_all())
    return ActivityList().get_all()


@app.get("/groups/", response_model=list[schemas.Group])
async def get_groups():
    groups = GroupList().get_active(None, "recommended")
    for group in groups:
        group.activity = group.get_activity()
        group.member_count = len(group.get_members())
    return groups
