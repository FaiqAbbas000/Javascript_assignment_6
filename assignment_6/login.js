
 
function validation(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == ""){
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
    else{
        alert("Login Successful");
        return true;
    }
    
}