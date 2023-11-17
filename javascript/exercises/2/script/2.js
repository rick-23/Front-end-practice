
function reverse() {
    var str = document.getElementById("txt").value;
  var temp = '';
    var i = str.length;

    while (i > 0) {
        temp += str.substring(i - 1, i);
        i--;
    }
    alert(temp);
}