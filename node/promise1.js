
// // const promise1 = new Promise((resolve,reject)=>{
// //     let  success= false;
// //     if(success){
// //         resolve({
// //             id: 23467 ,
// //             name: "john doe"
// //     })
// //     }
// //     else{
// //         reject(new error("user not found"))
// //     }
// // })

// // // promise1
// // // .then((response)=>{
// // //     console.log(response);
// // // })
// // // .catch((error)=>{
// // //     console.log(error);
// // // });


// // const promise2 = new Promise((resolve,reject)=>{
// //     let  success= false;
// //     if(success){
// //         resolve({
// //             id: 23467 ,
// //             location: "New Delhi"
// //     })hh
// //     }
// //     else{
// //         reject(new error("user not found"))
// //     }
// // })

// // // promise2
// // // .then((response)=>{
// // //     console.log(response);
// // // })
// // // .catch((error)=>{
// // //     console.log(error);
// // // });
// function fetchUserData(){
//     return new Promise((resolve,reject)=>{
//         let success = false;
//         if(success){
//             resolve({
//                 id:2930309,
//               username: "john doe"
//             });
//         }else{
//             reject(new Error ("data not fetched"));
//         }
//     });
// }
//  async function getUser(){
//     try{
//         const user= await fetchUserData();
//         console.log(user);
//         console.log('Error:${error.message}');
//     }
//  }
