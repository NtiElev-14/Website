function validateLogin() {
    let password = document.forms["loginForm"]["password"].value
    let passwordVal = document.forms["loginForm"]["passwordVal"].value
    
    if (password.length < 7){
        document.getElementById("passworderror").innerHTML = "Lösenordet är för kort"
        return false
    } else if (/\d/.test(password) == false){
        document.getElementById("passworderror").innerHTML = "Lösenordet måste innehålla minst en siffra"
        return false
    } else if (password != passwordVal){
        document.getElementById("passworderror").innerHTML = "Lösenorden matchar inte"
        return false
    } else{
    alert('Svar "skickat"')
    return true
    }
}
