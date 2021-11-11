var mcount=3;

function timer()
{

    

    var counter=60;
    setInterval( function()
    {

        counter--;

        if(counter>0)
        {

            id=document.getElementById("count");
            id.innerHTML = counter;

            if(mcount==3)
            {
                document.getElementById("mcount").innerHTML="02";
            }
           

           
        }
        else{

            document.getElementById("count").innerHTML="0";

            counter=60;
            mcount--;
            if(mcount>=0)
            {
                id=document.getElementById("mcount");
                id.innerHTML ="0"+mcount;
            }
            else{
                
                alert("Over");
                location.reload();
                
            }
          
        }

    }, 1000);

}





