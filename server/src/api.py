from fastapi import FastAPI
from ActivityList import ActivityList

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello world"}


@app.get("/activities")
async def get_activities():
    activity_list = ActivityList()
    return activity_list.get_all()
