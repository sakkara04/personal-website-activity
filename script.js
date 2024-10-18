const colors = ["#afd69b", "#b7cc9d", "#a6dbbc", "#8fb6ab", "#8ca19e", "#b0c4b1"];

function getColor() {
    const i = Math.floor(Math.random() * colors.length);
    return colors[i];
}

document.getElementById("navbar").addEventListener("click", function() {

    navbar.style.backgroundColor = getColor();
});

document.getElementsByClassName("my-picture")[0].onclick = function(){
    alert("that's me!");
}

document.getElementsByClassName("nav-button")[0].onclick = function(){
    alert("content about me coming soon...");
}

document.getElementsByClassName("nav-button")[1].onclick = function(){
    alert("content about my projects coming soon...");
}