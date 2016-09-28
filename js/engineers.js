var engineers = function () {
    var eng = new Array();

    // Short name = First and second letter of first name + first letter of last name. Anders Persson -> ANP.
    // Pictures should be .png and located in 'Styles/Images/Employees/besing/'
    
    //  emp[x] = new Array( 0               1               2               3               4           5       6               7                       8 )
    //  emp[x] = new Array("SHORT NAME", "FULL NAME", "JOB DESCRIPTION" "RESIDENCE", "PHONE NUMBER", "MAIL", "PICTURE", "X-coordinate on map", "Y-coordinate on map");
    eng[0] = new Array("RIW", "Richard Wihlborg", "Inspection engineer", "H&aumlssleholm", "0705-16 65 82", "richard.wihlborg@smp.sp.se", "besing/riw.png", 36, 354);
    eng[1] = new Array("ROU", "Rolf Uggla", "Inspection engineer", "Trelleborg", "010-516 64 50", "rolf.uggla@smp.sp.se", "besing/rou.png", 25, 373);
    eng[2] = new Array("ANR", "Andreas Raihle", "Inspection engineer", "Sj&oumlbo (Vollsj&ouml)", "010-516 64 59", "andreas.raihle@smp.sp.se", "besing/anr.png", 34, 367);
    eng[3] = new Array("STL", "Stefan Larsson", "Inspection engineer", "Halmstad", "010-516 64 53", "stefan.larsson@smp.sp.se", "besing/stl.png", 21, 338);
    eng[4] = new Array("OLE", "Ola Eriksson", "Inspection engineer", "H&aumlssleholm", "010-516 64 73", "ola.eriksson@smp.sp.se", "besing/ole.png", 36, 354);
    eng[5] = new Array("CLS", "Clas St&aringhlbom", "Inspection engineer", "Varberg", "010-516 64 63", "clas.stahlbom@smp.sp.se", "besing/cls.png", 13, 326);
    eng[6] = new Array("PEA", "Per-Erik Andersson", "Inspection engineer", "Lule&aring", "010-516 64 64", "per-erik.andersson@smp.sp.se", "besing/pea.png", 137, 93);
    eng[7] = new Array("ANJ", "Andreas Jonsson", "Inspection engineer", "Ume&aring (H&oumlrnefors)", "010-516 64 68", "andreas.jonsson@smp.sp.se", "besing/anj.png", 116, 146);
    eng[8] = new Array("MIE", "Mikael Eriksson", "Inspection engineer", "&Oumlrnsk&oumlldsvik (Arn&aumlsvall)", "010-516 64 48", "mikael.eriksson@smp.sp.se", "besing/mie.png", 104, 157);
    eng[9] = new Array("MIO", "Michael &Oumlhrling", "Inspection engineer", "Sundsvall", "010-516 64 67", "michael.ohrling@smp.sp.se", "besing/mio.png", 84, 182);
    eng[10] = new Array("FRH", "Fredrik Hallstr&oumlm", "Inspection engineer", "Vemdalen", "010-516 64 51", "fredrik.hallstrom@smp.sp.se", "besing/frh.png", 42, 182);
    eng[11] = new Array("THL", "Thomas Lindberg", "Inspection engineer", "G&aumlvle", "010-516 64 69", "thomas.lindberg@smp.sp.se", "besing/thl.png", 83, 230);
    eng[12] = new Array("MIA", "Mikael Ahtiainen", "Inspection engineer", "Smedjebacken", "010-516 64 70", "mikael.ahtiainen@smp.sp.se", "besing/mia.png", 73, 244);
    eng[13] = new Array("HEW", "Henrik Westin", "Inspection engineer", "Arvika", "010-516 64 61", "henrik.westin@smp.sp.se", "besing/hew.png", 28, 257);
    eng[14] = new Array("ROS", "Robert Sandstr&oumlm", "Inspection engineer", "Uppsala (Bj&oumlrklinge)", "010-516 64 60", "robert.sandstrom@smp.sp.se", "besing/ros.png", 90, 252);
    eng[15] = new Array("ROD", "Ronnie Dandenell", "Inspection engineer", "Nykvarn", "010-516 64 45", "ronnie.dandenell@smp.sp.se", "besing/rod.png", 90, 272);
    eng[16] = new Array("JAW", "Jan Wallin", "Inspection engineer", "Oskarshamn", "010-516 64 36", "jan.wallin@smp.sp.se", "besing/jaw.png", 71, 326);
    eng[17] = new Array("POE", "Per-Olov Engstr&oumlm", "Inspection engineer", "Storstockholm nordv&aumlst", "010-516 64 66", "per-olov.engstrom@smp.sp.se", "besing/poe.png", 97, 266);
    eng[18] = new Array("PEE", "Per Eriksson", "Inspection engineer", "Storstockholm &oumlst/syd&oumlst", "010-516 64 49", "per.eriksson@smp.sp.se", "besing/pee.png", 97, 266);
    eng[19] = new Array("URA", "Urban Andersson", "Inspection engineer", "&Oumlrebro (Valskog) ", "010-516 64 58", "urban.andersson@smp.sp.se", "besing/ura.png", 69, 263);
    eng[20] = new Array("SPA", "Peter Sp&aringngberg", "Inspection engineer", "Storstockholm syd/sydv&aumlst", "010-516 64 47", "peter.spangberg@smp.sp.se", "besing/spa.jpg", 95, 273);
    eng[21] = new Array("LEA", "Lars E Andersson", "Inspection engineer", "Uppsala", "010-516 64 41", "lars.andersson@smp.sp.se", "besing/lea.png", 90, 252);
    eng[22] = new Array("BOA", "Bo Agmell", "Inspection engineer", "Borgholm", "010-516 64 33", "bo.agmell@smp.sp.se", "besing/boa.png", 81, 330);
    eng[23] = new Array("DAJ", "Daniel Johannesson", "Inspection engineer", "Huskvarna", "010-516 64 54", "daniel.johannesson@smp.sp.se", "besing/daj.png", 45, 308);
    eng[24] = new Array("TOA", "Tommy Axelsson", "Inspection engineer", "V&aumlxj&ouml", "010-516 64 42", "tommy.axelsson@smp.sp.se", "besing/toa.png", 50, 333);
    eng[25] = new Array("ROO", "Roland &Oumlsterlund", "Inspection engineer", "G&oumlteborg", "010-516 64 56", "roland.osterlund@smp.sp.se", "besing/roo.png", 9, 309);
    eng[26] = new Array("JIN", "Jimmy Nilsson", "Inspection engineer", "S&oumllvesborg", "010-516 64 35", "jimmy.nilsson@smp.sp.se", "besing/jin.png", 47, 355);
    eng[27] = new Array("JEN", "Jan-Erik N&aumls", "Inspection engineer", "Norrt&aumllje (Edsbro)", "010-516 64 55", "jan-erik.nas@smp.sp.se", "besing/jen.png", 101, 251);
    eng[28] = new Array("PAN", "Patrik Norbeck", "Inspection engineer", "Storstockholm nord/nordost", "010-516 64 37", "patrik.norbeck@smp.sp.se", "besing/pan.png", 98, 265);
    eng[29] = new Array("KAS", "Kent-&Aringke Sundin", "Inspection engineer", "Str&oumlmsund", "010-516 64 28", "kent-ake.sundin@smp.sp.se", "besing/kas.png", 66, 141);
    eng[30] = new Array("OLA", "Anders Olsson", "Inspection engineer", "Skara", "010-516 64 57", "anders.olsson@smp.sp.se", "besing/ola.jpg",35,290);
    eng[31] = new Array("SAK", "Sven-&Aringke Karlsson", "Inspection engineer", "Trollh&aumlttan", "010-516 64 65", "sven-ake.karlsson@smp.sp.se", "besing/sak.png", 15, 293);
    eng[32] = new Array("TAP", "Claes Tapper", "Inspection engineer", "Mora", "010-516 64 78", "claes.tapper@smp.sp.se", "besing/tapper.png", 50, 223);
    eng[33] = new Array("MAB", "Marcus Tyrstam", "Inspection engineer", "Kisa", "010-516 64 43", "marcus.tyrstam@smp.sp.se", "besing/Blomberg_M.png", 63, 300);
    eng[34] = new Array("CHS", "Charlotte Strandlund", "Inspection engineer", "Fagersta", "010-516 64 08", "Charlotte.Strandlund@smp.sp.se", "besing/chs.png", 74, 252);
    eng[35] = new Array("PESU", "Pentti Suoraniemi", "Inspection engineer", "Eskilstuna", "010-516 64 79", "Pentti.Suoraniemi@smp.sp.se", "besing/pesu.png", 83, 263);
    eng[36] = new Array("JOF", "Jonas Fridh", "Inspection engineer", "Uppsala", "010-516 64 80", "Jonas.Fridh@smp.sp.se", "besing/jof.png", 90, 252);
    eng[37] = new Array("KEN", "Kent Olofsson", "Inspection engineer", "Kiruna", "010-516 64 46", "kent.olofsson@smp.sp.se", "besing/ken.jpg", 108, 31);
    eng[38] = new Array("TLK", "Tommy Karlsson", "Inspection engineer", "Hova", "010-516 64 40", "tommy.karlsson@smp.sp.se", "besing/tlk.png", 43, 280);
    
    //eng[x]= new Array(...);
    // OR eng.push(new Array...));

    return eng;
}

