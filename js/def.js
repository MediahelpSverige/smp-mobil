


document.addEventListener("DOMContentLoaded", function(event) { 
  var element = document.querySelectorAll(".topAreaContainer img")[2]

  var documentW = window.innerWidth;

  console.log(documentW);

  var header = document.querySelectorAll('.topAreaContainer')

   var oldnav = document.querySelectorAll('.topNavigationContainer');

  var html = '<div class="responsivemenu"><div id="btn-wrap"> <div id="menutoggle" class="bars"><a id="menutogglea"></a></div></div><div  class="popup" ><div class="popcontainer"><a class="popclose"></a><div id="resnav" class="popmenu">'+oldnav[0].innerHTML+'</div></div></div>';

  var div = document.createElement('div');

  //GET THE OLD NAV
  header[0].innerHTML += html;

  var responsivemenu = document.getElementById('resnav');

  

if (documentW < 360) {

     document.querySelectorAll(".topAreaContainer img")[2].style.left = '110px';

      document.querySelectorAll(".topAreaContainer img")[2].style.top = '65px';

          document.querySelectorAll(".topAreaContainer img")[2].style.position = 'absolute';


    console.log('small res')


}else if(documentW < 990 &&  documentW > 360){

     document.querySelectorAll(".topAreaContainer img")[2].style.position = 'absolute';

 document.querySelectorAll(".topAreaContainer img")[2].style.left = '169px';

 document.querySelectorAll(".topAreaContainer img")[2].style.top = '65px';

     console.log('responsive')

   
}
 document.addEventListener('click',function(e){

    var e = e || window.event;

    var target = e.target || e.srcElement;


    if(target.id == 'menutoggle' || target.id == 'menutogglea'){
        header[0].className = 'topAreaContainer popupactive'
    }

    if (target.className == 'popclose') {
        header[0].className = 'topAreaContainer'
    }



 });

});



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

