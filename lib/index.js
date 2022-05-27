const db = require("../db/connection");
const cTable = require('console.table');
const inquirer = require("inquirer");
const { process_params } = require("express/lib/router");



// inquirer prompts
const menuOptions = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit"
      ]
    }
  ])

  .then(answers => {
    const nextPrompt = answers.toDo;
    if (nextPrompt === "View all departments") {
       viewDepartments();
      };
    
    if (nextPrompt === "View all roles") {
      viewRoles();
    };
    
    if (nextPrompt === "View all employees") {
      viewEmployees();
    };
    
    if (nextPrompt === "Add a department") {
      addDepartment();
    };
    
    if (nextPrompt === "Add a role") {
      addRole();
    };
    
    if (nextPrompt === "Add an employee") {
      addEmployee();
    };
    
    if (nextPrompt === "Update an employee role") {
      updateEmployeeRole();
    };
    
    if (nextPrompt === "Exit") {
      process.exit();
    };
  })
};
  
const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      name: "addDepartment",
      message: "What is the name of the new department?",
      validate: nameInput => {
        if (nameInput){
          return true;
        }else{
          console.log("You must enter a deparment name.");
          return false;
        };
      }
    })
    .then((answer) => {
      dbConnection.query("INSERT INTO department (name) VALUES (?);", answer.addDepartment);
      viewDepartments();
    });
};

const addRole = () => {
  inquirer.prompt([
    {
      type:"input",
      name:"role",
      message:"What is the name of your new role?",
    },
    {
    type: "input",
    name: "salary",
    message: "What is the salary of the role?",   
    },
  ])
  .then (answer => {
    const params = [answer.title, answer.salary];
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
      if (err) {
        throw err;
      }
      const departments = rows.map(({name, id}) => ({name: name, value: id}));
      inquirer.prompt([
        {
          type: "list",
          name: "department",
          message: "What department does this role belong to?",
          choices: departments
        }
      ])
      .then(departmentAnswer => {
        const department = departmentAnswer.department;
        params.push(department);
        const sql = `INSERT INTO roles (title, salary, department_id)
          VALUES (?, ?, ?)`;
        db.query(sql, params, (err) => {
          if (err) {
            throw err;
          }
          console.log("Role added!");
          return viewRoles();
        });
      });
    });
  });
};

const addEmployee = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "fName",
      message: "What is the employees first name?",
    },
    {
      type: "input",
      name: "lName",
      message: "What is the employees last name?",
    },
  ])
  .then (answer => {
    const name = [anser.lName, answer.fName];
    const sql = `SELECT FROM roles`;
  })
}