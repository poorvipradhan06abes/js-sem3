
const promise1 = new Promise((resolve,reject)=>{
    let  success= false;
    if(success){
        resolve({
            id: 23467 ,
            name: "john doe"
    })
    }
    else{
        reject(new error("user not found"))
    }
})

// promise1
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// });


const promise2 = new Promise((resolve,reject)=>{
    let  success= false;
    if(success){
        resolve({
            id: 23467 ,
            location: "New Delhi"
    })
    }
    else{
        reject(new error("user not found"))
    }
})

// promise2
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// });

Promise.race([promise1,promise2])
.then((response)=>{
    return response
})
.catch((error)=>{
    console.log(error);
});