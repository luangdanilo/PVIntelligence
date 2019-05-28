$(function () {
    loadbar();
	setActive();
	Vmap();
});


function loadbar() {
	$("#header").load("header.html", setActive);
	$("#footer").load("footer.html");
}


function setActive() {
    var obj = document.getElementById("header").getElementsByTagName("a");

    for (var i = 0; i < obj.length; i++) {
        if (document.location.href.indexOf(obj[i].href) >= 0) {
            obj[i].className = "active nav-link text-uppercase font-weight-bold";
        }

    }
}


function Vmap() {
    jQuery(document).ready(function () {
      jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#fff',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#ffffff',
        enableZoom: true,
        hoverOpacity: 0.7,
        normalizeFunction: 'polynomial',
        scaleColors: ['#C8EEFF', '#006491'],
        values: sample_data,
        selectedColor: '#666666',
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "'
                + region
                + '" which has the code: '
                + code.toUpperCase();

            alert(message);
        }
      });
    });
}