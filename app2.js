var k=0;
alert("use arrow up to follow the dark path of my life");
document.onkeydown = checkKey;
var x=document.getElementById('sam');      
var y=390;
var z=150;
var d=10;
function run(txt)
         {
         document.getElementById("fixed").innerHTML ="";
         var i = 0;
         var speed = 30;
         function typeWriter() 
        {
         if (i < txt.length) {
        document.getElementById("fixed").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
        }
         typeWriter();
        }        
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
         y-=d;
        z+=5.3;
        r=z.toString(10);
        

        if(r=="309.00000000000034")
        {var txt="10th board:88% ICSE";
         run(txt);
        }
         
        if(r=="446.80000000000064")
        {var txt="12th board:82% ICSE";
         run(txt);
        }
        if(r=="584.6000000000001")
        {var txt="SRM:7.2 GPA";
         run(txt);
        }
        if(r=="727.6999999999989")
        {var txt="Stuck in Web";
         run(txt);
        }
        if(r=="865.4999999999977")
        {var txt="Exploring the Trends";
         run(txt);
        }
        if(r=="1008.5999999999965")
        {var txt="Getting back to Web";
         run(txt);
        }
        if(r=="1156.9999999999952")
        {location.reload();
        }
        if(k==0)
           k++; 
        else if(y==110 || y==380)
            d=d*-1;
       
        x.style.marginTop=y+"px";
        x.style.marginLeft=z+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        alert(x.style.marginLeft);
    }

}
