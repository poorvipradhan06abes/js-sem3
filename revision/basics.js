console.log("Hello, World!");

//synchronous code
console.log("start");
console.log("middle");
console.log("end");

//asynchronous code
console.log("start");
setTimeout(() => {
    console.log("middle");
}, 2000);

console.log("end");

//promises

console.log("syncronous code")

Promise.resolve().then(()=>{
    console.log("microtask Queue")
})

setTimeout(()=>{
    console.log("Microsoft Queue")
})

//

function calculate_area(radius) {
    return 3.14 * radius * radius;
}
// const calculate_area  =require(