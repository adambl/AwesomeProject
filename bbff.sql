BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "leagues" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL UNIQUE,
	"sport_id"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "sports" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "teams" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"logo"	BLOB,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "teams_leagues" (
	"team_id"	INTEGER NOT NULL,
	"league_id"	INTEGER NOT NULL,
	PRIMARY KEY("team_id","league_id"),
	FOREIGN KEY("league_id") REFERENCES "leagues"("id"),
	FOREIGN KEY("team_id") REFERENCES "teams"("id")
);
CREATE TABLE IF NOT EXISTS "conferences" (
	"id"	INTEGER NOT NULL UNIQUE,
	"league_id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("league_id") REFERENCES "leagues"("id")
);
CREATE TABLE IF NOT EXISTS "teams_conferences" (
	"team_id"	INTEGER NOT NULL,
	"conference_id"	INTEGER NOT NULL,
	PRIMARY KEY("team_id","conference_id"),
	FOREIGN KEY("conference_id") REFERENCES "conferences"("id"),
	FOREIGN KEY("team_id") REFERENCES "conferences"("id")
);
CREATE TABLE IF NOT EXISTS "league_phase_stages" (
	"id"	INTEGER NOT NULL UNIQUE,
	"league_phase_id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	"order"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "league_phases" (
	"id"	INTEGER,
	"league_id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	"order"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("league_id") REFERENCES "leagues"("id")
);
INSERT INTO "leagues" ("id","name","sport_id") VALUES (1,'NBA',1);
INSERT INTO "sports" ("id","name") VALUES (1,'Basketball');
INSERT INTO "teams" ("id","name","logo") VALUES (1,'Utah Jazz',NULL);
INSERT INTO "conferences" ("id","league_id","name") VALUES (1,1,'East'),
 (2,1,'West');
INSERT INTO "league_phase_stages" ("id","league_phase_id","name","order") VALUES (1,3,'Conference Quarter Finals',1),
 (2,3,'Conference Semi-Finals',2),
 (3,3,'Conference Finals',3),
 (4,3,'Finals',4),
 (5,2,'First Game',1),
 (6,2,'8th Seed Battle',2),
 (7,1,'Ranking Games',1);
INSERT INTO "league_phases" ("id","league_id","name","order") VALUES (1,1,'Regular Season',1),
 (2,1,'Play-In',2),
 (3,1,'Playoffs',3);
COMMIT;
