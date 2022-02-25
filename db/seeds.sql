INSERT INTO departments (name)
VALUES
  ('Accounting'),
  ('Sales'),
  ('C-Suite');

INSERT INTO roles (title,salary,department_id)
VALUES 
    ('Accountant I', '50,000','1'),
    ('Account Manager', '30,000', '2'),
    ('Vice President, Sales', '85,000', '3');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 2, 2),
  ('Piers', 'Gaveston', 2, 2),
  ('Charles', 'LeRoi', 3, 3);
