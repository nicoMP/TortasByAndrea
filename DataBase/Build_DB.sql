CREATE TABLE Users (
	userId uuid default gen_random_uuid() unique PRIMARY KEY,
	fname VarChar not null,
	lname VarChar not null,
	isAdmin boolean default false not null,
	email VarChar unique not null,
	phone VarChar(12) unique not null
);
CREATE TABLE Images (
	imgname text PRIMARY KEY,
	tags text [],
	orientation CHAR(1) NOT NULL,
	img bytea NOT NULL
);
CREATE TABLE Login (
	userid uuid PRIMARY KEY REFERENCES Users on DELETE CASCADE,
	hashedpassword VarChar NOT NULL
);