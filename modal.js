

let modal = document.getElementById('new-Modal');
let btn = document.getElementById("new-button");
let span = document.getElementsByClassName("exit-close")[0]; 

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}