function validateLogin() {
    let password = document.forms["loginForm"]["password"].value
    let passwordVal = document.forms["loginForm"]["passwordVal"].value
    if (password != passwordVal){
        alert("funkar inte")
        return false
    } else if (password.length < 7){
        alert("len")
        return false
    } else if (/\d/.test(password) == false){
        alert("num")
        return false
    }
    alert("funkar")
    return true
}
