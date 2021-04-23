//Implicit conversions
let result;
result = "abc"+"def";
console.log(result, typeof result);

result = "bheri"+"rajesh";
console.log(result, typeof result);

result = "6"*"5";
console.log(result, typeof result);

//explict conversion
result = Number ("456");
console.log(typeof result);

result = Number(false);
console.log(result);

result = Number(true, true);
console.log(result);


result = String(9+8);
console.log(result, typeof result);

result = String(null);
console.log(typeof result);

result = String(undefined);
console.log(typeof result);

result = Boolean(0);
console.log(result);

result = Boolean(6);
console.log(result);


//try catch statement without function

try{
    nonExistentFunction();
}

catch (error){
    console.error(error);
}
finally {
    console.log('Hello');
}

//try catch statement with function
function nonExistentFunction(){
console.log("function");
}
try{
    nonExistentFunction();
}

catch (error){
    console.log(error);
}
finally {
    console.log('Hello');
}

//throw
var num = 10;
if (num < 5){
    throw" the number lessthan 5";
}
else{
    console.log("the number lnot lessthan 5");
}


//scoping
 var somestring = "declared inside function";

 function exampleFunction(){
 var somestring = "declared outside function";
 console.log(somestring);
 }
 console.log(somestring);
 exampleFunction();
 console.log(somestring);


 //hosting
 console.log(a);
 var a;
 a = "Hosting variable";


 console.log(hoist);
 var hoist;
 hoist = "Hoisting variable";


 animal();
    function animal() {
        let animalName = "elephant";
        console.log("animal'sName:" + animalName);
    }

    //this keyword
    var role = '100';

    function testThis(){
    var role = '200';
                    
    console.log('Role:',role);
    console.log('Role using this:',this.role);
 }

