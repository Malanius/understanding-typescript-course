class Department {
  //   private id: string;
  //   private name: string;
  private employees: string[] = [];

  // Shorthand init
  constructor(private readonly id: string, private name: string) {}

  //this is dummy parameter for TS
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2"; // doesn't work with readonly
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Larien");
accounting.addEmployee("Naerlien");

accounting.describe();
accounting.printEmployees();

// possible as by default all is public
// impossible when employees are private
// accounting.employees[2] = 'Masomleyn';

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); // compilation error as not an instance of Department
