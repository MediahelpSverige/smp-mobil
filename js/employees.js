
var employees = function () {
    var emp = new Array();

    // Short name = First and second letter of first name + first letter of last name. Anders Persson -> ANP.

    //  emp[x] = new Array( 0               1               2               3               4           5       6)
    //  emp[x] = new Array("SHORT NAME", "FULL NAME", "JOB DESCRIPTION", "LOCATION", "PHONE NUMBER", "MAIL", "PICTURE");
    emp[0] = new Array("PES", "Peter St&aringhl", "CEO", "SMP Malm&ouml", "010-516 64 21", "peter.stahl@smp.sp.se", "malmo/peter-stahl.png");
    emp[1] = new Array("JON", "Jan-Olof Nilsson", "Head of technology Malm&ouml", "SMP Malm&ouml", "010-516 64 32", "janolof.nilsson@smp.sp.se", "malmo/jan-olof-nilsson.png");
    emp[2] = new Array("PAO", "Patrik Olsson", "Head of testing Malm&ouml", "SMP Malm&ouml", "010-516 64 34", "patrik.olsson@smp.sp.se", "malmo/patrik-olsson.png");
    emp[3] = new Array("OOM", "Mikael Oom", "Testing engineer", "SMP Malm&ouml", "010-516 64 26", "mikael.oom@smp.sp.se", "malmo/blank.png");
    emp[4] = new Array("STB", "Staffan Brorson", "Testing engineer", "SMP Malm&ouml", "010-516 64 24", "staffan.brorson@smp.sp.se", "malmo/staffan-brorson.png");
    emp[5] = new Array("MAJ", "Magnus Jansson", "Testing engineer", "SMP Malm&ouml", "010-516 64 23", "magnus.jansson@smp.sp.se", "malmo/magnus-jansson.png");
    emp[6] = new Array("EVG", "Eva Grafstr&oumlm", "Support inspection", "SMP Malm&ouml", "010-516 64 30", "eva.grafstrom@smp.sp.se", "malmo/eva-grafstrom.png");
    emp[7] = new Array("TAR", "Torbj&oumlrn Arrland", "Head of inspection Malm&ouml", "SMP Malm&ouml", "010-516 64 19", "torbjorn.arrland@smp.sp.se", "malmo/torbjorn-arrland.jpg");
    emp[8] = new Array("HEH", "Helena Hansson", "Support inspection", "SMP Malm&ouml", "010-516 64 29", "helena.hansson@smp.sp.se", "malmo/helena-hansson.png");
    emp[9] = new Array("JAE", "Jannica Eriksson", "Administrator and Support inspection", "SMP Uppsala", "010-516 64 09", "jannica.eriksson@smp.sp.se", "uppsala/jannica-eriksson.png");
    emp[10] = new Array("PIO", "Pia &Oumlstgaard", "Head of marketing and head of certification", "SMP Uppsala", "010-516 64 07", "pia.ostgaard@smp.sp.se", "uppsala/pia-ostgaard.png");
    emp[11] = new Array("PEH", "Peter Holmgren", "Certifier", "SMP Uppsala", "010-516 64 02", "peter.holmgren@smp.sp.se", "uppsala/peter-holmgren.png");
    emp[12] = new Array("BEZ", "Bengt Zetterstr&oumlm", "Certifier", "SMP Uppsala", "010-516 64 06", "bengt.zetterstrom@smp.sp.se", "uppsala/bengt-zetterstrom.png");
    emp[13] = new Array("JOE", "Joakim Elvius", "Certifier", "SMP Uppsala", "010-516 64 05", "joakim.elvius@smp.sp.se", "uppsala/joakim-elvius.png");
    emp[14] = new Array("STF", "Stefan Frisk", "Head of testing Ume&aring", "SMP Ume&aring", "010-516 64 74", "stefan.frisk@smp.sp.se", "umea/stefan-frisk.png");
    emp[15] = new Array("LOJ", "Louise Johansson", "Test leader", "SMP Ume&aring", "010-516 64 71", "louise.johansson@smp.sp.se", "umea/louise-johansson.png");
    emp[16] = new Array("HAA", "Hans Arvidsson", "Test leader", "SMP Ume&aring", "010-516 64 72", "hans.arvidsson@smp.sp.se", "umea/hans-arvidsson.png");
    emp[17] = new Array("JOG", "Joachim Gr&oumlnlund", "Testing engineer", "SMP Ume&aring", "010-516 64 77", "joachim.gronlund@smp.sp.se", "umea/joachim-gronlund.png");
    emp[18] = new Array("TAN", "Tage Nor&eacuten", "Testing engineer", "SMP Ume&aring", "010-516 64 76", "tage.noren@smp.sp.se", "umea/tage-noren.png");
    emp[19] = new Array("ANS", "Anders Sandberg", "Test leader", "SMP Ume&aring", "010-516 64 75", "anders.sandberg@smp.sp.se", "umea/");
    emp[20] = new Array("JES", "Jessica Sj&oumlgren", "Production engineer", "SMP Malm&ouml", "010-516 64 25", "jessica.sjogren@smp.sp.se", "blank.png");
    emp[21] = new Array("MAK", "Maria Karlsson", "Administrator", "SMP Uppsala", "010-516 64 04", "maria.karlsson@smp.sp.se","uppsala/");
    emp[22] = new Array("JIA", "Jimmy Andersson", "Testing engineer", "SMP Ume&aring", "010-516 64 81", "jimmy.andersson@smp.sp.se", "umea/");
    emp[23] = new Array("STO", "Stefan Olsson", "Test leader", "SMP Malm&ouml", "010-516 64 18", "stefan.olsson@smp.sp.se", "blank.png");
    emp[24] = new Array("SAH", "Sara Hoffman", "Certifier", "SMP Uppsala", "010-516 64 03", "sara.hoffman@smp.sp.se", "uppsala/");


    
    //emp[x] = newArray(...);
    // OR emp.push(new Array(...));

    return emp;
}
