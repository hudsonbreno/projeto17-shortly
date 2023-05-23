
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

CREATE TABLE "urls" (
    "id" SERIAL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "visitCount" INT DEFAULT 0,
    "shortUrl" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

CREATE TABLE "session" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INT NOT NULL
);