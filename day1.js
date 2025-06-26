// let  a=10;

// let b =20;
// let result= a+b;
// console.log(result);

function task1() {
    console.log("task1 started");
    let start = Date.now();
    let delay = 2500;
    let end = start + delay;
    console.log("task1 executing");
    while (Date.now() <= end) {}
    console.log("task1 completed");
}

function task2() {
    console.log("task2 started");
    let start = Date.now();
    let delay = 4000;
    let end = start + delay;
    console.log("task2 executing");
    while (Date.now() <= end) {}
    console.log("task2 completed");
}
function task3() {
    console.log("task3 started");
    let start = Date.now();
    let delay = 5500;
    let end = start + delay;
    console.log("task3 executing");
    while (Date.now() <= end) {}
    console.log("task3 completed");
}
task1();
setTimeout(task2,2000)
task3();
