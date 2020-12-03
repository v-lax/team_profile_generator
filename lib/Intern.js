// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Intern extends Employee{
    constructor(internName,internId,internEmail,school){
        const role = 'Intern'
        const name = internName
        const id = internId
        const email = internEmail 

        super(name,id,email,role)

        this.school = school
    }

    getSchool(){
        return this.school
    }
}

module.exports = Intern