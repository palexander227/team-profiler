
//Need to get the parent class in order to extend. Same for Intern and Manager.
import Employee from "./Employee.js"
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email, "engineer")
        this.github = github
    }

    getGithub(){
        return this.github
    }
}

export default Engineer

// let man = new Engineer("Mr. J", 123, "man@gmail.com", "pa227")
// console.log(man.getEmail())
// console.log(man.getName())
// console.log(man.getId())
// console.log(man.getRole())
// console.log(man.getGithub())