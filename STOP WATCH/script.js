document.getElementById("b1").addEventListener("click", function() {
    var start_time= Date.now();
    var sec= Number(document.getElementById("h1_2").innerHTML.substring(10));
    var min= Number(document.getElementById("h1_2").innerHTML.substring(5,7));
    intervalId = setInterval(function()
    {
        var curr_time= Date.now();
        var elapsed_time= curr_time - start_time;

        var h = Math.floor(elapsed_time / 3600000);
        var m = Math.floor((elapsed_time % 3600000) / 60000);
        var s = Math.floor((elapsed_time % 60000) / 1000);
        
        s+=sec;
        m+=min;

        if (h < 10) h = '0' + h;
        if (m < 10) m = '0' + m;
        if (s < 10) s = '0' + s;
 
        document.getElementsByTagName("h1")[1].textContent= h + " : " + m + " : " + s;
    }, 1000);
});

document.getElementById("b2").addEventListener("click", function()
{
    clearInterval(intervalId);   
});

document.getElementById("b3").addEventListener("click", function()
{
    clearInterval(intervalId); 
    document.getElementsByTagName("h1")[1].textContent= "00 : 00 : 00";  
});