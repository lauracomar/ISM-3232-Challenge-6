// Task 1: Create an Employees Array of Employee Objects
const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];// employee array using sample data provided

// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`); // logs employee name 
    employee.shifts.forEach(shifts => {
        console.log(`Shift Day: ${shifts.day}, Shift Time: ${shifts.hours}`) // find employees shift and displays date and time
    });
};

// Task 3: Create a Function to Assign a New Shift
function assignShift(employeeName, day, hours) {
    let employee = employees.find(empl => empl.name === employeeName); // find employee in em ployees array (task 1)
    if (!employee) {
        console.log(`Employee not found`); // error message in case an employee is not found
    };
    let shiftAssigned = employee.shifts.some(shift => shift.day === day); // checking if employee has a shift on that day
    if (shiftAssigned) {
        console.log(`Employee already assigned to a shift on this day`); // display message if employee already has shift on that day 
    }
    else {
        employee.shifts.push({ day: day, hours: hours });
        console.log(`New shift assigned. Employee: ${name}, Day: ${day}, Time: ${hours}`); // display message confirming new shift has been assigned and display shift details
    }; // if employee is available assign new shift to employee
}

//Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName) {
    let employee = employees.find(empl => empl.name === employeeName); // find employee in employee array
    if (!employee) {
        console.log(`Employee not found`); // error message in case an employee is not found
    }
    let totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);
    console.log(`${employeeName} worked ${totalHours} this week.`);
    return totalHours; // calculate total hours and display message with details
}

//Task 5: Create a Function to List Employees with Free Days
function listAvailableEmployees(day) {
    let availableEmployees = employees.filter(employee => // filter-create new array for employees with no shifts on the day
        !employee.shifts.some(shift => shift.day === day) //check if employees have shift on the day, returns employees with no shifts
    );
    if (availableEmployees.lengh === 0) { //if array is empty (lengh === 0) it means no employees are available
        console.log('No employees available');
    }
    else {
        console.log(`The following employees are available ${day}:`);
        availableEmployees.forEach(employee => console.log(employee.name)); // if there are employees available return employees names
    }
}

//test
displayEmployeeShifts(employees[3]); //display Emily's shifts
assignShift('Emily', 'Monday', 3); // assign Emily a monday shift of 3 hours
calculateTotalHours('Emily'); // calculate Emily's total work hours
listAvailableEmployees('Thursday'); // list all employees available on thursdays