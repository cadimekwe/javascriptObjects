// OBJECTS
let details = {
    firstName:'nonso',
    lastName: 'emeh', 
    age: 30,
}
// KEY is firstName, lastName & age while VALUE is nonso, emeh & 30

// to access the element in an object 
console.log(details.firstName);
console.log(details.age);
console.log(details.lastName);
// or do this 
console.log('>>>>>>>>>>>>>>>>>')
console.log(details['age']);
console.log(details['firstName']);
console.log(details['lastName']);

// assigning the element in the object
details.firstName = 'chioma'; 
console.log(details.firstName);
// or
details['age'] = 23;
console.log(details.age);

// inserting an element in the object 
details.email = 'nonso@gmail.com';
console.log(details.email);
console.log(details); 
// deleting a key in the object 
delete details.age; 
console.log(details);

// for in (loop)
// using for in to get the key 
for (const biscuit in details) {
    console.log(biscuit);
}
// using for in to get the value 
for (const lappy in details) {
    console.log(details[lappy]);
}

// ARRAY OF OBJECTS
// instead of this 
let detailsOne = {
    firstName:'nonso',
    lastName: 'emeh', 
    age: 30,
};
let detailsTwo = {
    firstName:'nonso',
    lastName: 'emeh', 
    age: 30,
}
// DO THIS 
const detailsThree = [{
    firstName:'nonso',
    lastName: 'emeh', 
    age: 30,
},
{
    firstName:'ebuka',
    lastName: 'adimekwe', 
    age: 24,
}
]
console.log(detailsThree[0]);
detailsThree[1].age = 45; 
console.log(detailsThree[1]);

console.log(Object.values(details));
console.log(Object.keys(details));

// TRY CATCH AND ERRORS- with this even if theres an error, it keeps running the code
function randomCheck(random) {
    
try {
    console.log(random.toUpperCase());
} catch (error) {
    console.log(`${random} is not a string`);
}
}

randomCheck('chidimma');
console.log('>>>>>>>>>>>>>>')

randomCheck(101);
console.log('>>>>>>>>>>>>>>');

randomCheck([25, 66])
console.log('>>>>>>>>>>>>>>')

randomCheck('testing', 1, 2, 3)

const properties = {
    size: '1500kg',
    range: '55 -67',
    model: 'Boeing 101',
    capacity: 120,
}
console.log(properties.range); 
// for (const biscuit in details) {
//     console.log(biscuit);
// }
// // using for in to get the value 
// for (const lappy in details) {
//     console.log(details[lappy]);
// }

for (const spacecraft in properties) {
    console.log(`this is the key: ${spacecraft}`);
}
for (const spaceShip in properties) {
    console.log(`this is the value: ${properties[spaceShip]}`);
}

// QUERY SELECTOR AND CLASS LISTS

// THE WINDOW OBJECT and THE DOCUMENT OBJECT MODEL