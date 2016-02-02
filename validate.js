function validateForm() {
    var y = document.forms["myForm"]["name"].value;
	var x = document.forms["myForm"]["email"].value;
	var z = document.forms["myForm"]["msg"].value;
    if (x == null || x == ""||y == null || y == ""||z == null || z == "") 
	{
        document.getElementById("output").innerHTML="please complete the form";
        return false;
    }
	var eflag=0;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if(atpos<1 || dotpos<atpos+2  || dotpos+2>=x.length)
	{
	 document.getElementById("output").innerHTML="please enter the valid email id";
	eflag=1;
	return false;
	}
	
	
	var uflag=0;
	if(!/^[a-zA-Z]*$/g.test(y))
	{
	document.getElementById("output").innerHTML="please enter the valid name";
	uflag=1;
	return false;
	
	}
	
if(eflag==0 && uflag==0 && z!=null && x!=null && x!="" && y !=null && y!="" && z!=null && z!="")
{

document.getElementById("output").innerHTML="sent mail";
		return false;
}	
}	