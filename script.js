function compute()
{
    
    var principal=document.getElementById("principal").value;

    /* making sure that the principle is positive*/
    if(principal<=0)
    {
        alert('A principle should be a positive number');
        document.getElementById("principal").focus();
	    document.getElementById("principal").value = "";
	    document.getElementById("result").innerHTML= "";
        return;
    }  

    /*caluclating the actual ineterest return*/
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    result.innerHTML="If you deposit <b><mark>"+ principal +"</mark></b>,\<br\>at an interest rate of <b><mark>"+ Number(document.getElementById("rate").value).toFixed(2) +" % </mark></b>,\<br\>you will receive an amount of <b><mark>" + interest +"</mark></b>,\<br\>in the year <b><mark>"+ year +"</mark></b>\<br\>";
}

/* updating the interest*/
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        
