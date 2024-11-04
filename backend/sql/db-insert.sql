USE `projects_db`;

-- Insert realistic projects
INSERT INTO `projects` (`name`, `description`, `img_url`)
VALUES
('E-commerce Platform', 'A comprehensive e-commerce platform for online shopping.', 'ecommerce.jpg'),
('WordPress Projects', 'A collection of WordPress projects and themes.', 'wordpress.jpg'),
('Booking Site', 'A user-friendly booking site for various services.', 'booking.jpg');

-- Insert tags
INSERT INTO `tags` (`name`)
VALUES
('Web Development'),
('E-commerce'),
('WordPress'),
('Booking'),
('Services');

-- Associate projects with tags
INSERT INTO `projects_has_tags` (`projects_id`, `tags_id`)
VALUES
(1, 1), -- E-commerce Platform -> Web Development
(1, 2), -- E-commerce Platform -> E-commerce
(2, 1), -- WordPress Projects -> Web Development
(2, 3), -- WordPress Projects -> WordPress
(3, 1), -- Booking Site -> Web Development
(3, 4), -- Booking Site -> Booking
(3, 5); -- Booking Site -> Services