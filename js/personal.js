
// Returns the employee with shortname equal to 'shortname'
var getEmp = function (shortname) {
    var eng = engineers();
    var emp = employees();

    // Search in list of engineers
    for (var i = 0; i < eng.length; i += 1) {
        if (eng[i][0] == shortname) {
            return new Array(1, eng[i]);
        }
    }
    // Search in list of employees
    for (var i = 0; i < emp.length; i += 1) {
        if (emp[i][0] == shortname) {
            return new Array(0, emp[i]);
        }
    }
    // Not found.
    return null;
}

/*
 * Returns the result (=HTML code) with data from the employee with
 * shortname equal to 'shortname'.
 */
var getResult = function (shortname) {
    var result = "";
    var emp = getEmp(shortname);
    if (emp == null) {
        return "";
    }

    if (document.URL.toString().indexOf("/en/") != -1) {
        result = getEnglishResults(emp);
    } else {
        result = getSwedishResults(emp);
    }

    return result;
}

function getSwedishResults(emp) {
    var employee = emp[1];
    var result = "";
    
    var pictureLocation = "../../../../Styles/Images/Employees/" + employee[6];

    // add picture
    result += "<img class=\"\" src=\"" + pictureLocation + "\" runat=\"server\" align=\"left\" style=\"width:150px;height:225px;margin-right:10px;float:left;\">";

    //add name
    result += "<h1>" + employee[1] + "</h1>";

    //add job description
    result += "<h4>" + swedishJobDescription(employee[2]) + "</h4>";

    //add location (residence)
    //if employee is engineer -> add "Residence:" before location
    if (emp[0]) {
        result += "<p>Bostadsort: " + employee[3] + "</p>";
    }
    else {
        result += "<p>" + employee[3] + "</p>";
    }

    //add mail address
    result += "<div class=\"contactArea\"><div class=\"contactPerson\"><a href=\"mailto:" + employee[5] + "\" class=\"contact\" style=\"margin-left:150px;\">" + employee[5];

    //add phone number
    result +="</a><p>Tel: " + employee[4] + "</p></div>";

    result += "</div>";
    result += "<p class=\"lastSection\"></p>";
    result += "<p class=\"lastSection\"></p>";
    return result;
}

function getEnglishResults(emp) {
    var employee = emp[1];
    var result = "";

    var pictureLocation = "../../../../Styles/Images/Employees/" + employee[6];
    // add picture
    result += "<img class=\"\" src=\"" + pictureLocation + "\" runat=\"server\" align=\"left\" style=\"width:150px;height:225px;margin-right:10px;float:left;\">";

    //add name
    result += "<h1>" + employee[1] + "</h1>";

    //add job description
    result += "<h4>" + employee[2] + "</h4>";

    //add location (residence)
    //if employee is engineer -> add "Residence:" before location
    if (emp[0]) {
        result += "<p>Residence: " + employee[3] + "</p>";
    }
    else {
        result += "<p>" + employee[3] + "</p>";
    }

    //add mail address
    result += "<div class=\"contactArea\"><div class=\"contactPerson\"><a href=\"mailto:" + employee[5] + "\" class=\"contact\" style=\"margin-left:150px;\">" + employee[5];

    //add phone number
    result +="</a><p>Phone: " + employee[4] + "</p></div>";

    result += "</div>";
    result += "<p class=\"lastSection\"></p>";
    result += "<p class=\"lastSection\"></p>";
    return result;
}

/*
 * Translates the job description given in the employee (in english) to swedish.
 */
function swedishJobDescription(jobDescription) {
    var jobs = new Array();

    jobs.push(new Array("Inspection engineer", "Besiktningsingenj&oumlr"));
    jobs.push(new Array("CEO", "VD"));

    jobs.push(new Array("Head of inspection Malm&ouml", "Chef f&oumlr besiktning Malm&ouml"));
    jobs.push(new Array("Head of inspection Ume&aring", "Chef f&oumlr besiktning Ume&aring"));
    jobs.push(new Array("Head of inspection Uppsala", "Chef f&oumlr besiktning Uppsala"));

    jobs.push(new Array("Testing technician", "Provningstekniker"));

    jobs.push(new Array("Support inspection", "Kundservice Besiktning"));

    jobs.push(new Array("Head of marketing and head of certification", "Marknadschef och chef Certifiering"));
    
    jobs.push(new Array("Administrator", "Administrat&oumlr"));

    jobs.push(new Array("Administrator and Support inspection", "Administrat&oumlr och och Kundservice besiktning "));

    jobs.push(new Array("Certifier", "Certifierare"));

    jobs.push(new Array("Test leader", "Provningsledare"));
    jobs.push(new Array("Testing engineer", "Provningstekniker"));
    jobs.push(new Array("Production engineer", "Produktionstekniker"));

    for(var i = 0; i < jobs.length; ++i) {
        if(jobs[i][0] == jobDescription) {
            return jobs[i][1];
        }
    }
    return "";
}