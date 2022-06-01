PRAGMA foreign_keys = ON; 
PRAGMA encoding="UTF-8";

BEGIN TRANSACTION;

DROP TABLE IF EXISTS "USER";
CREATE TABLE IF NOT EXISTS "USER" (
    "user_id" integer NOT NULL,
    "username" varchar(255) NOT NULL,
    "email" varchar(255),
    "firstname" varchar(255),
    "lastname" varchar(255),
    "birthday" date,
    "password" varchar(255),
    "gender" varchar(255),
    PRIMARY KEY("user_id"),
    UNIQUE("username"),
    UNIQUE("email")
);

DROP TABLE IF EXISTS "ACTIVITY";
CREATE TABLE IF NOT EXISTS "ACTIVITY" (
    "activity_id" integer NOT NULL,
    "activity_title" varchar(255),
    "category" varchar(255),
    "alias" varchar(255),
    PRIMARY KEY("activity_id"),
    UNIQUE("activity_title")
);

DROP TABLE IF EXISTS "GROUP";
CREATE TABLE IF NOT EXISTS "GROUP" (
    "group_id" integer NOT NULL,
    "group_title" varchar(255) NOT NULL,
    "max_members" integer,
    "language" varchar(255),
    "is_complete" boolean,
    "owner_id" integer,
    "activity_id" integer,
    "genders" varchar(255),
    "ages" varchar(255),
    "fee" float,
    "experience" varchar(255),
    "equipment" varchar(255),
    CONSTRAINT "GROUP_OWNER_FK" FOREIGN KEY("owner_id") REFERENCES "USER"("user_id") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "GROUP_ACTIVITY_FK" FOREIGN KEY("activity_id") REFERENCES "ACTIVITY"("activity_id") ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY("group_id")
);

DROP TABLE IF EXISTS "COMMENDATION";
CREATE TABLE IF NOT EXISTS "COMMENDATION" (
    "commendator_id" integer NOT NULL,
    "commendatee_id" integer NOT NULL,
    "datetime" datetime NOT NULL,
    CONSTRAINT "COMMENDATION_COMMENDATOR_FK" FOREIGN KEY("commendator_id") REFERENCES "USER"("user_id") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "COMMENDATION_COMMENDATEE_FK" FOREIGN KEY("commendatee_id") REFERENCES "USER"("user_id") ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY("commendator_id", "commendatee_id", "datetime")
);

DROP TABLE IF EXISTS "DIRECT_MESSAGE";
CREATE TABLE IF NOT EXISTS "DIRECT_MESSAGE" (
    "sender_id" integer NOT NULL,
    "reciever_id" integer NOT NULL,
    "datetime" datetime NOT NULL,
    "content" text,
    CONSTRAINT "DM_SENDER_FK" FOREIGN KEY("sender_id") REFERENCES "USER"("user_id") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "DM_RECIEVER_FK" FOREIGN KEY("reciever_id") REFERENCES "USER"("user_id") ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY("sender_id", "reciever_id", "datetime")
);

DROP TABLE IF EXISTS "GROUP_CHAT_MESSAGE";
CREATE TABLE IF NOT EXISTS "GROUP_CHAT_MESSAGE" (
    "sender_id" integer NOT NULL,
    "group_id" integer NOT NULL,
    "datetime" datetime NOT NULL,
    "content" text,
    CONSTRAINT "GCM_SENDER_FK" FOREIGN KEY("sender_id") REFERENCES "USER"("user_id") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "GCM_GROUP_FK" FOREIGN KEY("group_id") REFERENCES "GROUP"("group_id") ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY("sender_id", "group_id", "datetime")
);

DROP TABLE IF EXISTS "MODERATION";
CREATE TABLE IF NOT EXISTS "MODERATION" (
    "mod_id" integer NOT NULL,
    "group_id" integer NOT NULL,
    CONSTRAINT "MODERATION_MOD_FK" FOREIGN KEY("mod_id") REFERENCES "USER"("user_id") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "MODERATION_GROUP_FK" FOREIGN KEY("group_id") REFERENCES "GROUP"("group_id") ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS "PARTICIPATION";
CREATE TABLE IF NOT EXISTS "PARTICIPATION" (
    "user_id" integer NOT NULL,
    "group_id" integer NOT NULL,
    CONSTRAINT "PARTICIPATION_USER_FK" FOREIGN KEY("user_id") REFERENCES "USER"("user_id") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "PARTICIPATION_GROUP_FK" FOREIGN KEY("group_id") REFERENCES "GROUP"("group_id") ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS "ACTIVITY_PREFERENCE";
CREATE TABLE IF NOT EXISTS "ACTIVITY_PREFERENCE" (
    "user_id" integer NOT NULL,
    "activity_id" integer NOT NULL,
    CONSTRAINT "ACTPREF_USER_FK" FOREIGN KEY("user_id") REFERENCES "USER"("user_id") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "ACTPREF_ACTIVITY_FK" FOREIGN KEY("activity_id") REFERENCES "ACTIVITY"("activity_id") ON UPDATE CASCADE ON DELETE CASCADE
);



COMMIT;