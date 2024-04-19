// function hello() {
//     console.log("hello");

// }
//     setTimeout(hello,5000);

//     //or
//     setTimeout( () => {
//         console.log("hello");
//     },5000);
//     console.log("three");
//     console.log("four");

//     function sum(a,b){
//         console.log(a+b);
//     }
//     function calculator(a,b){

//     }

//nesting
// let age=19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     }else{
//         console.log("middle");
//     }
    
// }else{
//     console.log("child");
// } 

// for(let i=0;i<5;i++){
//     let str="";
//     for(let j=0;j<5;j++)
//     str +=j;
//     console.log("i,str");
// // }
// function getData(dataId,){
//     console.log("data,dataId");
// }

// function getData(dataId,getNextData){
//     setTimeout(() =>{
//         console.log("data,datId");
//         getNextData();
//     },2000);



// //callback hell    
// }
// getData(1,() =>{
//     console.log("getting data2... ");
//     getData(2,() =>{
//         console.log("getting data3... ");
//         getData(3,() =>{
//             console.log("getting data4... ");
//             getData(4,() =>{
//                 console.log("getting data5... ");
//                 getData(5,() =>{
//                     console.log("getting data6... ");

//                 });

//             });
//         });
//     });
// });

let promise = new promise ((resolve,reject) => {
    console.log("I am a promise");
    // resolve(123);
});

let 