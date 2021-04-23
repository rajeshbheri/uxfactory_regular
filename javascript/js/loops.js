//if conditions
var age = 24;
if(age>=22)
{
    console.log("Eligible for age");
}
else
{
 console.log("not Eligible for age");
}

var studentName = "rajesh";
if(studentName == 'anil'|| studentName == 'esawari' || studentName == 'chandini' || studentName == 'rajesh' ||studentName == 'jagadheesh')
{
    console.log("that student are in ux factory ");
}
else
{
    console.log("that student is not ux factory");
}

//switch student
switch(studentName)
{
    case 'rajesh':
    case 'anil':
    case 'chandini':
    case 'eswari':
    case 'jagadheesh':
        console.log("this student are tranies to uxfactory");
        break;
        default:
        console.log("this student are  not tranies to uxfactory");
}
 
//for loop
var sum=0
for  (i=1; i<=10; i++);{
    sum=sum+i;
}
console.log(sum);


// //while loop
// var i=1;
// while(i<=50){
//     document.write(i+"<br/>");
//     i=i+2;
// }

// //do-while loop
// var i = 1;
// do {
//     document.write(i+"<br/>");
//     i=i+2;
// }
// while(i<=50);

// //do-while loop
// var i = 51;
// do {
//     document.write(i);
//     i=i+2;
// }
// while(i<=50);

//forloop
// var arr = [12,13,14,15,16];
// var sum = 0;

// for(var i=0; i<arr.length; i++) {
//     sum= sum+arr[i];
// }
// console.log(sum);

// for(var i=0; i<arr.length; i++) {
//     sum= sum+arr[i];
// }
// console.log("sum is:", sum);

// //do-while loop
// var i=0;
// sum =0;
// do {
//     sum = sum + arr[i];
//     i++;
//     console.log(sum);
// }
// while (i < arr.length);

// //while loop
// var sum = 0;
// var i = 1;
// while (i<= 10){
//     console.log("sum", "=", sum, "+", i);
//     sum+=i;
//     i++;
// }