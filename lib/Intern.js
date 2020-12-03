// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Intern extends Employee{
    constructor(name,id,email,school){
        const role = 'Intern'
        const name = name
        const id = id
        const email = email 

        super(role,name,id,email)

        this.school = school
    }

    getSchool(){
        return this.school
    }
}