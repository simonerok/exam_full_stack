USE projectsdb;

-- -----------------------------------------------------
-- Table projectsdb.projects
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS projects (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NULL,
  img_url VARCHAR(255) NULL, -- Store the image URL
  PRIMARY KEY (id)
);

-- -----------------------------------------------------
-- Table projectsdb.tags
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS tags (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- -----------------------------------------------------
-- Table projectsdb.projects_has_tags
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS projects_has_tags (
  projects_id INT NOT NULL,
  tags_id INT NOT NULL,
  PRIMARY KEY (projects_id, tags_id),
  INDEX fk_projects_has_tags_tags1_idx (tags_id ASC) VISIBLE,
  INDEX fk_projects_has_tags_projects1_idx (projects_id ASC) VISIBLE,
  CONSTRAINT fk_projects_has_tags_projects1
    FOREIGN KEY (projects_id)
    REFERENCES projects (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_projects_has_tags_tags1
    FOREIGN KEY (tags_id)
    REFERENCES tags (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
