// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Engineer extends Employee{
    constructor(name,id,email,github){
        const role = 'Engineer'
        const name = name
        const id = id
        const email = email

        super(role,name,id,email)

        this.gitHub = github
    }

    getGithub(){
        return this.gitHub
    }
}