//Dates
// let myDate = new Date()
// console.log(myDate.toString()); 
// // Wed Jan 08 2025 10:15:36 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());
// // Wed Jan 08 2025

// console.log(myDate.toISOString());
// // 2025-01-08T10:15:36.966Z

// console.log(myDate.toJSON());
// // 2025-01-08T10:15:36.966Z

// console.log(myDate.toLocaleString());
// // 1/8/2025, 10:15:36 AM

// console.log(myDate.toLocaleDateString());
// // 1/8/2025

// console.log(myDate.toLocaleTimeString());
// // 10:15:36 AM

// console.log(myDate.toTimeString());
// // 10:15:36 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toUTCString());
// // Wed, 08 Jan 2025 10:15:36 GMT

// console.log(typeof myDate);
// //object

// let myCreatedDate = new Date(2024, 0, 23, 5 ,4,45)
// console.log(myCreatedDate.toLocaleString());
// // 1/23/2024, 5:04:45 AM

// let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toDateString());
// // Sun Jan 14 2024

// let myCreatedDate = new Date("12-01-2025")
// console.log(myCreatedDate.toDateString());
// // Mon Dec 01 2025

let newCreatedDate = new Date("12-14-2025")
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(newCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());

console.log(`The current Date is : 
    ${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`)

newDate.toLocaleString('default',{
    weekday: "long" 
})




