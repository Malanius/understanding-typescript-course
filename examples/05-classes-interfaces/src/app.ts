class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) { //dummy parameter for TS
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = {describe: accounting.describe};
// accountingCopy.describe(); // compilation error as not an instance of Department