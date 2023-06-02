function openForm(formId) {
    document.getElementById(formId).style.display = "block";
}

function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
}

// init show all item
filterSelection("ingredient", "all");
filterSelection("fishh", "all");
filterSelection("thitt", "all");
// function handle filter
function filterSelection(section, type) {
    var x, i;
    x = document.getElementsByClassName(section);
    if (type == "all") { type = ""; }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        if (x[i].className.indexOf(type) > -1) { x[i].style.display = "block"; }
    }

}


// Handle type button actived
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var sameBtns, j;
        sameBtns = this.parentElement.children;
        for (j = 0; j < sameBtns.length; j++) {
            sameBtns[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}