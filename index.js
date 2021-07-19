import inquirer from "inquirer"
// import question arrays as object
import {managerq, employeeq, internq, engineerq} from "./src/questions.js"
// import classes for use in question routines
import Employee from "./lib/Employee.js";
import Intern from "./lib/Intern.js";
import Engineer from "./lib/Engineer.js";
import Manager from "./lib/Manager.js";
// 'employees' initialized as an empty array
const employees = [] 
/* Assuming either the Manager is setting up the team, or administrative staff
 sets up the Manager's data first AND there is only one Manager per team.
 This next step could be turned into a function 'addManager' if there were
 more 'Managers' required in the case of large teams.*/

 // Note: the 'managerq' question set is loaded into the prompt
inquirer.prompt(managerq)
      .then(function(answer){
        // Instantiate an instance of class 'Manager', assign it to a 'temp' holding variable
        let temp = new Manager(answer.name, answer.id, answer.email, answer.office) 
        let name = temp.getName()
        let id = temp.getId()
        let email = temp.getEmail()
        let role = temp.getRole()
        let offnum = temp.getOfficeNumber()      
        // 'push' Manager data to the empty array as object
        employees.push({name, id, email, role, offnum})
        // Prompt the user for more information; see below.
        addEmployee()
      })
      /* A function which uses inquirer to select options or end the data input process. 
      Note: this is where the heavy work is done. The inquirer prompt here is given an array
      which contains an object specifying for a dropdown list. That list appears as the array
      'choices'. Once the user selects from the list, the response is held in 'type'. 
      The 'then' function of the 'answer' parameter can be provided with a 'switch cases' routine
      to select the correct 'next' step based on the users input --- this is extracted from the 'type'
      pointer by 'answer.type' */
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
          ]) // Depending on the selection of one of the above choices, run one of the following functions:
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
                // If "No more employees" is selected, the default will be triggered and the page rendered.
                default:{
                  generateHtml()
                }break;             
              };
            });
      }
      // Helper functions which create various 'types' of employees for use above.
      const createEmployee = () => {
        inquirer.prompt(employeeq).then(answer => {
          // Note: 'role' is not specified upon instantiation since 'employee' is the default.
          // (Constructor uses default if the parameter is not provided.)
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