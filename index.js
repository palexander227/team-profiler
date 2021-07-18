import inquirer from "inquirer"
import {managerq, employeeq, internq, engineerq} from "./src/questions.js"
import Employee from "./lib/Employee.js";
import Intern from "./lib/Intern.js";
import Engineer from "./lib/Engineer.js";
import Manager from "./lib/Manager.js";

const allAnswers = {employees:[]}
inquirer.prompt(managerq)
      .then(function(answer){
        allAnswers.manager = answer
        addEmployee()
      })

      const addEmployee = () => {
        inquirer.prompt([
                                    
             {
              name: 'type',
              message: "Would you like add another employee?",
              type: 'list',
              choices:[
                "Engineer", "Intern", "Employee", "No more employees"
              ]
             },
          ])
            .then(function(answer){
              switch(answer.type){
                case "Engineer":{
                  createEngineer()
                }break;

                case "Intern":{
                  createIntern()
                }break;

                case "Employee":{
                  createEmployee()
                }break;

                default:{
                  generateHtml()
                }break;             
              };
            });
      }

      const createEmployee = () => {
        inquirer.prompt(employeeq).then(answer => {
          let temp = new Employee(answer.name, answer.id, answer.email)
          allAnswers.employees.push(temp)
          addEmployee()
        })          
          
        
      }

      const createEngineer = () => {
        inquirer.prompt(employeeq).then(answer => {
          allAnswers.employees.push(answer)
          addEmployee()
        }) 
      }

      const createIntern = () => {
        inquirer.prompt(employeeq).then(answer => {
          allAnswers.employees.push(answer)
          addEmployee()
        }) 
      }

      const generateHtml = () => {
        console.log(allAnswers)
      }