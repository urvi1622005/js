function getData(dataId,){
    console.log("data,dataId");
}

function getData(dataId,getNextData){
    setTimeout(() =>{
        console.log("data,datId");
        getNextData();
    },2000);



//callback hell  
//nested callbacks staked over each other  
}
getData(1,() =>{
    console.log("getting data2... ");
    getData(2,() =>{
        console.log("getting data3... ");
        getData(3,() =>{
            console.log("getting data4... ");
            getData(4,() =>{
                console.log("getting data5... ");
                getData(5,() =>{
                    console.log("getting data6... ");

                });

            });
        });
    });
});
//to deal with these problems we implement promises
//2 types of callbacks resolve and reject
