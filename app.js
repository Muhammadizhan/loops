//Question -01
for (let i = 0; i < 5; i++) {
    console.log("Happy World");
}

//Questiion -02

for (let i = 1; i <= 10; i++) {
console.log(i);
}

//Question-03

// const tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
// const tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// console.log(`Multiplication Table for ${tableNumber} (Length ${tableLength}):`);
// for (let i = 1; i <= tableLength; i++) {
//     console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
// }

//Question -04 

const A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for (let i = 0; i < A.length; i++) {
    console.log(A[i]);
}

//Question -05

const fruite =['apple','banana','mango','orange','strawberry'];
for (let i = 0; i < fruite.length; i++) {
    console.log(fruite[i]);
}

//Question -06

const items = parseInt(prompt("Enter the number of items:"));
const itemsArray = [];
for (let i = 0; i < items; i++) {
    const item = prompt(`Enter item ${i + 1}:`);
    itemsArray.push(item);
}
alert("Items entered by the user: " + itemsArray.join(", "));

//Question -07

