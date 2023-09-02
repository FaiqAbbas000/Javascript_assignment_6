function validation(){
    
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;    
    var confirm_password = document.getElementById("confirmPassword").value;
    
    
    if (name == ""){
        alert("Name cannot be empty");
        return false;
    }
    if (name.length<3){
        alert("Name is too short");
        return false;
    }
    if(username ==""){
        alert("username cannot be empty");
        return false;
    }
    if(username.length < 6){
        alert("username too short");
        return false;
    }
    if(!username.includes("@")){
        alert("Please enter the correct username");
        return false;
    }
    if (password == ""){
        alert("password cannot be empty");
        return false;
    }
    if(password.length < 8){
        alert("password too short");
        return false;
    }
    if(!password.includes("@"||"#"||"$"||"%"||"&"||"*"||"!"||"^"||"("||")"||"-"||"+"||"="||"_"||"~"||"<"||">"||"?"||"/"||"|"||"["||"]"||"{"||"}"||";"||":"||","||"."||"`"||"'"||"\""||" ")){
        alert("Please enter the strong password");
        return false;
    }
    if (confirm_password !=password){
        alert("passwords do not match");
        return false;
    }
    else{
        alert("account create Successful");
        return true;
    }
    
}