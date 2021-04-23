//array helper function


//for each
var path = ["rajesh", "anil","jagadheesh", "eswari", "chandini"]
path.forEach(val => {
    console.log(val);
});

//map
let some = path.map (str => str.toUpperCase());
console.log(some);


var array = [1, 20, 30, 3, 9, 50];
let text = array.map(val => val * 10);
console.log(text);

//filter
var  value = [1, 9, 10, 28, 30];
var fun = value.filter(  val => val<= 20);
console.log(fun);

var fun = value.filter(  val => val>= 20);
console.log(fun);

// //find
// var names = [
//     {name = "anil", age:20 },
//     {name = "chandini", age:25},
//     {name = "eswari", age: 18},
//     {name = "rajesh", age:30},
//     {name = "jagadheesh", age : 40},
// ];
// var firstName = names.find( person => person.age >30 && person.age<20);
// console.log(" found firstName:",firstName);

//every
everyoneIsteenage = names.every(name person age)



//reduce
