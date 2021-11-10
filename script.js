function compute()
{
    
    var principal=document.getElementById("principal").value;

    /* making sure that the principle is positive*/
    if(principal<=0)
    {
        alert('A principle should be a positive number')
        return;
    }  

    /*caluclating the actual ineterest return*/
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    result.innerHTML="If you deposit "+principal+" at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+" in the year "+year+"\<br\>"
}

/* updating the interest*/
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
