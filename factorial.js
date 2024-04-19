//function to calculate factorial
function calculateFactorial(number){
    if (number==0 || number==1) {
        return 1;

    } else{
        let factorial =1;
        for(let i=2;i<=number;i++) {
            factorial*=i;

        }
        return factorial;
    }

} 
// prompt user for input 
//let userinput = parseInt(prompt("enter a number to calculate its factorial"));
let userinput = 4;

// call the function to dispaly the result
let result =calculateFactorial(userinput);
console.log("factorial of",userinput,"is",result);



