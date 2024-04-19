//sample student grad,es
let studentGrades = [85,90,75,92,88];

//Function to calculate average grade 
function calculateaverage(grades) {
    let sum = 0;
    for(let i=0;i < grades.length;i++) {
        sum += grades[i];

    }
    return sum / grades.length;
}

// function to find highest grade
function highestgrade(grades) {
    let highest=grades[0];
    for(let i=1;i< grades.length;i++){
        if (grades[i]>highest) {
            highest =grades[i];
               }
            
    }
    return  highest
            }

// return highest;

function lowestgrade(grades) {
    let lowest = grades[0];
    for (let i=1;i <grades.length;i++) {
        if (grades[i] <lowest) {
             lowest = grades[i];

        }
    }
    return lowest;

}
let average = calculateaverage(studentGrades);
let highest = highestgrade(studentGrades);
let lowest = lowestgrade(studentGrades);

console.log("average grade:",average);
console.log("highest grade:",highest);
console.log("lowest grade:",lowest);




