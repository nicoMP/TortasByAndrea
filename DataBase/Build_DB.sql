CREATE TABLE Users (
	userId uuid default gen_random_uuid() PRIMARY KEY,
	isAdmin boolean default true not null,
	userName text not null,
	password text not null
);
CREATE TABLE Images (
	imgname text PRIMARY KEY,
	tags text [],
	orientation CHAR(1) NOT NULL,
	img bytea NOT NULL
);