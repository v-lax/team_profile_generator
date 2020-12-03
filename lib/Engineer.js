// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Engineer extends Employee{
    constructor(engineerName,engineerId,engineerEmail,github){
        const role = 'Engineer'
        const name = engineerName
        const id = engineerId
        const email = engineerEmail

        super(role,name,id,email)

        this.gitHub = github
    }

    getGithub(){
        return this.gitHub
    }
}

module.exports = Engineer