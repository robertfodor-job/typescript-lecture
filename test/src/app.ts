// class Department {
//   public name: string;
//   private employees: string[] = [];

//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(this: Department) {
//     console.log('Department: ' + this.name);
//   }

//   addEmployee(employee: string) {
//     // validation etc
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// const accounting = new Department('Accounting');

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// // accounting.employees[2] = 'Anna';

// accounting.describe();
// accounting.name = 'NEW NAME';
// accounting.printEmployeeInformation();

// // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// // accountingCopy.describe();

class Department {
  // name: string;
  // id: string;
  private employees: string[] = [];

  // this constructor is shortcut for double initialization
  constructor(private name: string, public id: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log("Department: " + this.name + this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addEmployee("Dude");

accounting.describe();
accounting.printEmployeeInformation();
