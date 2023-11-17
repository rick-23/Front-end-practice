function vowel() {
    var str = document.getElementById("txt").value;
    alert("Processing");
    var num = str.match(/[aeiou]/gi);
    alert("The number of vowels in the entered string is " + num.length);
}