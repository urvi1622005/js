//nested

let age=19;
if (age=>18) {
    if (age=>60){
        console.log("senior");
}
else {
    console.log("middle");
}
} else {
    console.log("child");
}

//nesting
for (let i=0;i<5;i++){
    let str="";
    for (let j=0;j<5;j++){
        str+=j;
    }
    console.log(i,str);
}
