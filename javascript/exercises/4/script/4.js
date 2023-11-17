

function prime() {
    var num1 = document.getElementById("num").value;
    alert(num1);
    var r=0;
    for (var index = 2; index <= (num1 / 2); index++)
     {
        if (num1 % index == 0) 
            r = 1;       
    }
    if (r == 0) {
        alert("The given number is a prime number");
    }
    else
      alert("The number is n't prime");
}
