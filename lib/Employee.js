  class Employee {

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

export default Employee

// let PA = new Employee("PA", 123, "pa@gmail.com")
// console.log(PA.getEmail())
// console.log(PA.getName())
// console.log(PA.getId())
// console.log(PA.getRole())