INSERT INTO departments (name)
VALUES
  ('Accounting'),
  ('Sales'),
  ('C-Suite');

INSERT INTO roles (title, salary, department_id)
VALUES 
    ('Accountant I', '50000.00','1'),
    ('Account Manager', '30000.00', '2'),
    ('Vice President, Sales', '85000.00', '3');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 2, 2),
  ('Piers', 'Galveston', 2, 2),
  ('Charles', 'LeRoi', 3, 3);
