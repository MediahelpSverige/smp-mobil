var search = function (words) {
    var hitIndex = 7;
    var pages = search_data();
    for (var j = 0; j < pages.length; j += 1) {
        var hits = 0;
        for (var i = 0; i < words.length; i += 1) {
            var pos = 0;
            var done = false;
            while (pos < pages[j][6].length && !done) {
                var index = pages[j][6].toUpperCase().indexOf(words[i].toString().toUpperCase(), pos);
                if (index != -1) {
                    hits += 1;
                    pos = index + 1;
                } else {
                    done = true;
                }
            }
        }
        pages[j][hitIndex] = hits;
    }

    pages.sort(function (a, b) { return b[hitIndex] - a[hitIndex] });
    return pages;
}


var results = function (index, words) {
    var eng = false;
    if (window.location.href.toString().indexOf("/en/") != -1) {
        eng = true;
    }
    var html = "";
    var footer = "";
    var hitIndex = 7;
    var pages = search(words);

    if (pages[0][hitIndex] == 0) {
        html = "<p>Inga resultat för \"";
        if (eng) {
            html = "<p>No results for \"";
        }

        for (var i = 0; i < words.length; i += 1) {
            html += words[i].toLowerCase() + " ";
        }
        html = html.substring(0, html.length - 1);
        html += "\".</p>";
    } else {
        var hits = 0;
        while (hits < pages.length && pages[hits][hitIndex] > 0) {
            hits++;
        }

       
        if (eng) {
            html = "<p>Search for \"";
        } else {
            html = "<p>Sökning på \"";
        }

        for (var i = 0; i < words.length; i += 1) {
            html += words[i].toLowerCase() + " ";
        }
        html = html.substring(0, html.length - 1);
        html += "\".</p>";

        if (hits > 10) {
            var endIndex = index + 10;
            if (hits - index < 10) {
                endIndex = hits;
            }
            
            if (eng) {
                html += "<p>Showing " + (index + 1) + " to " + endIndex + " of totally " + hits + " hit(s).</p>";
            } else {
                html += "<p>Visar " + (index + 1) + " till " + endIndex + " av totalt " + hits + " träff(ar).</p>";
            }

            curPage = (index / 10) + 1;
            footer += "<table border=\"0\" cellpadding =\"0\" cellspacing=\"0\" width=\"100%\">";
            footer += "<tbody>";
            footer += "<tr>";
            footer += "<td align=\"top\" style=\"white-space:nowrap;\" width=\"33%\">";

            if (curPage == 1) {
                
                if(eng) {
                    footer += "Previous "
                } else {
                    footer += "Föregående ";
                }
            } else {
                if(eng) {
                    footer += "<a href=\"javascript:change(" + ((curPage - 2) * 10) + ");\">Previous</a> ";
                } else {
                    footer += "<a href=\"javascript:change(" + ((curPage - 2) * 10) + ");\">Föregående</a> ";
                }
            }

            for (var i = 1; i < curPage; i += 1) {
                footer += "<a href=\"javascript:change(" + ((i - 1) * 10) + ");\">" + i.toString().substring(0, 1) + "</a> ";
            }

            footer += " [" + curPage.toFixed(0) + "] ";

            for (var i = curPage + 1; i < (hits / 10) + 1; i += 1) {
                footer += "<a href=\"javascript:change(" + ((i - 1) * 10) + ");\">" + i.toString().substring(0, 1) + "</a> ";
            }

            if (curPage.toString().substring(0, 1) == ((hits / 10) + 1).toString().substring(0, 1)) {
                if(eng) {
                    footer += "Next ";
                } else {
                    footer += "Nästa ";
                }
            } else {
                if(eng) {
                    footer += "<a href=\"javascript:change(" + (curPage * 10) + ");\">Next</a>";
                } else {
                    footer += "<a href=\"javascript:change(" + (curPage * 10) + ");\">Nästa</a>";
                }
            }

            footer += "</td>";
            footer += "</tr>";
            footer += "</tbody>";
            footer += "</table>";

        } else {
            if(eng) {
                html += "<p>Showing all " + hits + " hit(s).</p>";
            } else {
                html += "<p>Visar alla " + hits + " träff(ar).</p>";
            }
        }

        html += "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n";
        html += "<tr>\r\n<td valign=\"top\">";

        var current = index;
        while (current <= index + 9 && current < hits) {
            var obj = pages[current];
            html += "<a href=\"" + obj[5] + "\" style=\"display:block;\">" + obj[0] + "</a>";

            if (obj.Desc != "") {
                html += "<p>" + obj[1] + "</p>";
            }

            var date = obj[3].split(",");
            var year = date[0];
            var month = date[1];
            if (month == "0") {
                month = "1";
            }
            var day = date[2];
            var hour = date[3];
            var min = date[4];
            html += "<p>" + day + "/" + month + " " + year + " " + hour + ":" + min + "</p>";

            html += "</td>\r\n</tr>\r\n<tr>\r\n<td valign=\"top\"><img src=\"../../Styles/Images/swspace.gif\" width=\"1\" height=\"" + 10 + "\" alt=\"\" />";
            current++;
        }

        html += "</td>\r\n</tr>\r\n";
        html += "</table>\r\n";

        html += footer;
    }
    return html;
}


function change(index) {
	        var strWords = "";
	        if (typeof (SYS_SearchResultsGetWords) + "" != "undefined") {
	            strWords = SYS_SearchResultsGetWords();
	        } else {
	            strWords = decodeURIComponent(location.hash + "");
	            if (strWords.length > 1) strWords = strWords.substr(1);
	        }
	        var result = results(index, strWords.split(" "));
	        replace_html(document.getElementById("searchResults"), result);
	    }