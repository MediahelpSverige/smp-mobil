
/*
 * Replaces the inner html of the element 'el' with the html 'html'
 */
function replace_html(el, html) {
	if( el ) {
                var oldEl = (typeof el === "string" ? document.getElementById(el) : el);
                var newEl = document.createElement(oldEl.nodeName);

                // Preserve any properties we care about (id and class in this example)
                newEl.id = oldEl.id;
                newEl.className = oldEl.className;

		        newEl.insertAdjacentHTML("afterBegin", html);
                if(oldEl.parentNode)
        	        oldEl.parentNode.replaceChild(newEl, oldEl);
                else
		        oldEl.innerHTML = html;
		    
                //return a reference to the new element in case we need it
                return newEl;
	}
};
