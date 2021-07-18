import Employee from "../lib/Employee";

describe("Employee", () => {
    test("Is an instance of itself", () => {

        expect(new Employee("PA", 123, "ex@gmail.com")).toBeInstanceOf(Employee)
    })
} )


