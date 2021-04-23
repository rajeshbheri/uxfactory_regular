function validateForm(){
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var fatherNa = document.getElementById("fatherName").value;
    var email = document.getElementById("email").value;
    var mobNum = document.getElementById("mobile number").value;
    var dob = document.getElementById("dateofbirth").value;
    var age = document.getElementById("age").value;
   
    if (fname == "" ||lname == "" || email == "" || mobNum == ""|| fatherNa == "" ||  dateofbirth == ""){
       alert("please fill all blanks");
   }
   else if (age <= "22"){
    alert("age should be more than 22");
   }
   else {
    alert("your form submitted");
   }
}
