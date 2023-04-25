CREATE TABLE Users (
	userId uuid default gen_random_uuid() PRIMARY KEY,
	accessLevel smallint not null,
	userName text not null,
	password text not null
);
CREATE TABLE Images (
	imgname text PRIMARY KEY,
	tags text [],
	orientation CHAR(1) NOT NULL,
	img bytea NOT NULL
);