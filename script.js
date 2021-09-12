function compute()
{
    
    checkdata();

    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;

    var year = new Date().getFullYear()+parseInt(years);

    var amount = parseFloat(interest);


    document.getElementById("result").innerHTML="<br\>" + "If you deposit "+
    "<f3>" + principal +"</f3>,\<br\>at an interest rate of "+ 
    "<f3>" + rate +"%</f3>\<br\>You will receive an amount of "+
    "<f3>" + amount+"</f3>,\<br\>in the year "+
    "<f3>" + year+"</f3>\<br\>"
 
}
        

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    
    // document.getElementById("rate_val").innerText = rateval;
    document.getElementById("rate_val").innerHTML = rateval;

}   


function checkdata()
{
      var principal = document.getElementById("principal").value;

      
      // If the user enters zero or negative values, show an alert "Enter a positive number"
      if(parseFloat(principal) <= 0 ){
            alert("Enter a positive number");
            principal.focus();
            return false;
      }
     
     //If all is well return true.
      return true;
}
        