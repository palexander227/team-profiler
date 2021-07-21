// import employees from "../index.js"
import * as fs from "fs"
const formatted = (emp) => {
  let empArr = emp
    .map((e) => {
      let icon = null;
      switch (e.role.toLowerCase()) {
        case "employee":
          {
            icon = "<i style='font-size:2rem' class='bi bi-person-badge'></i>";
          }
          break;
        case "engineer":
          {
            icon = "<i style='font-size:2rem' class='bi bi-code-slash'></i>";
          }
          break;
        case "intern":
          {
            icon = "<i style='font-size:2rem' class='bi bi-emoji-sunglasses'></i>";
          }
          break;
        default: {
          icon = "<i style='font-size:2rem' class='bi bi-vector-pen'></i>";
        }
      }

      let extra = null;
      switch (e.role.toLowerCase()) {
        case "manager":
          {
            extra = `<div class='p-2'> Office: ${e.offnum}</div>`;
          }
          break;
        case "engineer":
          {
            extra = `<div class='p-2'> Github: <a href="github.com/${e.github}">${e.github}</a></div>`;
          }
          break;
        case "intern":
          {
            extra = `<div class='p-2'> School: ${e.school}</div>`;
          }
          break;
        default:
          break;
      }
      //Note: on line 29 the conditional rendering of 'extra' is required if 'extra' returns null
      return `<div class="card m-3 shadow" style="width: 25rem;">
        <div class="bg-primary p-2 w-100 text-light d-flex justify-content-between text-capitalize"><h2>${
          e.role
        }</h2>${icon}</div>
        <div class="card-body">
        <h5 class="card-title">${e.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Id: ${e.id}</h6>
        <div class="p-2"> Email: <a href="${e.email}">${e.email}</a></div>
        ${extra ? extra : ""} 
        </div>
    </div>`;
    })
    .join("");

    
  let str = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </head>
  
  <body>
      <div class="bg-danger p-4 text-center w-100 text-light"><h1>My Team</h1></div>
      <div class="d-flex flex-wrap justify-content-center">
    
          ${empArr}   
              
      </div>
      
  </body>
  </html> `;
  return str
};

const createHtml = (employees) => {

fs.writeFile("test.html", formatted(employees), (err) => {
  if (err) {
    return console.log(`There was an error writing the file: ${err}`);
  }
  console.log("The file was saved.");
})
};

export default createHtml