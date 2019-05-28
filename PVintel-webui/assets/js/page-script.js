$(function () {
    loadbar();
    setActive();
});


function loadbar() {
	$("#header").load("header.html", setActive);
	$("#footer").load("footer.html");
}


function setActive() {
    var obj = document.getElementById("header").getElementsByTagName("a");

    for (var i = 0; i < obj.length; i++) {
        if (document.location.href.indexOf(obj[i].href) >= 0) {
            obj[i].className = "active";
        }

    }
}
