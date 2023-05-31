CREATE TABLE "session" (
    "id" SERIAL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "userId" INT NOT NULL
);