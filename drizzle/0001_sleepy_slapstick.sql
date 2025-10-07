CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"password" text
);
--> statement-breakpoint
DROP TABLE "user" CASCADE;