var str=document.getElementById("input").value;
function combinations()
{
    var result = [];

    function loop(start,depth,prefix)
    {
        for(var i=start; i<str.length; i++)
        {
            var next = prefix+str[i];
            if (depth > 0)
                loop(i+1,depth-1,next);
            else
                result.push(next);
        }
    }

    for(var i=0; i<str.length; i++)
    {
        loop(0,i,'');
    }

    alert(result);
}