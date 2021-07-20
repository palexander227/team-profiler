import Intern from "../lib/Intern";

describe("Intern" , () => {
//     test("Is Intern an instance of Employee", () => {
//         expect(new Intern("PA", 123, "ex@gmail.com", "Berkeley")).toBeInstanceOf(Employee)
//     });
// This should work but there is a problem with jest https://github.com/facebook/jest/issues/6788
    
   
    test("Is the github returned the same?", () => {
        const emp = new Intern("PA", 123, "ex@gmail.com", "Berkeley");
        expect(emp.getSchool() ).toBe("Berkeley");
    });
   
       
} )