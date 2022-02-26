const express = require('express');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
const cTable = require('console.table');

//adding the express middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const questions = [
        {
            type: 'checkbox',
            name: 'activity',
            message: 'Please select your activity.',
            choices: ['View all departments', 'View all roles', 'Add department', 'Add role', 'Add employee', 'Update employee role']
        },
        {
            type: 'input',
            name: 'addDepartment',
            message: 'What is the department name?',
            when(answers) {
                return answers.activity === 'Add department'
            }
        },
        {
            type: 'input',
            name: 'addRole',
            message: 'What is the role name?',
            when(answers) {
                return answers.activity === 'Add role'
            }
        },
        {
            type: 'input',
            name: 'addEmployee',
            message: 'What is the employee first and last name?',
            when(answers) {
                return answers.activity === 'Add employee'
            }
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: "What is the employee's new role?",
            when(answers) {
            return answers.activity === 'Update employee role'
            }
        }
    ];



//default response if there is an issue, this has to be last or it will override other app.gets
app.use((req, res) => {
    res.status(404).end();
})

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(JSON.stringify(answers))
    });



//startup the server
db.connect(err => {
    if (err) throw err;
    //console.log('Database connection complete!');
    app.listen(PORT, () => {
    //console.log(`Server running on port ${PORT}`);
});
});

