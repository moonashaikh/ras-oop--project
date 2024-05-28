#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


class Student{
    name : string
    constructor (n:string) {
        this.name = n
    }
}

class Person {
 students : Student[]= []

 addStudent(obj:Student){
    this.students.push(obj)
 }
}
const persons = new Person()
// console.log(persons)

const programStart = async(persons:Person) => {
do {
    console.log(chalk.bold.blue("\n\n**********WELCOM GUEST******** \n"));
    const ans = await inquirer.prompt({
         type : "list",
         message :"Ap Kis sy bat krna pasand karaigy------ ",
         name:"select" ,
         choices : ["staff "  , "student","Exit"]
    })

    if(ans.select == "staff "){
        console.log(chalk.bold.blue("you approach the staff room , please free to ask any question"));
        // console.log("meri tabyat achi hai")

    }else if(ans.select == "student"){
        const ans = await inquirer.prompt({
            type : "input",
            message :"Enter the Student's Name you wish to engage ",
            name:"student" ,
           
       });
       const student = persons.students.find(val=> val.name == ans.student)
       if(!student){
        const name = new Student(ans.student)
        persons.addStudent(name)
        console.log(chalk.bold.red(`Hello I am ${name.name} , or mai teek hun`));
        console.log(chalk.bold.blue("New student Edit"));
        console.log(chalk.bold.blue("current student list"));
        console.log(persons.students)
           }  else{
            console.log(chalk.bold.magenta(`Hello I am ${student.name} , Nice to meet you again`))
            
            console.log(chalk.bold.yellowBright("Exisisting Student"))
            console.log(persons.students)
           }
        
       
        } else if(ans.select == "Exit"){ 
            console.log(chalk.bold.yellowBright("exit the program"));
            process.exit()
        }
      
}while(true) 

}

programStart(persons)
