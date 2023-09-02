let database = [{Name:"Muhammad Faiq",User_Name:"m.faiqzafar05@gmail.com",Password:"abcd@123"}];

function addData() 
{
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (database.find(function(){username == database.User_Name}))
    {
        alert("Username already exists");
        console.log(database)
        return false; // Prevent form submission
    }
    else
    {
        var sample = 
        {
            Name: name,
            User_Name: username,
            Password: password
        };

        database.push(sample);
        alert("Data added successfully");
        return true; // Allow form submission
    }





    // var isUsernameExists = database.some(item => item.User_Name == username);

    // if (isUsernameExists == username ) 
    // {
    //     alert("Username already exists");
    //     return false; // Prevent form submission
    // } 
    // else 
    // {
    //     var sample = 
    //     {
    //         Name: name,
    //         User_Name: username,
    //         Password: password
    //     };

    //     database.push(sample);
    //     alert("Data added successfully");
    //     return true; // Allow form submission
    // }
}

function findData()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    database.find(function(){username ==database.User_Name})

    // var isUsernameExists = database.some(item => item.User_Name == username);

    if (database.find(function(){username == database.User_Name && password == database.Password})) 
    {
        alert("Login successful");
        return true;
    }
    else if(database.find(function(){username == database.User_Name && password != database.Password}))
    {
        alert("Incorrect password");
        return false;
    }
    else if(database.find(function(){username != database.User_Name && password == database.Password}))
    {
        alert("Incorrect username");
        return false;
    }
    else{
        alert("Record not found");
        return false;
    }
}





function loginValidation()
{
    var username = document.getElementById("username");
    var password = document.getElementById("password"); 
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var flag = false;

    if (username.value == "")
    {
        usernameError.innerHTML = "username cannot be empty";
    }
    else if(username.length < 6)
    {
        usernameError.innerHTML = "username too short";
    }
    else if(!username.value.includes("@"))
    {
        usernameError.innerHTML = "Please enter the correct username";
    }
    else
    {
        usernameError.innerHTML = "";
    }

    if (password.value == "")
    {
        passwordError.innerHTML = "password cannot be empty";
    }
    else if (password.length < 8)
    {
        passwordError.innerHTML = "password too short";
    }
    else if(!password.value.includes("@"||"#"||"$"||"%"||"&"||"*"||"!"||"^"||"("||")"||"-"||"+"||"="||"_"||"~"||"<"||">"||"?"||"/"||"|"||"["||"]"||"{"||"}"||";"||":"||","||"."||"`"||"'"||"\""||" "))
    {
        passwordError.innerHTML = "Please enter the strong password";
    }
    else
    {
        passwordError.innerHTML = "";
    }
    if ((username.value =="") || password.value == "")
    {
        flag = false;
    }
    else
    {
        flag = true;
    }   
    return flag;
}


function signupValidation()
{
    var name = document.getElementById("name");
    var username = document.getElementById("username");
    var password = document.getElementById("password");    
    var confirmPassword = document.getElementById("confirmPassword");
    var nameError = document.getElementById("nameError");
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var confirmationError = document.getElementById("confirmationError");
    var flag = false;
    
    if (name.value == "")
    {
        nameError.innerHTML = "Name cannot be empty";
    }
    else if (name.length<3)
    {
        nameError.innerHTML = "Name is too short";
    }
    else
    {
        nameError.innerHTML = "";
    }
    if(username.value =="")
    {
        usernameError.innerHTML = "username cannot be empty";
    }
    else if(username.length < 6)
    {
        usernameError.innerHTML = "username too short";
    }
    else if(!username.value.includes("@"))
    {
        usernameError.innerHTML = "Please enter the correct username";
    }
    else
    {
        usernameError.innerHTML = "";
    }
    if (password.value == "")
    {
        passwordError.innerHTML = "password cannot be empty";
    }
    else if(password.length < 8)
    {
        passwordError.innerHTML = "password too short";
    }
    else if(!password.value.includes("@"||"#"||"$"||"%"||"&"||"*"||"!"||"^"||"("||")"||"-"||"+"||"="||"_"||"~"||"<"||">"||"?"||"/"||"|"||"["||"]"||"{"||"}"||";"||":"||","||"."||"`"||"'"||"\""||" "))
    {
        passwordError.innerHTML = "Please enter the strong password";
    }
    else
    {  
        passwordError.innerHTML = "";
    }

    if(confirmPassword.value == "")
    {
        confirmationError.innerHTML = "please confirm your password";
    }
    else if (confirmPassword.value !=password.value)
    {
        confirmationError.innerHTML = "passwords do not match";
    }
    else
    {
        confirmationError.innerHTML = "";
    }
    if ((name.value =="") || (username.value =="") || (password.value == "") || (confirmPassword.value == ""))
    {
        flag = false;
    }
    else
    {   
        flag = true;
    }   
    return flag;
}


