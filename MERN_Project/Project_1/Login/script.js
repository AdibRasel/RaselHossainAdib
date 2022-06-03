var form = document.getElementById("form");
var username = document.getElementById("username");
var password = document.getElementById("password");

// error message 
var username_error = document.getElementById("username_error");
var password_error = document.getElementById("password_error");
var usernamer_color = document.getElementById("username");
var password_color = document.getElementById("password");


form.addEventListener("submit", function(e){
    e.preventDefault();
    
    // username chack
    if(username.value === ""){
        username_error.innerHTML = "Please Submit Your UserName"
        usernamer_color.classList.add("error", "error_2")
    }else{
        username_error.innerHTML = "Successful Username"
        usernamer_color.classList.add("success", "success_2")
    }
    
    // password chack
    if(password.value === ""){
        password_error.innerHTML = "Please Submit Your Password"
        password_color.classList.add("error", "error_2")
    }else{
        password_error.innerHTML = "Successful password"
        password_color.classList.add("success", "success_2")
    }

    document.getElementById("result").innerHTML = ("Username is: " + username.value + "<br>" + "Password is:" + password.value);

})