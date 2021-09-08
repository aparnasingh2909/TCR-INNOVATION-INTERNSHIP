//box1
var x=document.getElementById("effect-1");
x.addEventListener("mouseover", run1);
x.addEventListener("mouseleave", remove1)
function run1()
{
   var y=document.getElementById("bn1");
   y.style.opacity=1;

   $(".box-1").addClass("hovere");
   $(".heading").addClass("visible");
}

function remove1()
{
    var y=document.getElementById("bn1");
    y.style.opacity=0;
 
    $(".box-1").removeClass("hovere");
    $(".heading").removeClass("visible");
}


// box2
var x=document.getElementById("effect-2");
x.addEventListener("mouseover", run2);
x.addEventListener("mouseleave", remove2)
function run2()
{
   var y=document.getElementById("bn2");
   y.style.opacity=1;

   $(".box-2").addClass("hovere");
   $(".heading-2").addClass("visible");
}

function remove2()
{
    var y=document.getElementById("bn2");
    y.style.opacity=0;
 
    $(".box-2").removeClass("hovere");
    $(".heading-2").removeClass("visible");
}

//box3
var x=document.getElementById("effect-3");
x.addEventListener("mouseover", run3);
x.addEventListener("mouseleave", remove3)
function run3()
{
   var y=document.getElementById("bn3");
   y.style.opacity=1;

   $(".box-3").addClass("hovere");
   $(".heading-3").addClass("visible");
}

function remove3()
{
    var y=document.getElementById("bn3");
    y.style.opacity=0;
 
    $(".box-3").removeClass("hovere");
    $(".heading-3").removeClass("visible");
}
//box4
var x=document.getElementById("effect-4");
x.addEventListener("mouseover", run4);
x.addEventListener("mouseleave", remove4)
function run4()
{
   var y=document.getElementById("bn4");
   y.style.opacity=1;

   $(".box-4").addClass("hovere");
   $(".heading-4").addClass("visible");
}

function remove4()
{
    var y=document.getElementById("bn4");
    y.style.opacity=0;
 
    $(".box-4").removeClass("hovere");
    $(".heading-4").removeClass("visible");
}

