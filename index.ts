#! usr/bin/env node

import inquirer from "inquirer"

const currency : any = {
    USD : 1 , //base currency
    EUR :0.91 ,
    GBP :0.76 ,
    INR :74.57 ,
    PKR :280 ,
    
}
let user_answer = await inquirer.prompt([
    
    {  
        type : "list",
        name : "from",
        message : "Choose from currency",
        choices : ["USD","EUR","GBP","INR","PKR"]
    },
     
    {  
        type : "list",
        name : "to",
        message : "Choose to currency",
        choices : ["USD","EUR","GBP","INR","PKR"]
    }, 
    {
        name:"amount" ,
        message : "Enter the amount",
       type:"number"

    }
])

let fromAmount = currency[user_answer.from] ;
let toAmount = currency[user_answer.to]  ;
let amount = user_answer.amount  ;
let baseamount = amount / fromAmount ; 
let convertedAmount = baseamount * toAmount ;

console.log(baseamount) ;


