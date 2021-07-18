import Employee from "./Employee.js"
class Intern extends Employee{
    constructor(name, id, email, school){
        //The parent is being given 'intern' as input for 'role' by the 'super' construction below. 
        super(name, id, email, "intern")
        this.school = school
    }

    getSchool(){
        return this.school
    }
}

export default Intern
// Note: the constructor takes 4 inputs for this particular instantiation of this class. It's last argument is new. 
// let man = new Intern("Mr. J", 123, "man@gmail.com", "Berkeley")
// console.log(man.getEmail())
// console.log(man.getName())
// console.log(man.getId())
// console.log(man.getRole())
// console.log(man.getSchool())