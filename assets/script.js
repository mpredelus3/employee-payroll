// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = []
  do {
    employees.push({
      firstName: prompt('What is your first name?'),
      lastName: prompt('What is your last name?'),
      salary: parseInt(prompt('Enter your Salary')),
    })
  } while (confirm("Do you want to add another employee"));
  console.log(employees)
 return employees
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  const total = employeesArray.reduce((prevEmp, currEmp) => prevEmp.salary + currEmp.salary);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${total / employeesArray.length}`)
  console.log(total);
}
// Select a random employee
const getRandomEmployee = function (employeesArray) {

  const rand = Math.floor(Math.random() * employeesArray.length)
  console.log(`Congratulations to ${employeesArray[rand].firstName} ${employeesArray[rand].lastName}, our random drawing winner!`)
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) { //****** */
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);



// function displayAverageSalary(employees) {
//   let totalSalary = 0;
//   employees.forEach(employee => {
//       totalSalary += employee.salary;
//   });

//   const averageSalary = totalSalary / employees.length;
//   console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employees.length} employees.`);
// }


// Sample array of employee objects
// let employees = [
//   { firstName: 'John', lastName: 'Doe', salary: 50000 },
//   { firstName: 'Jane', lastName: 'Smith', salary: 60000 },
//   { firstName: 'Alice', lastName: 'Johnson', salary: 55000 }
// ];

// function getRandomEmployee(employees) {
//   // Generate a random index within the range of the array length
//   const randomIndex = Math.floor(Math.random() * employees.length);

//   // Access the random employee object using the random index
//   const randomEmployee = employees[randomIndex];

//   // Display the details of the random employee to the console
//   console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName} - Salary: $${randomEmployee.salary}`);
// }

// // Call the function to select and display a random employee
// getRandomEmployee(employees);