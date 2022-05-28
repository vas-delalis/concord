from fastapi import FastAPI
from ActivityList import ActivityList
from GroupList import GroupList
import schemas

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello world"}


@app.get("/activities")
async def get_activities():
    activity_list = ActivityList()
    return activity_list.get_all()


@app.get("/groups/", response_model=list[schemas.Group])
async def get_groups():
    group_list = GroupList()
    return group_list.get_active(None, "recommended")
