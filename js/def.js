/*
 * Clears the search input field from characters.
 */
function ClearInputKeywords(elementId) {
    if (elementId == undefined || elementId == '')
        return;

    var elem = document.getElementById(elementId);
    if (elem.value == '') {
        elem.value = "";
        elem.style.color = '#b3b3b3';
    } else {
        elem.value = '';
        elem.style.color = '#000';
    }
}

/*
 * Returns the element with the given id
 */
function getElem(id) {
    return document.all ? document.all[id] : document.getElementById(id);
}

/*
 *
 */
function sendForm(strID) {
    var obj = getElem(strID);

    // If empty input, do nothing (=return)
    if (typeof (obj) + "" == "undefined") {
        return;
    }
            
    var str = obj.value;
    if (str.length > 0) {
        var loc = "sv";
        if (location.href.indexOf("/en/") != -1) {
            loc = "en";
        }
        var href = window.location.href.toString();

        var i = href.indexOf(loc + "/");
        var result = loc;
        result += "/Search/searchresults.html?r=" + parseInt(Math.random() * 10000) + "&words=" + encodeURIComponent(str) + "#" + encodeURIComponent(str);

        window.location.href = window.location.href.substring(0, i) + result;
    }
}

function onSearchLoad() {
    var strWords = "";
    if (typeof (SYS_SearchResultsGetWords) + "" != "undefined") {
        strWords = SYS_SearchResultsGetWords();
    } else {
        strWords = decodeURIComponent(location.hash + "");
        if (strWords.length > 1) {
            strWords = strWords.substr(1);  
        }
    }
    var result = results(0, strWords.split(" "));
    replace_html(document.getElementById("searchResults"), result);
}