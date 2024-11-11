DROP DATABASE IF EXISTS projectsdb;
CREATE DATABASE projectsdb;

SOURCE /docker-entrypoint-initdb.d/db-create.sql;
SOURCE /docker-entrypoint-initdb.d/db-insert.sql;
SOURCE /docker-entrypoint-initdb.d/db-update-image-urls.sql;