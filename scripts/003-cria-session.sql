CREATE TABLE "session" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INT NOT NULL
);