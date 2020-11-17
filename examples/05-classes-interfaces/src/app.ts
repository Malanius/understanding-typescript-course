class Department {
  //   private id: string;
  //   private name: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];

  // Shorthand init
  constructor(private readonly id: string, private name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

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
  private lastReport: string;

  get latestReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }

  set latestReport(value: string) {
    if (!value) {
      throw new Error("No value specified!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Malanius") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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
accounting.latestReport = "EOY report";
accounting.addReport("Something went wrong...");
console.log(accounting.latestReport);
accounting.printReports();

accounting.addEmployee("Malanius");
accounting.addEmployee("Lindal");
accounting.printEmployees();

const employee1 = Department.createEmployee("Rula");
console.log(employee1);
console.log(Department.fiscalYear);
