USE cndb_main;

CREATE TABLE IF NOT EXISTS team_member (
    id INT AUTO_INCREMENT,
    full_name VARCHAR(256) NOT NULL,
    position VARCHAR(256),
    PRIMARY KEY(id)
)character set = utf8mb4;