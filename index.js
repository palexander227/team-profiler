import inquirer from "inquirer"
import {managerq, employeeq, internq, engineerq} from "./src/questions.js"
import Employee from "./lib/Employee.js";
import Intern from "./lib/Intern.js";
import Engineer from "./lib/Engineer.js";
import Manager from "./lib/Manager.js";

const employees = []
inquirer.prompt(managerq)
      .then(function(answer){
        let temp = new Manager(answer.name, answer.id, answer.email, answer.office)
        let name = temp.getName()
        let id = temp.getId()
        let email = temp.getEmail()
        let role = temp.getRole()
        let offnum = temp.getOfficeNumber()      
       
        employees.push({name, id, email, role, offnum})
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
          let name = temp.getName()
          let id = temp.getId()
          let email = temp.getEmail()
          let role = temp.getRole()      
         
          employees.push({name, id, email, role})
          addEmployee()
        })        
          
        
      }

      const createEngineer = () => {
        inquirer.prompt(engineerq).then(answer => {
          let temp = new Engineer(answer.name, answer.id, answer.email, answer.github)
          let name = temp.getName()
          let id = temp.getId()
          let email = temp.getEmail()
          let role = temp.getRole() 
          let git = temp.getGithub()     
         
          employees.push({name, id, email, role, git})
          addEmployee()
        }) 
      }

      const createIntern = () => {
        inquirer.prompt(internq).then(answer => {
          let temp = new Intern(answer.name, answer.id, answer.email, answer.school)
          let name = temp.getName()
          let id = temp.getId()
          let email = temp.getEmail()
          let role = temp.getRole()
          let school = temp.getSchool()      
         
          employees.push({name, id, email, role, school})
          addEmployee()
        })

      }

      const generateHtml = () => {
        console.log(employees)
      }