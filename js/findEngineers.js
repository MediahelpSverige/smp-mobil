

var getEmpByCoords = function (mouseX, mouseY) {
    var eng = engineers();
    for (var i = 0; i < eng.length; i += 1) {
        var x = eng[i][7];
        var y = eng[i][8];
        var dist = (x - mouseX) * (x - mouseX) + (y - mouseY) * (y - mouseY);
        // The distance is now at place 9.
        eng[i].push(dist);
    }
    // Sort the list of engineers according to distance from the coodinates in the map.
    eng.sort(function (a, b) { return a[9] - b[9] });
    return eng;
}


/*
 * To get coordinates on map.
 */
function point_it(event) {
    pos_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("pointer_div").offsetLeft;
    pos_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("pointer_div").offsetTop;
    return new Array(pos_x, pos_y);
}

var findClosestEng = function (e) {
    var result = "";
    // The coordinates on the map
    var coords = point_it(e);
    var x = coords[0];
    var y = coords[1];

    // list of engineers (the five closest)
    var coords = QueryString.coords;
    if (coords == "show") {
        alert("x: " + x + "\ny: " + y);
    } 
    var eng = getEmpByCoords(x, y);
    

    if (document.URL.toString().indexOf("/en/") != -1) {
        result = getEnglishRes(eng);
    } else {
        result = getSwedishRes(eng);
    }

    // Show the results
    replace_html(document.getElementById("resultLabel"), result);
}

/*
 * Returns result in swedish
 */
function getSwedishRes(eng) {
    var result = "";
    for (var i = 0; i < 5; i += 1) {
        // add name
        //result += "<h4 align=\"left\"><a href=\"" + "../../../../sv/Personal/default.html" + "?emp=" + eng[i][0] + "\" >" + eng[i][1] + "</a></h4>";
        result += "<h4 align=\"left\"><a href=\"" + document.URL + "?emp=" + eng[i][0] + "\" >" + eng[i][1] + "</a></h4>";

        result += "<div align='left'>";
        
        // add residence
        result += "<p style='font-weight:bold';>" + eng[i][3] + "</h5>";
        
        // add mail
        result += "<div class='contactPerson'><a href=\"mailto:" + eng[i][5] + "\" style='margin-left:0px';>" + eng[i][5];
        
        //add phone number
        result += "</a><p>Tel: " + eng[i][4] + "</div></div>";
    }

    return result;
}

/*
 * Returns result in english
 */
function getEnglishRes(eng) {
    var result = "";
    for (var i = 0; i < 5; i += 1) {
        // add name
        //result += "<h4 align=\"left\"><a href=\"" + "../../../../en/Personal/default.html" + "?emp=" + eng[i][0] + "\" >" + eng[i][1] + "</a></h4>";
        result += "<h4 align=\"left\"><a href=\"" + document.URL + "?emp=" + eng[i][0] + "\" >" + eng[i][1] + "</a></h4>";

        result += "<div align='left'>";
        
        // add residence
        result += "<p style='font-weight:bold';>" + eng[i][3] + "</h5>";
        
        // add mail
        result += "<div class='contactPerson'><a href=\"mailto:" + eng[i][5] + "\"  style='margin-left:0px';>" + eng[i][5];
        
        //add phone number
        result += "</a><p>Phone: " + "+46 (0)" + eng[i][4].toString().substring(1) + "</div></div>";
    }
    return result;
}
