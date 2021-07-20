import Employee from "../lib/Employee";

describe("Employee", () => {
    test("Is an instance of itself", () => {
        expect(new Employee("PA", 123, "ex@gmail.com")).toBeInstanceOf(Employee)
    });

    test("Is default role Employee?", () => {
        const emp = new Employee("PA", 123, "ex@gmail.com");
        expect(emp.getRole() ).toBe("Employee");
    });

    test("Is the email returned the same?", () => {
        const emp = new Employee("PA", 123, "ex@gmail.com");
        expect(emp.getEmail() ).toBe("ex@gmail.com");
    });
   
       
} )


