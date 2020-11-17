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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT"); //has to be called first
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("it1", ["Malanius"]);

it.addEmployee("Larien");
it.addEmployee("Naerlien");

it.describe();
it.printEmployees();

// possible as by default all is public
// impossible when employees are private
// accounting.employees[2] = 'Masomleyn';

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); // compilation error as not an instance of Department

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Somerhing went wrong...");
accounting.printReports();
