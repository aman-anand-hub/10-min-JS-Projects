function verifyPass(element)
{
    var temp= element.value;
    if(temp.length>0 && temp.length<6)
    {
        document.getElementById("passwordlogin").innerHTML= "password must be of 6-12 digits❗";
        document.getElementById("passwordlogin").style.fontFamily = "Arial, sans-serif";
    }
    else if(temp.length>12)
    {
        document.getElementById("passwordlogin").innerHTML= "password must be less than 12 digits❗";
        document.getElementById("passwordlogin").style.fontFamily = "Arial, sans-serif";
    }
    else
    {
        document.getElementById("passwordlogin").innerHTML = "";
        document.getElementById("passwordlogin").style.fontFamily = "Arial, sans-serif";
    }
}
