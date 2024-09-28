window.onload = function() /*animation on page load */
{
    document.getElementById("h-line").style.width = `80%`
    writeText(0, 50, "unwritten1", "written1")
};

function writeText(i, t, ie, oe) {
    input = document.getElementById(ie).innerHTML;
    document.getElementById(oe).innerHTML += input.charAt(i);
    setTimeout(function(){
        ((i < input.length - 1) ? writeText(i+1, t, ie, oe) : false);
    }, t);
}