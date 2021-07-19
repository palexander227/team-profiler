  class Employee {
// Defining the parent class. All other classes will extend this.
// Note the 'Employee' is assigned the default 'role' in the case
// no role is supplied. 
    constructor(name, id, email, role){
        this.name = name
        this.id = id
        this.email = email
        this.role = role ? role : "Employee"
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.role
    }
}
// The parent class has to be exported for use defining other classes
// and in the main program. 
export default Employee

// let PA = new Employee("PA", 123, "pa@gmail.com")
// console.log(PA.getEmail())
// console.log(PA.getName())
// console.log(PA.getId())
// console.log(PA.getRole())