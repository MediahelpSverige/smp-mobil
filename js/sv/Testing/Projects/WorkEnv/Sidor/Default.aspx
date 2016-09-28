<%@ Page Title="Arbetsmiljö gallringsprocessorer" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="../../../../../Default.aspx.cs" Inherits="_Default"  
    MetaDescription="SMP i Umeå har under hösten och vintern 2004 utfört en arbetsmiljögranskning av 4 st traktormonterade gallringsprocessorer."
    %>

<asp:Content ID="topLinksContainer" runat="server" ContentPlaceHolderID="LanguageContent">
    <a runat="server" href="~/en/Testing/Projects/WorkEnv/Sidor/Default.aspx">View this page in English</a>
</asp:Content>


<asp:Content ID="TopNavigationContainer" runat="server" ContentPlaceHolderID="TopNavContent">
    <li class="nav"><a runat="server" href="~/sv/About/Sidor/Default.aspx"></br>Om SMP</a></li>
    <li class="nav"><a runat="server" href="~/sv/Work/Sidor/Default.aspx"></br>Jobba hos oss</a></li>
    <li class="nav"><a runat="server" href="~/sv/Documents/Sidor/Default.aspx"></br>Dokument</a></li>
    <li class="nav"><a runat="server" href="~/sv/Contact/Sidor/Default.aspx"></br>Kontakta oss</a></li>
    <li class="nav current"><a runat="server" href="~/sv/Testing/Sidor/Default.aspx"></br>Provning</a></li>
    <li class="nav"><a runat="server" href="~/sv/Certification/Sidor/Default.aspx"></br>Certifiering</a></li>
    <li class="nav"><a runat="server" href="~/sv/Inspection/Sidor/Default.aspx"></br>Besiktning</a></li>
	<li class="nav"><a runat="server" href="~/sv/Sidor/Default.aspx"></br>Start</a></li>
</asp:Content>



<asp:Content ID="breadcrumbContainerAndToolboxContainer" runat="server" ContentPlaceHolderID="BreadcrumbContent">
    <a runat="server" href="~/sv/Testing/Sidor/Default.aspx">Provning</a>
                             | 
    <a runat="server" href="~/sv/Testing/Projects/Sidor/Default.aspx">Projekt</a>
                             |
                             Arbetsmiljö gallringsprocessorer
</asp:Content>



<asp:Content ID="toplink" runat="server" ContentPlaceHolderID="LeftMenuTitleContent">
    <a runat="server" href="~/sv/Testing/Sidor/Default.aspx">Provning</a>
</asp:Content>




<asp:Content ID="startLeftNavContainer" runat="server" ContentPlaceHolderID="LeftMenuContent">
    <ul>
    <li class="expanded1"><a runat="server" href="~/sv/Testing/Services/Sidor/Default.aspx" class="hasChildren">Provningstjänster</a>
    </li>
    <li class="expanded1"><a runat="server" href="~/sv/Testing/Projects/Sidor/Default.aspx" class="hasChildrenExpanded">Projekt</a>
        <ul>
			<li><a runat="server" href="~/sv/Testing/Projects/Emissions/Sidor/Default.aspx" class="">Avgasmätningar</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/FrontLoader/Sidor/Default.aspx" class="">Utrustning frontlastare</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/ChainShots/Sidor/Default.aspx" class="">Kedjeskott</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/EnvOils/Sidor/Default.aspx" class="">Miljöanpassade oljor</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/FuelEmi/Sidor/Default.aspx" class="">Bränsle och emissioner</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/Gas/Sidor/Default.aspx" class="">Gengas</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/WorkEnv/Sidor/Default.aspx" class="selectedNav">Arbetsmiljö gallringsprocessorer</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/Vibrations/Sidor/Default.aspx" class="">Vibrationer i traktor</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/EmerStop/Sidor/Default.aspx" class="">Nödstopp för traktorer</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/NoiseVibr/Sidor/Default.aspx" class="">Buller och vibrationer motor-/röjsågar</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/Fuel/Sidor/Default.aspx" class="">Bränsle för motorsågar</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/BicycleHelmets/Sidor/Default.aspx" class="">Cykelhjälmars egenskaper</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/VibrEval/Sidor/Default.aspx" class="">Vibrationer - utvärdering</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/EmiWM/Sidor/Default.aspx" class="">Utsläpp från arbetsmaskiner</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/Biogas/Sidor/Default.aspx" class="">Biogas från arbetsmaskiner</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/EMMA5/Sidor/Default.aspx" class="">Emissionsforskningsprojektet EMMA5</a></li>
                <li><a runat="server" href="~/sv/Testing/Projects/Blueberries/Sidor/Default.aspx" class="">Bärrensning</a></li>
        </ul>
    </li>
    </ul>
</asp:Content>




<asp:Content ID="right" runat="server" ContentPlaceHolderID="RightContent">
    <h3>Relaterad information</h3>
    <div class="contactArea">
        <h4>Kontaktpersoner</h4>
            <h5>Chef för provning Umeå</h5>
                <div class="contactPerson">
                    <a href="mailto:stefan.frisk@smp.sp.se" class="contact">Stefan frisk</a>
                    <p>Tel: 010-516 64 74</p>
                </div>
    </div>
