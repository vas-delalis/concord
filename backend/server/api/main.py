from fastapi import FastAPI
from server.Activity import Activity
from server.Group import Group
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
    print(Activity.get_all())
    return Activity.get_all()


@app.get("/groups/", response_model=list[schemas.Group])
async def get_groups():
    groups = Group.get_active(None, "recommended")
    for group in groups:
        group.activity = group.get_activity()
        group.member_count = len(group.get_members())
    return groups
