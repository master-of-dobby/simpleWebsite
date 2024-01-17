// let arr = [1,2,3];


// //transform an array
// // creates a new array with results of calling function;

// function double(x){ 
//     return x * 2; // value returned  --> map used
// }


// const doubleArr =  arr.map(double);
// //console.log(doubleArr);

// //filer -> filters values inside an array
// // create new array from original value with filered values;

// function isOdd(x){
//     return x % 2; // condition returned --> filer used
// }

// const oddArr = arr.filter(isOdd);

// //console.log(oddArr);

// const users = [
//     {firstName : "Ron", lastName : "Weasly", age : 13},
//     {firstName : "Harry", lastName : "Weasly", age : 13},
//     {firstName : "Hermione", lastName : "Weasly", age : 13},
//     {firstName : "Luna", lastName : "Weasly", age : 13}
// ];

// // function fullName(user){
// //     return user.firstName + user.lastName;
// // }

// const user1 = users.map(user => user.firstName + " " + user.lastName + " of age " + user.age );
// console.log(user1);


// reduce

let arr = [1,2,3,4,5];

const sum = arr.reduce(function(sum, current){
    sum  = sum + current;

    return sum;
}, 0);

console.log(sum);

const max = arr.reduce((maxi, current) => {

    if(current >= maxi){
        maxi = current;
    }

    return maxi;
}, 0);

console.log(max);

const users = [
    {firstName : "Ron", lastName : "Weasly", age : 13},
    {firstName : "Harry", lastName : "Weasly", age : 14},
    {firstName : "Hermione", lastName : "Weasly", age : 12},
    {firstName : "Luna", lastName : "Weasly", age : 13}
];

const count = users.reduce((age, current) => {
    if(age[current.age]){
        age[current.age] = ++age[current.age];
    }
    else{
        age[current.age] = 1;
    }

    return age;

}, {});

console.log(count);

//function chaining

//firstname age < 13

// const result = users.filter(user => user.age <= 13).map(user => user.firstName);
// console.log(result);

const result = users.reduce((acc, current) => {
    if(current.age <= 13){
        acc.push(current.firstName);
    }

    return acc;
}, []);

console.log(result);