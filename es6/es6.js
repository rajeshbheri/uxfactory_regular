function add()
{
    var a = 5;
    let b = 6;
    const c = 7;
    {
      var a = 10;
      let b = 20;
      const c = 30;
     console.log("a = a", a);
     console.log("b = b", b);
     console.log("c = c", c)
    }
    console.log("a = a", a);
    console.log("b = b", b);
    console.log("c = c", c);
}
add();

//arrow function
function add(a, b)
{
    return a + b;
}
const sum =(a,b) =>a + b;
 var result = add(10,20);
 console.log(result);
 
 //arrow 
const sum = (x,y,z) => {
    if (x > 10);
    
}



