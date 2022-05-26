USE company;
INSERT INTO departments (name)
VALUES
 ("Sales"),
 ("Engineering"),
 ("Finance"),
 ("Legal");

-- Seeded role info
INSERT INTO roles (title, salary, departmentID)
VALUES 
("Sales Lead", 100000, 1), 
("Salesperson", 8000, 1), 
("Lead Engineer", 150000, 2), 
("Web Developer", 25000, 2),
("Software Engineer", 120000, 2), 
("Accountant", 125000, 3), 
("Legal Team Lead", 25000, 4), 
("Lawyer", 190000, 4);

-- Seeded employee info 
INSERT INTO employees (lastName, firstName, roleID)
VALUES 
("Denver", "John", 1), 
("Patel", "Fernando", 2), 
("Breig", "Erica", 3),
("Swanson", "Ron", 4), 
("Clawfield", "Andrew", 5), 
("Delphine", "Bell", 6), 
("Xavier", "Charles", 7), 
("Dossonson", "Pete", 8), 
("Jones", "Osmosis", 9);