var ele;

function move() {
  var elem = document.getElementById("movingtag");
  var pos = 0;
 ele = setInterval(frame, 5);
  function frame() 
  {
      
        if (pos == 1046 ) 
        {
            pos=0;
        } 
        else 
        {
            pos++; 
            elem.style.left = pos + 'px'; 
            if(pos>=1046)
            {
                pos=0;
            }
        }
  }
}
function stop()
{
   clearInterval(ele);  
}