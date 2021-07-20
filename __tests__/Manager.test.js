import Manager from "../lib/Manager";

describe("Manager" , () => {
//     test("Is Manager an instance of Employee", () => {
//         expect(new Manager("PA", 123, "ex@gmail.com", 27)).toBeInstanceOf(Employee)
//     });
// This should work but there is a problem with jest https://github.com/facebook/jest/issues/6788
    
   
    test("Is the manager's office  returned the same?", () => {
        const emp = new Manager("PA", 123, "ex@gmail.com", 327);
        expect(emp.getOfficeNumber() ).toBe(327);
    });
   
       
} )