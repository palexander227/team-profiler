import Employee from "./Employee.js"
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email, "manager")
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber
    }
}

export default Manager

// let man = new Manager("Mr. J", 123, "man@gmail.com", 20)
// console.log(man.getEmail())
// console.log(man.getName())
// console.log(man.getId())
// console.log(man.getRole())
// console.log(man.getOfficeNumber())