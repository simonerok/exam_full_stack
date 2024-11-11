USE projectsdb;

UPDATE projects
SET img_url = 'https://source.unsplash.com/random/800x600?ecommerce'
WHERE id = 1;

UPDATE projects
SET img_url = 'https://source.unsplash.com/random/800x600?wordpress'
WHERE id = 2;

UPDATE projects
SET img_url = 'https://source.unsplash.com/random/800x600?booking'
WHERE id = 3;