</asp:Content>




<asp:Content ID="left" runat="server" ContentPlaceHolderID="MainContent">
    <div id="ctl00_PlaceHolderMain_empFlash_ctrlRenderPageContent_divPageContent" class="pageContent">
        <h1>Arbetsmiljögranskning av traktormonterade gallringsprocessorer</h1>
        <img class="sectionPicture" src="~/Styles/Images/Pictures/thinning.jpg" runat="server" align="right" style="float:right;height:130px;width:200px;">
        
        <p>SMP i Umeå har under hösten och vintern 2004 utfört en arbetsmiljögranskning av 4 st traktormonterade gallringsprocessorer. 

        <p>Projektet har genomförts med stöd av SLO-fonden vid Kungliga Skogs- och Lantbruksakademien. 
​
        <p>Klicka 
        <a runat="server" href="../../../../../Documents/reports/Traktormonterade_gallringsprocessorer.pdf">här</a>
         för att hämta rapporten "Traktormonterade gallringsprocessorer".
        </p>

        <span>
            <h1 class="newSection">Projektets mål</h1>
            <p>Målet med projektet har varit att undersöka skillnaderna i operatörens arbetsmiljö mellan de olika traktorprocessorerna utifrån ergonomi och säkerhet. SMP har identifierat de allmänna förbättringar som är möjliga, främst ur säkerhetsmässig och ergonomisk synvinkel, och vilka för- och nackdelar de olika typerna av maskiner har.
            </p>
        </span>

        <span>
            <h1 class="newSection">Vad är en gallringsprocessor</h1>
            <img class="sectionPicture" src="~/Styles/Images/Pictures/thinningProcessor.jpg" runat="server" align="right" style="padding-top:5px;float:right;height:300px;width:240px;">
            <p>En traktorprocessor är en maskin som monteras på jordbrukstraktorns trepunktslyft och som drivs hydrauliskt och/eller mekaniskt via traktorns kraftuttag. Processorn upparbetar redan fällda träd som vinschas med rotändan fram till maskinen eller lyfts in med en kran. Vinschen är oftast radiostyrd och kan ibland också köras från maskinen. 
Rotändan placeras mellan maskinens matarvalsar och vinschlinan kopplas loss. Sedan klämmer matarvalsarna åt runt stammen och matar fram den mot ett antal kvistknivar. Det finns även stegmatade modeller som är utrustade med gripklor som klämmer åt runt stammen och matar fram den genom kvistknivarna. 
När en lämplig stocklängd erhållits stannas matningen och stocken kapas med ett sågsvärd. Ofta finns det någon typ av längdmätningsutrustning som hjälp. 
Operatören står normalt bakom traktorn och sköter maskinen från en panel men det finns även modeller som är avsedda att köras från traktorhytten.
            </p>
        </span>

        <span>
            <h1 class="newSection">Sammanfattande synpunkter</h1>
            <p>Alla de provade maskinerna är väl konstruerade och genomtänkta för sitt ändamål.
            De synpunkter som SMP anger i rapporten är tänkta som jämförande mellan de provade maskinerna. Egenskaper som inköpspris, effektivitet och val av arbetsprincip är faktorer som varje köpare själv måste prioritera mellan. 
            Nödstopp/frikoppling av arbetsfunktioner saknas men borde finnas på alla maskiner. 
            Specifikt skydd för att förhindra kedjeskott bakåt finns inte på någon av de testade maskinerna. Sågsvärden är inbyggda i lådor, vilket förhindrar kedjeskott i vissa riktningar. 
            I de flesta fall är det lämpligt att använda en hydraulisk tryckstång mellan traktorn och processorn. Denna gör det möjligt att justera maskinen så att den står horisontellt och därmed kan erbjuda god ergonomi för operatören. 

            <p>En säkerhetskedja bör finnas mellan traktor och processor, som förhindrar att maskinen tippar bakåt om tryckstången lossnar eller brister. 
            Det är en fördel om processorn är utrustad med både kran och vinsch. Kran är det bästa hjälpmedlet för att lägga in fällda träd i processorn. Begränsningen ligger i att man vid gallring måste göra stickvägarna tätare än om man använder sig av en vinsch. Det finns även processorer som är konstruerade så att trädet vinschas hela vägen in till processorn. Vid gallring är vinsch i det närmaste ett krav eftersom det annars blir alltför tätt mellan stickvägarna. 
            Några faktorer som gör att vinschmomentet ofta är betraktat som det mest riskfyllda är att: 

            <p><li>Vinschen i många fall är så stark att den kan stjälpa traktorn, om trädet fastnar </li>
            <li>Operatören kan befinna sig i närheten av träd som vinschas </li>
            <li>När vinschlinan lossas från det invinschade trädet finns risk för klämskador </li>

            <p class="lastSection">När man lägger i träd i processorn med hjälp av en kran kommer rotändan på trädet nära operatörsplatsen. Risk finns för felkörning och trädet kan då träffa operatören.
            </p>
        </span>
    </div>       
</asp:Content>





