    var html = 
    '<header class="topmenu">\
    <div class="navflexcontainer">\
    <div class="homelogo">\
    <a href="Index.html">Home</a>\
    </div>\
    <nav class="navmenu">\
        <div class="burger">\
            <div class="line1"></div>\
            <div class="line2"></div>\
            <div class="line3"></div>\
        </div>\
        <div class="menuoptions">\
        <ul class="links">\
            <li><a href="Portfolio.html">Portfolio</a></li>\
            <li><a href="#">Employees<i class="bx bx-chevron-down"></i></a>\
                <li><a id="subMenu" href="#">Jonas</a></li>\
                <li><a id="subMenu" href="#">Sandra</a></li>\
            </li>\
            <li><a href="Contact.html">Contact</a></li>\
        </ul>\
        </div>\
    </div>\
</nav>';
    
document.getElementById('navmenu').innerHTML = html



