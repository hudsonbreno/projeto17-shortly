CREATE TABLE "urls" (
    "id" SERIAL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "visitCount" INT DEFAULT 0,
    "shortUrl" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);