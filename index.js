/* Your Code Here */

function createEmployeeRecord(employee) {
    let emp = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
    return emp;
}

function createEmployeeRecords(employees) {
    return employees.map((employee) => createEmployeeRecord(employee));
}

function createTimeInEvent(stamp) {
    let [date, hour] = stamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date,
    });
    return this;
}

function createTimeOutEvent(stamp) {
    let [date, hour] = stamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date,
    })
    return this;
}

function hoursWorkedOnDate(stamp) {
    let clockIn = this.timeInEvents.find((timeIn) => timeIn.date == stamp);
    let clockOut = this.timeOutEvents.find((timeOut) => timeOut.date == stamp);
    return (clockOut.hour - clockIn.hour) / 100;
}

function wagesEarnedOnDate(stamp) {
    return hoursWorkedOnDate.call(this, stamp) * this.payPerHour;
}


function fineEmployeeByFirstName(employees, employeeName) {
    return employees.find((employee) => employee.firstName == employeeName)
}

 function calculatePayroll(employees) {
    return employees.reduce((total, employee) => {
       return total + allWagesFor.call(employee);
    }, 0);
 }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}