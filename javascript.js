document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.height = "50px";
    document.getElementById("box").style.width = "50px";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.5";

});

document.getElementById("button5").addEventListener("click", function(){

    document.getElementById("box").style.transform = "rotate(50deg)"

});


document.getElementById("button6").addEventListener("click", function(){

    document.getElementById("box").style.height = "160px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.transform = "rotate(0deg)"

});