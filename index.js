import inquirer from "inquirer"
import {managerq, employeeq, internq, engineerq} from "./src/questions.js"
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
        inquirer.prompt(employeeq).then(answer => allAnswers.employees.push(answer))
        console.log(allAnswers)
      }

      const createEngineer = () => {
        console.log("creating engineer")
      }

      const createIntern = () => {
        console.log("creating intern")
      }

      const generateHtml = () => {
        console.log("creating HTML")
      }