// (function() {
//     'use strict';
//     window.addEventListener('load', function() {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName('needs-validation');
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function(form) {
//         form.addEventListener('submit', function(event) {
//           if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
//           form.classList.add('was-validated');
//         }, false);
//       });
//     }, false);
//   })();


function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    }
    
    function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    }
    
    function validateForm(){
    let returnval = true;
    clearErrors();
    
    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    
    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    
    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    
    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){
    
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    return returnval;
  }
    
  
  
    function validateName() {
      let name = document.forms['myForm']['fname'].value;
      if (name.length < 5) {
          seterror('name', "*Lenght of name is too short");
      }
      if (name.length === 0) {
          seterror('name', "*Length of name cannot be zero");
      }
  }
  
  function validateEmail () {
      var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
  }
  
  function validatePhone() {
      var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
  }
  
  function validatePassword () {
      var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){
    
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
  }
  
  function validateConfirmPassword () {
      var cpassword = document.forms['myForm']["fcpass"].value;
      var password = document.forms['myForm']["fpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
  }