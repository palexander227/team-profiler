import Engineer from "../lib/Engineer";

describe("Engineer" , () => {
//     test("Is Engineer instance of Employee", () => {
//         expect(new Engineer("PA", 123, "ex@gmail.com", "jjw1235")).toBeInstanceOf(Employee)
//     });
// This should work but there is a problem with jest https://github.com/facebook/jest/issues/6788
    
   
    test("Is the github returned the same?", () => {
        const emp = new Engineer("PA", 123, "ex@gmail.com", "jjw1235");
        expect(emp.getGithub() ).toBe("jjw1235");
    });
   
       
} )