// var name = "Brent";
// var age = 21;

// var mess = "Hi, my Name is " + name + " , I am " + age + " years old!"

// console.log(mess);


// ###############  LECTURE 01 Linking JS to HTML doc

// variables are defined by the reserved keyword var

// Java Script is weak-typed meaning JS figures out what type of data a variable holds
// so we do not have to define the type 

// var name = "Brent";
// var age = 21;
// var decimalNum = 78.56;

// var mess = "Hi, my Name is " + name + " , I am " + age + " years old!"





// ###############  LECTURE 02 vars and strings

// var firstName = "Brent";
// var lastName = "Littlefield";
// var dateOfBirth = "09-27-99"
// var age = 21;
// var profileImgURL = "http://google.com/";

// var loginWelcomeMessage = "Welcome, " + firstName + " " + lastName;

// console.log(loginWelcomeMessage);





// ###############  LECTURE 03 Numbers

// var sum = 10 + 15;
// console.log(sum);
// var sub = 15 - 10;
// console.log(sub);
// var mult = 10 * 3;
// console.log(mult);
// var div = 9 / 3;
// console.log(div);
// var rem = 10 % 3;
// console.log("10 / 3 = 3 with a remainder of " + rem);
// var result = 10 * 5 + 3 - 4;
// console.log(result);

// // Using PEMDAS JS changes how to calculates values

// var result = 10 * ((5 + 3) - 4) * -1;
// console.log(result);





// ###############  LECTURE 04 Comparison Operators

// if (1 == 1) {
//   console.log("we should see this when we run this code");
// }
// if (1 == 2) {
//   console.log("we should NOT see this when we run this code");
// }

// var accountBal = 300;
// var shoePrice = 799.23;
// var coupon = 500;

// if (shoePrice <= accountBal) {
//   console.log("we bought some shoes");
//   accountBal -= shoePrice;
//   console.log(accountBal);
// }
// else if (shoePrice - coupon <= accountBal) {
//   console.log("we bought some shoes with a coupon");
//   accountBal -= shoePrice - coupon;
//   console.log(accountBal);
// }
// else {
//   console.log("account balance too low to purchase shoes");
// }

// // == vs ===

// var val1 = 23;
// var val2 = "23";
// if (val1 == val2) {
//   console.log("They are the same Value")
// }
// else if (val1 === val2) {
//   console.log("They are the same Value AND Type ")
// }
// else {

// }





// ###############  LECTURE 05 Logical Operators

// if (1 === 1 && 2 === 2) {
//   console.log("These are both true");
// }

// if (1 === 3 || "joe" === "joe") {
//   console.log('one of these holds true');
// }

// var bagel1 = 5;
// var bagel2 = 10;
// var abgel3 = 1;

// if (bagel1 > bagel2 && bagel1 > bagel3) {
//   console.log('bagel1 was the best');
// }
// else if (bagel2 > bagel1 && bagel2 > bagel3) {
//   console.log('bagel2 was the best');
// }





// ###############  LECTURE 06 Arrays

// var students = ["Brent", "Katherina", "Denny"];
// console.log(students);

// var badStudents = []
// badStudents.push(students[0]);
// console.log(badStudents);

// var index = badStudents.indexOf("Denny")
// console.log(index);

// if (index > -1) {
//   badStudents.splice(index, 1);
// }

// console.log(badStudents);





// ###############  LECTURE 07 Loops
// var val = 10;
// for (var i = 0; i < val; i++) {
//   console.log(i)
// }

// var students = ["Brent", "Katherina", "Denny", "Alex", "Matt"]
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i])
// }





// ###############  LECTURE 08 Fucntions

// reusable code without copy and pasting code
// if you are copy and pasting code you are doing something wrong IE USE A FUNCTION

// DRY 
// Dont Repeat Yourself

// function RectArea(dimen1, dimen2) {
//   return dimen1 * dimen2
// }

// var square = RectArea(5, 5)
// console.log(square)

// var rectangleAreas = []
// rectangleAreas.push(RectArea(10, 15))
// rectangleAreas.push(RectArea(167, 4))
// rectangleAreas.push(RectArea(4, 45))
// console.log(rectangleAreas)

// var bankBalance = 500;

// var transaction = function(priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//     bankBalance -= priceOfSale;
//     console.log("Successful")
//   }
//   else {
//     console.log("Not Enough Funds")
//   }
// }

// transaction(10)

// var bankOperations = [];
// bankOperations.push(transaction)





// ###############  LECTURE 09 Objects

// // These essentially act as a DICTIONARY
// var student0 = {
//   firstName: "Brent",
//   lastName: "Littlefield",
//   age: 21,
//   greeting: function() {
//     return "Hello I am " + this.firstName + " " + this.lastName + ", and I am " + this.age + "."
//   }
// };

// // Printing Attributes of the Student object

// console.log(student0.firstName)
// console.log(student0.lastName)
// console.log(student0.age)
// console.log(student0.greeting())
// console.log(student0["firstName"])
// console.log(student0["lastName"])
// console.log(student0["age"])

// // Creates a new empty object
// var student1 = new Object()
//   // Fills empty object with values and attribute names
// student1.firstName = "Matt"
// student1.lastName = "Denny"
// student1.age = 21


// // Creates a new empty object
// var student2 = {}
//   // Fills empty object with values and attribute names
// student2.firstName = "Kath"
// student2.lastName = "Smith"
// student2.age = 21


// var students = []

// students.push(student0)
// students.push(student1)
// students.push(student2)

// for (var i = 0; i < students.length; i++) {
//   console.log(students[i])
// }

// function Student(firstName, lastName, age) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.greeting = function() {
//     return "Hello I am " + this.firstName + " " + this.lastName + ", and I am " + this.age + "."
//   }
// }

// var brent = new Student("Brent", "Littlefield", 21)
// console.log(brent)
// console.log(brent.greeting())





// ###############  LECTURE 10 Bind
// this.car = "Honda CRV"

// var brentGarage = {
//   car: "Focus ST",
//   getCar: function() {
//     return this.car
//   }
// }

// console.log(brentGarage.getCar())

// var storeGetCar = brentGarage.getCar

// console.log(storeGetCar()) // we are not accessing our garage's car but the outer this at the top of this Lecture We have lost the scope of the object we want to work with

// var theRealGetCar = storeGetCar.bind(brentGarage) // we are binding our variable to interact only with brentGarage object as it has the values we want to essentially work with sets RealGet car to have the function as well as sets the scope of the variable as well to relate back to brentGarage

// console.log(theRealGetCar())

// brentGarage.car = "Focus RS"

// console.log(theRealGetCar())
