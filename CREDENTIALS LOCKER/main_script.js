function isValidEmail(email) {
    if (email.indexOf("@") === -1) return false;

    var parts = email.split("@");
    var localPart = parts[0];
    var domainPart = parts[1];

    if (localPart.length === 0 || domainPart.length === 0) return false;

    if(domainPart.indexOf(".") == -1) return false;
}

function checkEmail(ele)
{
    if(!isValidEmail(ele.value))
    {
        document.getElementById("mail").innerHTML= "Enter a valid mail Id"
    }
}

function checkPassword(ele)
{

}