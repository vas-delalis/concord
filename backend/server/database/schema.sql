PRAGMA foreign_keys = ON;
PRAGMA encoding = "UTF-8";

BEGIN TRANSACTION;

DROP TABLE IF EXISTS "user";
CREATE TABLE IF NOT EXISTS "user" (
    "username" text,
    "email" text NOT NULL,
    "real_name" text,
    "birthday" text,
    "password" text NOT NULL,
    "gender" text,
    "reputation" integer DEFAULT 0,
    PRIMARY KEY("username"),
    UNIQUE("email")
);

DROP TABLE IF EXISTS "activity";
CREATE TABLE IF NOT EXISTS "activity" (
    "id" integer,
    "title" text,
    "category" text,
    "alias" text,
    PRIMARY KEY("id"),
    UNIQUE("title")
);

DROP TABLE IF EXISTS "group";
CREATE TABLE IF NOT EXISTS "group" (
    "id" integer NOT NULL,
    "title" text NOT NULL,
    "max_members" integer,
    "language" text,
    "is_complete" boolean NOT NULL,
    "owner" text NOT NULL,
    "activity_id" integer NOT NULL,
    "genders" text,
    "min_age" integer,
    "max_age" integer,
    "fee" float,
    "experience" text,
    "equipment" text,
    CONSTRAINT "GROUP_OWNER_FK" FOREIGN KEY("owner") REFERENCES "user"("username") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "GROUP_ACTIVITY_FK" FOREIGN KEY("activity_id") REFERENCES "activity"("id") ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY("id")
);

DROP TABLE IF EXISTS "commendation";
CREATE TABLE IF NOT EXISTS "commendation" (
    "commender" text NOT NULL,
    "recipient" text NOT NULL,
    "datetime" text NOT NULL,
    CONSTRAINT "COMMENDATION_COMMENDER_FK" FOREIGN KEY("commender") REFERENCES "user"("username") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "COMMENDATION_RECIPIENT_FK" FOREIGN KEY("recipient") REFERENCES "user"("username") ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY("commender", "recipient", "datetime")
);

DROP TABLE IF EXISTS "";
CREATE TABLE IF NOT EXISTS "direct_message" (
    "sender" text NOT NULL,
    "recipient" text NOT NULL,
    "datetime" text NOT NULL,
    "content" text,
    CONSTRAINT "DM_SENDER_FK" FOREIGN KEY("sender") REFERENCES "user"("username") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "DM_RECIPIENT_FK" FOREIGN KEY("recipient") REFERENCES "user"("username") ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY("sender", "recipient", "datetime")
);

DROP TABLE IF EXISTS "group_message";
CREATE TABLE IF NOT EXISTS "GROUP_CHAT_MESSAGE" (
    "sender" text NOT NULL,
    "group_id" integer NOT NULL,
    "datetime" text NOT NULL,
    "content" text,
    CONSTRAINT "GCM_SENDER_FK" FOREIGN KEY("sender") REFERENCES "user"("username") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "GCM_GROUP_FK" FOREIGN KEY("group_id") REFERENCES "group"("id") ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY("sender", "group_id", "datetime")
);

DROP TABLE IF EXISTS "user_participation";
CREATE TABLE IF NOT EXISTS "user_participation" (
    "user" text NOT NULL,
    "group_id" integer NOT NULL,
    "is_moderator" boolean,
    CONSTRAINT "PARTICIPATION_USER_FK" FOREIGN KEY("user") REFERENCES "user"("username") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "PARTICIPATION_GROUP_FK" FOREIGN KEY("group_id") REFERENCES "group"("id") ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS "user_preference";
CREATE TABLE IF NOT EXISTS "user_preference" (
    "user" text NOT NULL,
    "activity_id" integer NOT NULL,
    CONSTRAINT "ACTPREF_USER_FK" FOREIGN KEY("user") REFERENCES "user"("username") ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT "ACTPREF_ACTIVITY_FK" FOREIGN KEY("activity_id") REFERENCES "activity"("id") ON UPDATE CASCADE ON DELETE CASCADE
);

COMMIT;