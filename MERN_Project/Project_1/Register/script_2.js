// form 
var form = document.getElementById('form');

// input id 
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password_2 = document.getElementById('password_2');


// input color 
var user_input_color = document.getElementById("user_name_input_color").classList;
var email_input_color = document.getElementById("email_input_color").classList;
var password_input_color = document.getElementById("password_input_color").classList;
var password_2_input_color = document.getElementById("password_2_color").classList;


// Error sms 
var user_name_error_sms = document.getElementById("user_name_error_sms");
var email_error_sms = document.getElementById("email_error_sms");
var password_error_sms = document.getElementById("password_error_sms");
var password_2_error_sms = document.getElementById("password_2_error_sms");


form.addEventListener("submit", function(e){
    e.preventDefault();

    // user name 
    if(username.value === ""){
                user_input_color.add("error");
                user_name_error_sms.innerHTML = "Enter Your Name:"
    }else{
        user_input_color.add("success");
    }

    // email 
    if(email.value === ""){
        email_input_color.add("error");
        email_error_sms.innerHTML = "Enter Your Name:"
    }else{
        email_input_color.add("success");
    }


// password 
    if(password.value === ""){
        password_input_color.add("error");
        password_error_sms.innerHTML = "Enter Your Name:"
    }else{
        password_input_color.add("success");
    }



// password 2
    if(password_2.value === ""){
        password_2_input_color.add("error");
        password_2_error_sms.innerHTML = "Enter Your Name:";
    }else{
        password_2_input_color.add("success");
    }
}

)

// window.alert("hello")