function loadEmp() {
             // emp = shortname for employee
             var emp = QueryString.emp;
             if(emp) {
                 setVisibility(document.getElementById("personal"), "hidden");
                // get the result (=HTML code)
                // 0 indicates NOT a engineer.
                var result = getResult(emp);
                //Show result
                replace_html(document.getElementById("employeeResults"), result);
             }
}

function setVisibility(el, visibility) {
    if( el ) {
                var oldEl = (typeof el === "string" ? document.getElementById(el) : el);
                var newEl = document.createElement(oldEl.nodeName);

                // Preserve any properties we care about (id and class in this example)
                newEl.id = oldEl.id;
                newEl.className = oldEl.className;

                if(oldEl.parentNode)
        	        oldEl.parentNode.replaceChild(newEl, oldEl);
                else
		        oldEl.style.visibility = visibility;

                //return a reference to the new element in case we need it
                return newEl;
	}
}