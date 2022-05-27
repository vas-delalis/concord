import string
from xmlrpc.client import boolean
from server.Activity import Activity
from server.User import User
from server.Attribute import Attribute

class Group:
    activity: Activity
    owner: User
    moderators: list
    members: list
    title: string
    isComplete: boolean
    attributes: Attribute

    def markAsComplete():
        return

    def addMember(userid: int):
        return

    def getAttributes():
        return

    def addAttribute(attribute: Attribute):
        return

    def removeAttribute(attribute: Attribute):
        return
    
    def getMembers():
        return