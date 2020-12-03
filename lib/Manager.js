// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Manager extends Employee{
    constructor(managerName,managerId,managerEmail,officeNumber){
        const role = 'Manager';
        const name = managerName;
        const id = managerId;
        const email = managerEmail; 

        super(role,name,id,email)

        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber
    }

}

module.exports = Manager;