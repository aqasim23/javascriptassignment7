var done = false;
function writetoscreen(txt){
    p = document.getElementById("screen");
    if (done == true) {
        done = false;
        p.innerHTML = "";
    }
    p.innerHTML += txt;
    
}

function backspace(){
    p = document.getElementById("screen");
    if (p.innerHTML.length > 0) {
        p.innerHTML = p.innerHTML.slice(0,p.innerHTML.length-1);
    }
}

function calculate() {
    p = document.getElementById("screen");
    p.innerHTML = eval(p.innerHTML);
    done = true;
}
