function verifyPass(element)
{
    var temp= element.value;
    if(temp.length>0 && temp.length<6)
    {
        document.getElementById("passwordlogin").innerHTML= "password must be of 6-12 digits";
        document.getElementById("passwordlogin").style.fontFamily = "Arial, sans-serif";
    }
    else if(temp.length>12)
    {
        document.getElementById("passwordlogin").innerHTML= "password must be less than 12 digits";
        document.getElementById("passwordlogin").style.fontFamily = "Arial, sans-serif";
    }
    else
    {
        document.getElementById("passwordlogin").innerHTML = "";
        document.getElementById("passwordlogin").style.fontFamily = "Arial, sans-serif";
    }
}

function convertpass()
{
    let x= document.getElementById("getpasslogin");
    if(x.getAttribute("type") == "password")
    {
        x.setAttribute("type","text");
    }
    else if(x.getAttribute("type") == "text")
    {
        x.setAttribute("type", "password");
    }
}

function checkLoginCredentials()
{
    const mail= document.getElementById("getemaillogin");
    const password= document.getElementById("getpasslogin");
    if(password.value.length>0 && mail.value.length>0)
    {
        if(password.value.length<6 || password.value.length>12)
        {
            if(password.value.length<6)
            {
                alert("Password feild is less than 6 digits.");
            }
            else if(password.value.length>12)
            {
                alert("Password feild is greater than 12 digits.");
            }
        }
        else
        {
            window.location.href="logedin.html";
        }
    }
    else
    {
        alert("Fill all feilds and try to login again!");
    }
}