// let marks =[97,65,25,78,94,36];
// console.log(marks);
// console.log(marks.length); //property

// let heros = ["iron man","super man","thor","hulk"];
// console.log(heros);
// for(i=0;i<heros.length;i++){
//     console.log(heros[i]);
// }
// for (let hero of heros){
//     console.log(hero);

// }
// let cities =["pune","hydrabad","mumbai","kolkata"]
// for(let city of cities){
//     console.log(city.toUpperCase());
// }
//practice set
//1
// let marks = [97,54,64,82,40];
// let sum=0;
// for(let val of marks){
//     sum += val;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the class=${avg}`);
// //2
// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items ){
//     console.log(`value at index ${i} =${val}`);
//     let offer=val/10;
//     items[i]-=offer;
//     console.log(`value after offer=${items[i]}`);
//     i++;
// }
//or
// let items=[250,645,300,900,50];
// for(i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);

//push method is used to add the items to end
//unshift method is used to add  items in strating
//pop method is used to delete the items to end 
//shift method is used to delete the items from starting 
// let deletedItems =foodItems.pop();
// console.log(foodItems)
// let foodItems=["potato","apple","litchi","banana","chocolate"];
// foodItems.push("chips","burger");
// console.log(foodItems);
//to string method is used to have one single string 
//concat function is used to add two different strings in the same sequence
//slice method is used to cut 
// let marvelheroes=["thor","superman","spiderman","antman","krish"];
// console.log(marvelheroes.slice(2));
// let num=[54.68,97,64,25,35,89];
// num.splice(2,3,5,6,5);
// num.splice(2,0,101);//add
// num.splice(3,1,101);//replace
// num.splice(3,2);//delete
// console.log(num);
//splice method is use to delete,replace and add element
//practice set
let arr=["Bloomberg","microsoft","uber","google","IBM","netflix"];
// arr.splice(2,1,"Ola");
// console.log(arr);
// arr.shift();
// console.log(arr);
arr.push("amazon");
console.log(arr);
