//templates
 var a = ['10', '20', '30', '40'];
 console.log(`The value of a is a = ${a}`);
 console.log(`somestring ${a}`);

 //class arthimetic
 class Arthimetic{
     constructor(x,y,ab){
         this.r = x;
         this.t = y;
         this.someName = ab;
     }
     getsum()
     {
         return `The sum is ${ this.r + this.t}`;
     }
     getsub()
     {
         return `The subtraction is ${this.r - this.t}`;
     }
 }
 var obj = new Arthimetic(10, 20,"sum");
 console.log( obj.getsum());
 console.log(obj.getsub());

//object literals

function getphone(make,model,year){
    return{
        make,
        model,
        year,
    }
}
let phoneObj = getphone("apple","iphone","2021");
console.log(phoneObj);

//methods of objects
function getphones(make,model,year){
    return{
        saymake(){
            return `make name:${make}`;
        },
        saymodel (){
            return `year name:${model}`;
        },
        sayyear(){
            return `year name:${year}`;
        }
    }
}
let condi = getphones("Apple","Iphone","2021").sayyear();
console.log(condi);

let ram = getphones("Apple","Iphone","2021").saymodel();
console.log(ram);

let rom = getphones("Apple","Iphone","2021").saymake();
console.log(rom);

var prop = "make";
var i = 0;
const phones = {
    [prop + ++i]: "Apple",
    [prop + ++i]: "Samsung",
    [prop + ++i]: "Oneplus",
    [prop + ++i]: "Realme",
    [prop + ++i]: "Oppo",
};
console.log(phones);

//destructuring
let person = {
    pname: "rajesh",
    country: "india",
    job :"developer",
    age : "25",
    empid :"123",
};
console.log(person);

let {pname,job,empid} = person;
console.log(pname,job,empid);
 
//Here change variable names 
let  {pname:some,country:some1,job:some2,age:some3} = person;
console.log(some,some1,some2,some3);
