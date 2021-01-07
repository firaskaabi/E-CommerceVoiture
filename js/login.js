function login(){

   var password=document.getElementById("password").value
   var username=document.getElementById("username").value
   if(username.length<4){
    msgusername = "<p style='color:red'>username non valide.</p>"; 
    var okusername=false;
   }else{
    msgusername = "<p style='color:green'>username  valide.</p>"; 
    okusername=true;
   }
   document.getElementById("msgusername").innerHTML=msgusername

   p=validate(password)
   if(okusername){
       localStorage.setItem("username",username)
       alert(localStorage.getItem("username"))
       location.replace("./index.html")
   }

}

function validate(str) { 
    var msg; 
    if (str.match( /[0-9]/g) && 
            str.match( /[A-Z]/g) && 
            str.match(/[a-z]/g) && 
            str.match( /[^a-zA-Z\d]/g) &&
            str.length >= 10) {
        msg = "<p style='color:green'>Mot de passe fort.</p>"; 
        ok=true;
            }
    else {
        msg = "<p style='color:red'>Mot de passe faible.</p>"; 
        ok=false;

    }
    document.getElementById("msg").innerHTML= msg; 
    return ok;
} 
function debut(){
    localStorage.removeItem("username")
}