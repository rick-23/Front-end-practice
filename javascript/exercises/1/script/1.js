function rev() {
    var num = document.getElementById("num").value;
    
    if ( parseInt(num) != NaN ){
    var n=parseInt(num);
    var rev = 0;
    var remainder = 0;
    while (n != 0) {
        remainder = n % 10;
        rev = Math.floor(rev * 10 + remainder);
        n = Math.floor(n / 10);
    }
    window.alert("The Reversed number is: " + rev);
    }
    else{
        alert('please enter valid no')
    }
}