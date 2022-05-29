from fastapi import FastAPI
from server.ActivityList import ActivityList
from server.GroupList import GroupList
import server.api.schemas as schemas

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello world"}


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
