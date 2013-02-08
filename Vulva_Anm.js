// ********************************************************************
// Vulva
// Inrapporteringsformulär - Monitor
// ANMÄLAN 1
// Region Alla
// 2011-09-26
// Erik Bülow
//
// ********************************************************************



// HJÄLPTEXTER
//*********************************************************************


// Hemsjukhus
var elementImage6 = document.getElementById(var_ImageControl12_Image);
elementImage6.onclick = function () {
    window.alert("Med 'hemsjukhus' avses i detta fall det sjukhus som remitterat till gynonkolog/det sjukhus varifrån information om uppföljning förväntas inkomma. \n\n Denna information förväntas ifyllas av inrapportörer i region Väst (men visas som ifyllbar i samtliga regioner).");
};

// Ansvarig läkare
var elementImage1 = document.getElementById(var_ImageControl1_Image);
elementImage1.onclick = function () {
    window.alert("Den läkare som ansvarar för att uppgifterna i anmälningsblanketten/canceranmälan är korrekta.\nObligatorisk uppgift för att anmälan skall kunna gälla som canceranmälan\n");
};

// Datum för ifyllande
var elementImage2 = document.getElementById(var_ImageControl2_Image);
elementImage2.onclick = function () {
    window.alert("Obligatorisk uppgift för att anmälan skall kunna gälla som canceranmälan\n");
};

// Diagnosdatum
var elementImage3 = document.getElementById(var_ImageControl3_Image);
elementImage3.onclick = function () {
    window.alert("	Enligt rekommendation från ENCR (European Network of Cancer Registries; http://www.encr.com.fr) \n \t 1.	Datum från första histologi- eller cytologibedömningen. Om flera datum finns att välja på väljs i ordningen; \n\t\t	a)	Provtagningsdatum för prov som resulterar i definitiv cancerdiagnos(PAD eller cytologi), dvs enbart misstanke om malignitet, dysplasi eller atypi gäller inte. \n\t\t b)	ankomstdatum till morfologilaboratorium om provtagningsdatum okänt \n\t\t c)	rapportdatum från ovannämnda om båda ovanstående datum okända \n\n Andra möjliga alternativ till diagnosdatum (om cytologisk eller histologisk undersökning ej föreligger) kan enligt ENCR vara; \n\t 2.	Inskrivningsdatum på sjukhus pga tumörsjukdom \n\t 3.	Polikliniskt mottagningsbesök pga tumörsjukdom \n\t 4.	Datum för annan klinisk diagnos av tumörsjukdom \n\t 5.	Dödsdatum (tumörsjukdomen kan ha varit känd tidigare, men dokumentation om detta föreligger ej) ej inkluderbar i kvalitetsregistret \n\t 6.	Dödsdatum då tumörsjukdom upptäckts först vid obduktion ej inkluderbar i kvalitetsregistret \n\n Diagnosdatum senare än behandlingsstart eller datum för beslut att avstå från behandling eller datum senare än dödsdatum får ej väljas.")
};

// Diagnos; tumörens lokalisation anges så specificerat som möjligt
var elementImage4 = document.getElementById(var_ImageControl4_Image);
elementImage4.onclick = function () {
    window.alert("Tumörens lokalisation skall i canceranmälan anges i klartext så specifikt som möjligt (t ex  labium majus dx).");
};

// ICD-10-kod
var elementImage5 = document.getElementById(var_ImageControl13_Image);
elementImage5.onclick = function () {
    window.alert("Koder märkta med * är anmälningspliktiga till cancerregistret men ingår inte i kvalitetsregistret \n\n\t N90.2* \t Grav dysplasi som ej angetts som VIN 3 \n\t D07.1*	\t	Carcinoma in situ i vulva, VIN 3 \n\t D04.5*	\t		Cancer in situ på perianala huden \n\t D03.5*	\t		Melanom in situ i vulva och perianalt \n\t D39.7A* \t	Tumör av patologiskt okänd natur i vulva \n\t D39.7B* \t	Tumör av kliniskt okänd natur i vulva (PAD saknas) \n\t C51.0 \t 	Malign tumör i labium majus (inklusive Bartholins körtel) \n\t C51.1 \t 	Malign tumör i labium minus  \n\t C51.2 \t 	Malign tumör i klitoris \n\t C51.8 \t 	Malign tumör i vulva med övergripande växt \n\t C51.9 \t 	Icke specificerad lokalisation av malign tumör i vulva (Pudendum, Yttre kvinnliga genitalia UNS)"); 
};

// FIGO
var elementImageFIGO = document.getElementById(var_ImageControl14_Image);
elementImageFIGO.onclick = function () {
    window.alert("I fall av tveksamhet är regeln att för klassifikation välja det lägre stadiet. Behandlingen styrs dock i dessa fall vanligen av det misstänkta högre stadiet. I de fall substadium finns (IA, IB, IIIA, IIIB, IIIC, IVA, IVB) skall sådant åsättas och stadium I, III eller IV är således inte valbart. Om stadium, trots ovanstående regel, inte kan åsättas på grund av saknade uppgifter, väljs alternativet X");
};

// Diagnosgrund
var elementImage7 = document.getElementById(var_ImageControl5_Image);
elementImage7.onclick = function () {
    window.alert("Diagnosgrund är en variabel som är oberoende av diagnosdatum. Det föreligger ofta flera olika diagnosgrunder. Val av diagnosgrund ska göras så att den säkraste grunden prioriteras, dock skall obduktion ej väljas om annan diagnosgrund finns. Patologi anses säkrare än cytologi och röntgen eller datortomografi anses säkrare än en klinisk undersökning. \n\n Diagnosgrunden ”annan laboratorieundersökning” möjliggör en mer specifik SNOMED-kod än diagnosgrund ”klinisk undersökning”, ”röntgen etc”, ”operation utan histopatologisk undersökning” och ”obduktion utan histopatologisk undersökning” och bör därför väljas framför dessa alternativ. Denna diagnosgrund används f n sällan. \n\n ”Cytologisk undersökning” är ofta den första diagnosgrunden. Om ingrepp med PAD därefter görs, bör diagnosgrunden uppgraderas till ”provexcision eller op m histopatol undersökn”. Diagnosdatum blir dock oförändrat.");
};

// Morfologisk diagnos (i klartext)
var elementImage8 = document.getElementById(var_ImageControl6_Image);
elementImage8.onclick = function () {
    window.alert("Anges i klartext (t ex skivepitelcancer)");
};

// Diagnostiserande patologi- eller cytologiavdelning eller anann avdelning
var elementImage18 = document.getElementById(var_ImageControl7_Image);
elementImage18.onclick = function () {
    window.alert("Klartext\n");
};

// Preparatnummer/år
var elementImage9 = document.getElementById(var_ImageControl8_Image);
elementImage9.onclick = function () {
    window.alert("Ange det FÖRSTA PAD/CYT som är grundval för definitiv diagnos.\n");
};

// Morfologi bedömt av referenspatolog (eftergranskat)
var elementImage10 = document.getElementById(var_ImageControl9_Image);
elementImage10.onclick = function () {
    window.alert("Vid anmälan från kvinnoklinik vet man ofta inte om PAD kommer att eftergranskas eller inte och markerar då okänt. Anmälningsblankett skall också inskickas från gynonkologisk enhet och uppgifterna kan då kompletteras. Ibland kan man ha fått remissvar, som anger att eftergranskning skett, men man känner inte till PAD-nummer etc; man kryssar då för ja, PAD-nr etc. okänt");
};

// Patologi eller cytologiavdelning för eftergranskat preparat
var elementImage11 = document.getElementById(var_ImageControl16_Image);
elementImage11.onclick = function () {
    window.alert("Klartext, kan vara samma avdelning som ovan\n");
};

// Remiss till gynonkologisk enhet
var elementImage22 = document.getElementById(var_ImageControl15_Image);
elementImage22.onclick = function () {
    window.alert("Kvalitetsparameter, uppgiften hjälper monitor att vid behov eftersöka ytterligare blanketter\n");
};

// Var planeras primäroperation utföras/var har den utförts?
var elementImage13 = document.getElementById(var_ImageControl10_Image);
elementImage13.onclick = function () {
    window.alert("Uppgiften hjälper monitor att vid behov eftersöka kirurgblankett.\n");
};

// Remiss till anan sjukvårdsinrättning/motsvarande
var elementImage14 = document.getElementById(var_ImageControl11_Image);
elementImage14.onclick = function () {
    window.alert("Uppgiften hjälper monitor att vid behov eftersöka ytterligare blanketter\n");
};



// ************************
// * Funktionsbibliotek*
// ************************

//**********************************************************************************************************************************************************************
//Länkar
function setFunctionForLink(varID, phref, ptarget, URL, strWindowName, width, height, top, left) {
    elementReference = getRefToElement(varID);

    if (!elementReference) {
        return false; // Avbryt
    }

    elementReference.href = phref;
    elementReference.target = ptarget;
    elementReference.onclick = function () {
        //	newWindow = window.open(elementReferenceURL.href, strArgWindowNameForOpen, setWindowFeatures(width, height, top, left));
        window.open(URL, strWindowName, setWindowFeatures(width, height, top, left));
    }
}

// Skapa en parametersträng med WindowFeatures
function setWindowFeatures(width, height, top, left) {
    var strWindowFeatures = '';

    var strArgWidthForOpen = 'width =' + width;
    var strArgHeightForOpen = 'height =' + height;
    var strArgTopForOpen = 'top =' + top;
    var strArgLeftForOpen = 'left =' + left;
    var strArgResizeable = 'resizable=yes';

    strWindowFeatures = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,' + strArgResizeable + ',' + strArgWidthForOpen + ',' + strArgHeightForOpen + ',' + strArgTopForOpen + ',' + strArgLeftForOpen;

    return strWindowFeatures;
}

function clickTillAtgard() {
    var Upp = getRefToElement(var_LinkControl5_Link); // skapar objekt för länk till åtgärder

    if (!Upp) {
        return false;
    }
    else {
        Upp.href = '#var_LinkControl5_Link';
        Upp.target = '_self';
        SetFocusToddEvent();
    }
}

//***************************************************************************************************************************************
//ÄNDRA HÄR FÖR SIMULERING ---ÄNDRA HÄR FÖR SIMULERING---ÄNDRA HÄR FÖR SIMULERING---
//***************************************************************************************************************************************
// *** Sätt ett personnummer, kön och LKF för test i formulärverktygets förhandsgranskning
//changeValue( var__PERSNR_Val, '19121212-1212' )
//changeValue( var__SEX_Val, 'M' );
//changeValue( var__LKF_Val, '178213' );
//***************************************************************************************************************************************
// Lägg till hantering av onClick på knappen Utför i ärendepanelen

// OBS OBS OBS----För att använda formuläret i SKARP INRAPPORTERING-----TA BORT KOMMENTERING  av följande rad.---------
// För att testa formuläret i FÖRHANDSGRANSKA----KOMMENTERA följande rad

setFunctionForOnClick('OverviewErrandHandler_btnSlutfor', clickUtfor); // -------Skarp inrapportering: TA BORT kommentering ----Förhandsgranska: KOMMENTERA

// OBS OBS OBS ---- För att använda formuläret i SKARP INRAPPORTERING----- KOMMENTERA  följande rad.---------
// För att testa formuläret i FÖRHANDSGRANSKA----TA BORT KOMMENTERING av följande rad.--------

//	simuleraUtfor(); // -------Skarp inrapportering: KOMMENTERA---- Förhandsgranska: TA BORT kommentering
//*********************************************************************************************************************************
// En funktion för att kontrollera om åtgärden Klar är vald i ärendepanelen (value == 2)
// ID på kontrollen som innehåller valbara åtgärder är "välkänd"! (OverviewErrandHandler_ddEvent)
//*********************************************************************************************************************************

function eventKlarForGodkannade() {
    elementReference = getRefToElement('OverviewErrandHandler_ddEvent');

    if (!elementReference) {
        // OBS OBS OBS --Skarp inrapportering: TA BORT kommentering av följande rad ---- Förhandsgranska: KOMMENTERA 
        return false; // Avbryt   

        // OBS OBS OBS --Skarp inrapportering: KOMMENTERA följande två rader ---- Förhandsgranska: TA BORT kommentering
        //		window.alert(' Det finns ingen ärendepanel att välja åtgärd i.  Formuläret simulerar att åtgärden Klar för godkännande är vald.' );
        //		return true; // används för test i formulärverktyget 

    }

    if (elementReference.value == 24) {
        return true;
    }
    else {
        return false;
    }
}

function eventKlar() {
    elementReference = getRefToElement('OverviewErrandHandler_ddEvent');

    if (!elementReference) {

        // OBS OBS OBS --Skarp inrapportering: TA BORT kommentering av följande rad ---- Förhandsgranska: KOMMENTERA 
        return false; // Avbryt  ------Skarp inrapportering: TA BORT kommentering ----Förhandsgranska: KOMMENTERA

        // OBS OBS OBS --Skarp inrapportering: KOMMENTERA följande två rader ---- Förhandsgranska: TA BORT kommentering
        //window.alert(' Det finns ingen ärendepanel att välja åtgärd i.  Formuläret simulerar att åtgärden Klar är vald.' );
        //return true; // används för test i formulärverktyget 
    }

    if (elementReference.value == 2) {
        return true;
    }
    else {
        return false;
    }
}

//***SLUT ÄNDRA FÖR SIMULERING
//**************************************************************************************************************************************
// En funktion som simulerar knappen Utför. 
// För att testa i formulärverktyget när ett formulär förhandsgranskas låter jag fältet för  Remissdatum 
// reagera på onClick med samma beteende som en tryckning på knappen Utför utlöser.

function simuleraUtfor() {
    window.alert(' Det finns ingen knapp Utför. Låt rubriken simulera knappen Utför');
    elementReference = getRefToElement(var_HeaderControl1_Head);
    elementReference.onclick = clickUtfor;
    return true;
}

//**********************************************************************************************************************************************************************
//FORMULÄRBEROENDE FUNKTIONER---FORMULÄRBEROENDE FUNKTIONER---FORMULÄRBEROENDE FUNKTIONER
//ÄNDRA VÄRDEN---ÄNDRA VÄRDEN---ÄNDRA VÄRDEN---ÄNDRA VÄRDEN---ÄNDRA VÄRDEN---ÄNDRA VÄRDEN---ÄNDRA VÄRDEN
//**********************************************************************************************************************************************************************
//CLICKUTFÖR ---  CLICKUTFÖR --- CLICKUTFÖR --- CLICKUTFÖR --- CLICKUTFÖR --- CLICKUTFÖR
//*******************************************************************************************
//Funktion som sätter upp en array med alla variabler som skall kontrolleras eftersom de är obligatoriska:
//*******************************************************************************************
function clickUtfor(e) {

    if (!e) {
        var e = window.event;
        // e gives access to the event in all browsers
    }

    var bPassedCheck = true;
    var sErrorMessage = '';
    var arrayFunctions = new Array();
    var arrayErrorFields = new Array();
    var arrayResult = new Array(0, 0);

    //	AktiveraAlla();

    var n = 0 	//nästa index nr!

    var DenValda = ChoosenEvent();
    if (DenValda == '6')					// Avbryt och radera  
    {
        if (!VarnaDialog()) {
            HideProgressBar();  // finns, från Sogeti
            AbortEvent(e);   // finns, från Sogeti
            return false;
        }
    }


 // HÄR BÖRJAR DEN EGNA KODEN FÖR OBLIGATORISKA VARIABLER
 
    var elementRemissGynOnk = getRefToElement(var_T464673_Val);
    var elementPrimOp = getRefToElement(var_T464677_Val);
    var elementRemissAnnan = getRefToElement(var_T464681_Val);

	// uppgifter om hemsjukhus
	var elementAnmSjPatHemSj = getRefToElement(var_T464651_Val);
	if (elementAnmSjPatHemSj.value == '5384')   // Om NEJ är vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464652_Val, var_T464652_Desc); // Ange hemsjukhus i klartext 
        arrayFunctions[n++] = CheckIfNull(var_T464653_Val, var_T464653_Desc); // hemsjukhus kod
        arrayFunctions[n++] = CheckIfNull(var_T464654_Val, var_T464654_Desc); // hemklinik kod
    }

	
    arrayFunctions[n++] = CheckIfNull(var_T464655_Val, var_T464655_Desc); //  Ansvarig läkare
    arrayFunctions[n++] = CheckIfNull(var_T464656_Val, var_T464656_Desc); //  Datum för ifyllande
    arrayFunctions[n++] = CheckIfNull(var_T464657_Val, var_T464657_Desc); //  Diagnosdatum
    arrayFunctions[n++] = CheckIfNull(var_T464658_Val, var_T464658_Desc); //  Diagnos
    arrayFunctions[n++] = CheckIfNull(var_T551858_Val, var_T551858_Desc); //  ICD-10 kod
    arrayFunctions[n++] = CheckIfNull(var_T464660_Val, var_T464660_Desc); //  Diagnosgrund
    arrayFunctions[n++] = CheckIfNull(var_T464662_Val, var_T464662_Desc); //  Morfologisk diagnos
    arrayFunctions[n++] = CheckIfNull(var_T464663_Val, var_T464663_Desc); //  Patologenhet
    arrayFunctions[n++] = CheckIfNull(var_T464670_Val, var_T464670_Desc); //  Preparatnummer
    arrayFunctions[n++] = CheckIfNull(var_T464667_Val, var_T464667_Desc); //  Preparatår
    arrayFunctions[n++] = CheckIfNull(var_T464668_Val, var_T464668_Desc); //  Morfologi bedömd av referenspatolog
    arrayFunctions[n++] = CheckIfNull(var_T464673_Val, var_T464673_Desc); //  Remiss till gynonkologisk enhet
    arrayFunctions[n++] = CheckIfNull(var_T464677_Val, var_T464677_Desc); //  Primäroperation
    arrayFunctions[n++] = CheckIfNull(var_T464681_Val, var_T464681_Desc); //  Remiss till annan sjukvårdsinrättning
    arrayFunctions[n++] = CheckIfNull(var_T551857_Val, var_T551857_Desc); //  FIGO-stadium

	var elementMorfBedomd = getRefToElement(var_T464668_Val);
    if (elementMorfBedomd.value == '10571')   // Om JA är vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464661_Val, var_T464661_Desc); //  Morfologi bedömd av referenspatolog patologiavdelning
        arrayFunctions[n++] = CheckIfNull(var_T464664_Val, var_T464664_Desc); //  Morfologi bedömd av referenspatolog prepnr
        arrayFunctions[n++] = CheckIfNull(var_T464672_Val, var_T464672_Desc); //  Morfologi bedömd av referenspatolog prepår
    }
    if (elementRemissGynOnk.value == '5385')   // Om JA är vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464669_Val, var_T464669_Desc); //  Remiss till gynonkologisk enhet, vilken
    }
    if (elementPrimOp.value == '10576')   // Om Annan enhet är vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464674_Val, var_T464674_Desc); //  Primärop på annan enhet, vilken
    }
    if (elementRemissAnnan.value == '5385')   // Om JA är vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464678_Val, var_T464678_Desc); //  Remiss till annan sjukvårdsinrättning, vilken
    }

    //AKTA !!!! de termerna som blir obligatoriska beroende på ett vilkor, skall återställas i ursprunglig style innan vilkoret körs!.
 
	RestoreController(var_T464652_Val, var_T464652_Desc); //  hemsjukhus i klartext
	RestoreController(var_T464653_Val, var_T464653_Desc); //  hemsjukhus kod
	RestoreController(var_T464654_Val, var_T464654_Desc); //  hemklinik kod
    RestoreController(var_T464655_Val, var_T464655_Desc); //  Ansvarig läkare
    RestoreController(var_T464656_Val, var_T464656_Desc); //  Datum för ifyllande
    RestoreController(var_T464657_Val, var_T464657_Desc); //  Diagnosdatum
    RestoreController(var_T464658_Val, var_T464658_Desc); //  Diagnos
    RestoreController(var_T551858_Val, var_T551858_Desc); //  ICD-10 kod
    RestoreController(var_T551857_Val, var_T551857_Desc); //  FIGO-stadium
    RestoreController(var_T464660_Val, var_T464660_Desc); //  Diagnosgrund
    RestoreController(var_T464662_Val, var_T464662_Desc); //  Morfologisk diagnos
    RestoreController(var_T464661_Val, var_T464661_Desc); //  Patologenhet
    RestoreController(var_T464670_Val, var_T464670_Desc); //  Preparatnummer
    RestoreController(var_T464667_Val, var_T464667_Desc); //  Preparatår
    RestoreController(var_T464668_Val, var_T464668_Desc); //  Morfologi bedömd av referenspatolog
    RestoreController(var_T464661_Val, var_T464661_Desc); //  Morfologi bedömd av referenspatolog patologiavdelning
    RestoreController(var_T464664_Val, var_T464664_Desc); //  Morfologi bedömd av referenspatolog prepnr
    RestoreController(var_T464672_Val, var_T464672_Desc); //  Morfologi bedömd av referenspatolog prepår
    RestoreController(var_T464673_Val, var_T464673_Desc); //  Remiss till gynonkologisk enhet
    RestoreController(var_T464669_Val, var_T464669_Desc); //  Remiss till gynonkologisk enhet, vilken
    RestoreController(var_T464677_Val, var_T464677_Desc); //  Primäroperation
    RestoreController(var_T464674_Val, var_T464674_Desc); //  Primärop på annan enhet, vilken
    RestoreController(var_T464681_Val, var_T464681_Desc); //  Remiss till annan sjukvårdsinrättning
    RestoreController(var_T464678_Val, var_T464678_Desc); //  Remiss till annan sjukvårdsinrättning, vilken

    // Checkar om ”klar”, ”klar för godkännande och Kontrollera Indata är markerad visas här under. Jag väljer att ta bara klar.
    // bytt if satsen i fall du vill ha flera åtgärder checkade.


    if (eventKlar()) {
        // Kontrollera alla objekt i listan
        for (i = 0; i < arrayFunctions.length; i++) // exekverar alla funktioner och får vid fel tillbaka variabel, felbeskrivning, och titel
        {
            arrayResult[i] = arrayFunctions[i];
            if (arrayResult[i][0].length > 0) {
                sErrorMessage = sErrorMessage + arrayResult[i][1];
            }
        }
        // Alla objekt är kontrollerade. De som inte uppfyller önskade villkor ska markeras med röd text och
        // och rosa babkgrund.
        // Objekt som uppfyller villkoren återställs till normal visning
        for (i = 0; i < arrayFunctions.length; i++) // rödmarkera
        {
            // Återställ visninsgformat på alla obligatoriska variabler
            var obj = document.getElementById(arrayResult[i][0]);

            RestoreController(arrayResult[i][0], arrayResult[i][2]);
            obj.title = arrayResult[i][1];

            // Rubrik ska skrivas med röd text och variabler ska få rosa bakgrund
            // om ett obligatoriskt fält saknar värde.
            // Markering av fält utförs endast när komplettering INTE är markerad
            if (!checkKomplettering()) {
                if (arrayResult[i][1].length > 0) {
                    bPassedCheck = false;

                    var obj = document.getElementById(arrayResult[i][0]);

                    ChangeStyleController(arrayResult[i][0], arrayResult[i][2]);
                    obj.title = arrayResult[i][1];
                }
            }
        }
        // Iterera i listan tills det första objektet som är felaktigt påträffas. Sätt fokus på fältet och avbryt iterationen
        if (!checkKomplettering()) {
            for (i = 0; i < arrayFunctions.length; i++) // sätt fokus på första felet
            {
                if (arrayResult[i][0].length > 0) {
                    var objFirstHit = document.getElementById(arrayResult[i][0]);
                    objFirstHit.focus()
                    break;
                }
            }
        }

    }
    // Kan aldrig inträffa när komplettering är markerad
    if (bPassedCheck == false) {
        window.alert('Formuläret kunde inte skickas på grund av följande problem:' + '\n\n' + sErrorMessage);
        HideProgressBar();  // finns, från Sogeti
        AbortEvent(e);   // finns, från Sogeti
        return false;
    }
    // Kontrollera om ärendepanelen innehåller en kontroll för information om koppling. 
    var KopplaFinns = GetRefToSeveral('OverviewErrandHandler_ConnectionInfoLabel'); 	//ENDAST MONITOR 
    if (KopplaFinns) {
        var DenValda = ChoosenEvent();
        var KopplaLabel = document.getElementById('OverviewErrandHandler_ConnectionInfoLabel');
        //  Åtgärder som testas är de åtgärder som avslutar eller delsparar ett ärende och skapar eller uppdaterar en registerpost. Åtgärderna Klar och åtgärder med delspara.	
        if ((DenValda == '2') || (DenValda == '4') || (DenValda == '23') || (DenValda == '28') || (DenValda == '29')) {
            if ((KopplaLabel.innerHTML == '') || (KopplaLabel.innerHTML == ' ') || (KopplaLabel.innerHTML.match("Ej kopplad"))) {
                if (!KopplaDialog()) {
                    HideProgressBar();  // finns, från Sogeti
                    AbortEvent(e);   // finns, från Sogeti
                    return false;
                }
            }
        }
    }

    AktiveraAlla();
}
//***********************************************************************************************************
// En funktion för att kontrollera om ”inrapportering avser komplettering /rättning” är ikryssad.
//***********************************************************************************************************
function checkKomplettering() {
    elementReference = getRefToElement(var_T464649_Val); //OBS OBS OBS OBS OBS ÄNDRA VÄRDE OBS OBS OBS
    if (!elementReference) {
        return; //Avbryt
    }
    else {
        if (elementReference.checked == true) {
            return true;
        }
        else {
            return false;
        }
    }
}

//**********************************************************************************************************************************************************
//AKTIVERA / INAKTIVERA --- AKTIVERA / INAKTIVERA --- AKTIVERA / INAKTIVERA --- AKTIVERA / INAKTIVERA 
//**********************************************************************************************************************************************************
// ICD-10 kod T73349
// FIGO stadium T342237
// 
// Kontrollera vilken ICD-10 kod som är vald
/*function toggleICD10() {
elementArray = new Array(1);
elementArray[0] = var_T338548_Val; // Pariga organ sida

elementICD10 = getRefToElement(var_T73349_Val);

if (!elementICD10) {
return; //Avbryt
}
// <option value="7520"> </option>
// <option value="7596">C 48.1 Peritonealcancer med specificerad lokalisation</option>
// <option value="7592">C 48.2 Peritonealcancer NOS</option>
// <option value="7526">C 56.9 Ovarialcancer</option>
// <option value="7527">C 57.0 Tubarcancer</option>
// <option value="7593">C 76.2 Cancer abdominis</option>
// <option value="7594">C 76.3 Cancer pelvis</option>
// <option value="7597">D 07.3 Cancer in situ i äggledare</option>
// <option value="7595">D 39.1 Borderlinetumör i ovarium</option>
switch (elementICD10.value) {
case '7527':
// C57.0 Tubarcancer
enableElements(elementArray); // Aktivera
break;
case '7596':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // Töm innehåll
break;
case '7592':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // Töm innehåll
break;
case '7526':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // Töm innehåll
break;
case '7593':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // Töm innehåll
break;
case '7594':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // Töm innehåll
break;
case '7597':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // Töm innehåll
break;
case '7595':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // Töm innehåll
break;
default:
// inget
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // Töm innehåll
} // switch
}
*/


// Om anmälande enhet inte samma som hemsjukhus
function toggle_hemsjukhus() {
    elementArray = new Array();
	elementArray.push(var_T464652_Val); // hemsjukhus i klartext
	elementArray.push(var_T464653_Val); // hemsjukhus kod
	elementArray.push(var_T464654_Val); // hemklinik kod
	
    var elementAnmSjPatHemSj = getRefToElement(var_T464651_Val); //  anmälande enhet = hemsjukhus?

    if (elementAnmSjPatHemSj.value == '5384')   // Om NEJ är vald
    {
        enableElements(elementArray); // Aktivera
    }
    else if (elementAnmSjPatHemSj.value == '5385')   // Om JA är vald
	{
		disableElements(elementArray); // Annars avaktivera 
		PickUpValueEJtom(var_T464652_Val, var_T464644_Val); // inrapporterande enhet i klartext kopieras till hemsjukhus
		PickUpValue(var_T464653_Val, var_T464645_Val); // inrapporterande enhet (dold i inrapportörs formulär)
		PickUpValue(var_T464654_Val, var_T464646_Val); // inrapporterande enhet (dold i inrapportörs formulär)
	}
	else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // Töm innehåll
    }
}



// Om Morfologi bedömd av referenspatolog
function toggle_MorfologiBedomd() {
    elementArray = new Array(4);
    elementArray[0] = var_T464661_Val; // Patologi eller cytologiavsdelning
    elementArray[1] = var_T464671_Val; // Preparatnummer eftergranskat
    elementArray[2] = var_T464664_Val; // Preparatets registreringsår eftergranskat
    elementArray[3] = var_T464672_Val; // Patologi- eller cytologiavd (eftergransk) kod

    var elementMorfBedomd = getRefToElement(var_T464668_Val); //  Morfologi bedömd 

    if (elementMorfBedomd.value == '10571')   // Om JA är vald
    {
        enableElements(elementArray); // Aktivera
    }
    else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // Töm innehåll
    }
}

//***********************************************************************************************************************
// Om Remiss till gynonkologisk enhet
function toggle_RemissGynOnk() {
    elementArray = new Array(3);
    elementArray[0] = var_T464669_Val; // Ja, vilken
    elementArray[1] = var_T464679_Val; // Sjukhus dit remiss är ställd (kod)
    elementArray[2] = var_T464676_Val; // Klinik dit remiss är ställd (kod)

    var elementRemissGynOnk = getRefToElement(var_T464673_Val); //  Remiss till gynonk

    if (elementRemissGynOnk.value == '5385')   // Om JA är vald
    {
        enableElements(elementArray); // Aktivera
    }
    else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // Töm innehåll
    }
}

//***********************************************************************************************************************
// Primäroperation 
function toggle_Primoperation() {
    var elementArray = new Array(1);
    elementArray[0] = var_T464674_Val; // Ja, annan enhet spec
    elementArray[1] = var_T464675_Val; // Ja, annan enhet spec Sjukhuskod
    elementArray[2] = var_T464680_Val; // Ja, annan enhet spec Klinikkod

    var elementRemissAnnan = getRefToElement(var_T464677_Val); //  Primäroperation

    if (elementRemissAnnan.value == '10576')   // Om JA är vald
    {
        enableElements(elementArray); // Aktivera
    }
    else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // Töm innehåll
    }
}

//***********************************************************************************************************************
// Om Remiss till annan sjukvårdsinrättnig
function toggle_RemissAnnan() {
    elementArray = new Array(3);
    elementArray[0] = var_T464678_Val; // Ja, vilken
    elementArray[1] = var_T464683_Val; // Sjukhus dit remiss är ställd
    elementArray[2] = var_T464682_Val; // Klinik dit remiss är ställd

    var elementRemissAnnan = getRefToElement(var_T464681_Val); //  Remiss till gynonk

    if (elementRemissAnnan.value == '5385')   // Om JA är vald
    {
        enableElements(elementArray); // Aktivera
    }
    else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // Töm innehåll
    }
}

//SLUT AKTIVERA/INAKTIVERA---
//************************************************************************************************************************************************************************
// FORMULÄRBEROENDE DATUMFUNKTIONER --
//************************************************************************************************************************************************************************

//****************************************************************************************
//Kontrollerar att inrapporteringsdatum <= dagens datum
function CheckInrappdatum() {
    if (IsDate(var_T464642_Val) == false)	// Sogetis funktions som SKALL finnas innan. 
    {
        //			this.focus();  
        return;
    }
    if (IsOldDate(var_T464642_Val) == false) // anropet till funktionen.  Returnerar true ifall datumet är < = dagens   
    {
        this.focus();
        return;
    }
}

//*****************************************************************************************
//En funktion för att läsa in personnummer och beräkna ålder vid diagnos 
//*****************************************************************************************
//Räknar ut ålder vid diagnosdatum
//Kontroll att diagnosdatum <= dagens datum sker  i funktionen calcAlderVidDiagnosdatum 

function calcAlderVidDiaDatum() {
    if (IsDate(var_T464657_Val) == false) //OBS OBS OBS OBS OBS ÄNDRA VÄRDE OBS OBS OBS
    {
        // window.alert('Felaktigt datumformmat');
        return false;
    }
    if (IsOldDate(var_T464657_Val) == false) // anropet till funktionen.  Returnerar true ifall datumet är < = dagens   
    {
        return;
    }
    // if (IsBeforeDate(var_T482_Val, var_T480_Val, var_T480_Desc,'AL')==false)
    // {
    // //		this.focus();
    // return;	
    // }

    var dateFodelseDatum = new Date();
    dateFodelseDatum = getFodelseDatum(var__PERSNR_Val);

    var dateDiagnosdatum = new Date();
    dateDiagnosdatum = getDatum(var_T464657_Val); //OBS OBS OBS OBS OBS ÄNDRA VÄRDE OBS OBS OBS
    var dateDiadat = getRefToElement(var_T464657_Val); //OBS OBS OBS OBS OBS ÄNDRA VÄRDE OBS OBS OBS

    // Beräkna ålder med önskad enhet och placera resultatet i ett fält på formuläret
    if (dateDiagnosdatum != 0) {
        if (dateDiadat.value > getDagensDatum()) {
            window.alert('Diagnosdatum får inte vara senare än dagens datum');
            setFocusToElement(var_T464657_Val); //OBS OBS OBS OBS OBS ÄNDRA VÄRDE OBS OBS OBS
            return false;
        }
        if (AfterBirthday(var_T464657_Val) == false)//*** //OBS OBS OBS OBS OBS ÄNDRA VÄRDE OBS OBS OBS
        {										//***
            changeValue(var_T464650_Val, ''); 	// Blanka ut ålder //OBS OBS OBS OBS OBS ÄNDRA VÄRDE OBS OBS OBS**************
            this.focus(); 					//***
            return; 							//***
        } 									//***
        else {
            changeValue(var_T464650_Val, calcTidsskillnad(dateFodelseDatum, dateDiagnosdatum, 'AR')); //OBS OBS OBS OBS OBS ÄNDRA VÄRDE OBS OBS OBS
        }
    }
    else {
        // Ingen beräkning görs när operationsdatum saknas och markören lämnar variabeln
        // Blanka ut ålder när diagnosdatum saknas
        changeValue(var_T464650_Val, '');  //OBS OBS OBS OBS OBS ÄNDRA VÄRDE OBS OBS OBS
    }
}



// Funktion för att kontrollera att årtal har 4 siffor.
// Anropas vi onblur för att överskriva Sogetis onblur-funktion.
function checkYear() {
    IsValidInt(this.name, '-2147483648', '2147483647', '-1')
    var year = this.value;
    if (year.length != 4) {
        alert('Årtal måste anges med 4 siffror');
        this.focus();
    }
}

//**********************************************************************************************************************************************************************
// SLUT FORMULÄRBEROENDE FUNKTIONER ---
//**********************************************************************************************************************************************************************
//ALLMÄNNA FUNKTIONER---ALLMÄNNA FUNKTIONER---ALLMÄNNA FUNKTIONER---
//**********************************************************************************************************************************************************************
//DATUMFUNKTIONER ---  
//**********************************************************************************************************************************************************************
// Plocka ut datum ur ett personnummer i formuläret
//*******************************************************************************************
function getFodelseDatum(elementID) {
    elementReferenceDatum = getRefToElement(elementID);
    if (!elementReferenceDatum) {
        return; // Avbryt
    }

    var dateDatum = new Date();
    var strDatum = elementReferenceDatum.value;

    if (strDatum.length > 0) {
        // Personummerfältet har ett innehåll!
        dateDatum.setYear(elementReferenceDatum.value.substring(0, 4));

        var strMonth = elementReferenceDatum.value.substring(4, 6);

        if (strMonth < 10) {
            dateDatum.setMonth(elementReferenceDatum.value.substring(5, 6) - 1, 1);
        }
        else {
            dateDatum.setMonth(elementReferenceDatum.value.substring(4, 6) - 1, 1);
        }

        dateDatum.setDate(elementReferenceDatum.value.substring(6, 8));
        dateDatum.setHours(00);
        dateDatum.setMinutes(00);
        dateDatum.setSeconds(00);

        return dateDatum;
    }
    else {
        // Personnummer saknas !
        return 0;
    }
}
//*******************************************************************************************
// Plocka ut datum ur ett fält i formuläret
//*******************************************************************************************
function getDatum(elementID) {
    elementReferenceDatum = getRefToElement(elementID);
    if (!elementReferenceDatum) {
        return; // Avbryt
    }

    var dateDatum = new Date();
    var strDatum = elementReferenceDatum.value;

    switch (strDatum.length) {
        case 10:
            dateDatum.setYear(elementReferenceDatum.value.substring(0, 4));

            var strMonth = elementReferenceDatum.value.substring(5, 7);

            if (strMonth < 10) {
                dateDatum.setMonth(elementReferenceDatum.value.substring(6, 7) - 1, 1);
            }
            else {
                dateDatum.setMonth(elementReferenceDatum.value.substring(5, 7) - 1, 1);
            }

            dateDatum.setDate(elementReferenceDatum.value.substring(8, 10));
            dateDatum.setHours(00);
            dateDatum.setMinutes(00);
            dateDatum.setSeconds(00);

            return dateDatum;
            break;

        case 0:
            return 0;
            break;

        default:
            return 0;

    }
}
//***********************************************************************************************************************************************************************
// Funktion som returnerar true i fall ett datum är inte är större än födelsedatum. 
//Kräver att funktioner för hämtning av födelsedatum är med i skriptet.
//***********************************************************************************************************************************************************************
function AfterBirthday(WhichControl) {
    var x = document.getElementById(WhichControl);
    if (x.value != '') {
        var ObjDate = new Date();
        ObjDate = getDatum(WhichControl);

        var Birthday = new Date();
        Birthday = getFodelseDatum(var__PERSNR_Val);

        if (ObjDate <= Birthday) {
            alert('Kontrollera datum! Det får inte vara innan födelsedatum. ');
            return false;
        }
        else {
            return true;
        }
    }
}
//*******************************************************************************************
// En funktion för att HÄMTA DAGENSDATUM  (Håkan)
//*******************************************************************************************
function getDagensDatum() {
    var currentTime = new Date(); 	// currentTime - innehåller dagens datum
    var currentYear = currentTime.getFullYear(); 	// currentYear - innehåller årtal för dagens datum
    var currentMonth = currentTime.getMonth(); // currentMonth - innehåller månad för dagens datum
    var currentDay = currentTime.getDate(); // currentDay - innehåller dag ( dagnummer i månaden ) för dagens datum
    var currentMonthShow = ''; // currentMonthShow - innehåller månad för dagens datum med format för visning
    var currentDayShow = ''; // currentDayShow - innehåller dag ( dagnummer i månaden ) för dagens datum med format för visning
    var strToday = ''; 	// strToday - dagens datum som en sträng med ett format anpassat för visning

    // Observera att månad sätts med värdena 0 - 11 när dagens datum levereras med Date().
    // Vilket innebär att 0 = januari, 1 = februari, 2 = mars osv.
    // Korrigera måndssiffran för visning i olika meddelanden på skärmen
    currentMonthShow = currentMonth + 1;
    if (currentMonthShow < 10) {
        currentMonthShow = '0' + currentMonthShow;
    }

    // Korrigera dagnummer för visning i olika meddelanden på skärmen.
    currentDayShow = currentDay;
    if (currentDayShow < 10) {
        currentDayShow = '0' + currentDayShow;
    }
    // Gör iordning dagens datum som en sträng för visning i en variabel i ett formulär

    strToday = currentYear + '-' + currentMonthShow + '-' + currentDayShow;

    //window.alert('Dagens datum YYYY-MM-DD = ' + strToday + '    År ' + currentYear + '  månad ' + currentMonthShow + ' dag ' + currentDayShow);
    return strToday;
}
//*******************************************************************************************
// returnerar true ifall datumet är < = dagens
//*******************************************************************************************
function IsOldDate(whichControll) {
    x = document.getElementById(whichControll);

    input = x.value;

    var year = input.substring(0, 4);
    var month = input.substring(5, 7);
    var day = input.substring(8, 10);
    var shortYear = input.substring(0, 4);
    var shortMonth = input.substring(4, 6);
    var shortDay = input.substring(6, 8);
    var months = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);


    if (input.length == 8) {
        var myDate = new Date();
        myDate.setFullYear(shortYear, shortMonth - 1, shortDay);
        var today = new Date();
        if (myDate > today) {
            alert("Ogiltigt datum! Framtida datum kan ej anges.");
            x.focus();
            return false;
        }
    }

    if (input.length == 10) {
        var myDate = new Date();
        myDate.setFullYear(year, month - 1, day);
        var today = new Date();
        if (myDate > today) {
            alert("Ogiltigt datum! Framtida datum kan ej anges.");
            x.focus();
            return false;
        }
    }
}
//**********************************************************************************************************************************************************
// Funktion som JÄMFÖR 2 DATUM            
//**********************************************************************************************************************************************************
//Den returnerar false i fall ”ObjectDatum” är EFTER  ”CompareDatum” OCH man anropa How=’B’
//Den returnerar false i fall ”ObjectDatum” är INNAN  ”CompareDatum” OCH man anropa How=’A’
// I båda fall anropet skall finnas i ”ObjectDatum” term dvs, den term som ändras och skall jämföras med en redan ifylld (”CompareDatum” )
//**********************************************************************************************************************************************************

function IsBeforeDate(ObjectDatum, CompareDatum, CompareDatumDesc, How) {
    var x = document.getElementById(ObjectDatum);

    var ObjDatum = x.value;

    var year = ObjDatum.substring(0, 4);
    var month = ObjDatum.substring(5, 7);
    var day = ObjDatum.substring(8, 10);
    var ObjDate = new Date();
    ObjDate.setFullYear(year, month - 1, day);
    var z = document.getElementById(CompareDatum);
    var desc = document.getElementById(CompareDatumDesc);

    if (z.value.length != 10) {
        return;

    }
    else {
        var CompDatum = z.value;
        var yearE = CompDatum.substring(0, 4);
        var monthE = CompDatum.substring(5, 7);
        var dayE = CompDatum.substring(8, 10);

        if (ObjDatum.length == 10) {
            var CompDate = new Date();
            CompDate.setFullYear(yearE, monthE - 1, dayE);
            switch (How) {
                case 'BL': 	// 'BL'= ObjectDatumSKALL vara INNAN (Before) eller LIKA CompareDatum
                    if (ObjDate > CompDate) {
                        alert('Kontrollera datum!.  Det får inte vara efter  ' + desc.innerHTML + '\n');
                        return false;
                    }
                    break;

                case 'B': 	// 'B'= ObjectDatumSKALL vara INNAN  CompareDatum
                    if (ObjDate >= CompDate) {
                        alert('Kontrollera datum!.  Det får inte vara lika eller efter  ' + desc.innerHTML + '\n');
                        return false;
                    }
                    break;
                case 'AL': 	// 'AL' = ObjectDatum SKALL vara EFTER eller LIKA CompareDatum
                    if (ObjDate < CompDate) {
                        alert('Kontrollera datum!. Det får inte vara innan  ' + desc.innerHTML + '\n');
                        return false;
                    }
                    break;

                case 'A': 	// 'A' = ObjectDatum SKALL vara EFTER CompareDatum
                    if (ObjDate <= CompDate) {
                        alert('Kontrollera datum!.  Det får inte vara lika eller innan ' + desc.innerHTML + '\n');
                        return false;
                    }
                    break;
                default:
                    break;

            }

        }
    }

}
//**************************************************************************************************************************************
// Man behöver bara ändra termers namn i block för calcAlderVidDiaDatum() 
//**************************************************************************************************************************************
function calcTidsskillnad(dateDatum1, dateDatum2, enhet) {
    // Beräkna tidsskillnaden mellan två tidpunkter. 
    // Funktionen levererar tidsskillnaden mellan två datum. Det spelar ingen roll om i vilken ordningsföljd datum anges i parameterlistan
    // Funktionen kan användas för att beräkna antalet år, antalet dagar eller antalet minuter mellan två datum, vilka som helst. Den 
    // tredje parametern (enhet) avgör i vilken enhet tidsskillnaden returneras. Parametern förutsätts vara en textsträng.
    // enhet = AR returnerar antalet år mellan två tidpunkter
    // enhet = DAG returnerar antalet dagar mellan två tidpunkter
    // enhet = MIN returnerar antalet minuter mellan två tidpunkter
    // Funktionen kan enkelt kompletteras för att även returnera månader och sekunder
    // Om enhet inte är någon av ovan angivna returneras antalet år mellan två datum

    var tempDate = new Date();

    if (dateDatum1 <= dateDatum2) {
        // Datum1 är äldre än datum2 -> OK
    }
    else {
        // Låt datum1 och datum2 byta plats
        tempDate = dateDatum1;
        dateDatum1 = dateDatum2;
        dateDatum2 = tempDate;
    }

    dagar_manad = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    dateDatum2_ar = dateDatum2.getYear();
    dateDatum1_ar = dateDatum1.getYear();
    dateDatum2_manader = dateDatum2.getMonth();
    dateDatum1_manader = dateDatum1.getMonth();
    dateDatum2_dagar = dateDatum2.getDate();
    dateDatum1_dagar = dateDatum1.getDate();
    dateDatum2_timmar = dateDatum2.getHours();
    dateDatum1_timmar = dateDatum1.getHours();
    dateDatum2_minuter = dateDatum2.getMinutes();
    dateDatum1_minuter = dateDatum1.getMinutes();
    dateDatum2_sekunder = dateDatum2.getSeconds();
    dateDatum1_sekunder = dateDatum1.getSeconds();

    dateDatum1_manader_spara = dateDatum1.getMonth();

    var intAntalDagar = 0;
    var intAntalMinuter = 0;

    if (dateDatum2_ar < 1000) {
        dateDatum2_ar += 1900;
    }

    if (dateDatum1_ar < 1000) {
        dateDatum1_ar += 1900;
    }

    if (dateDatum1_sekunder > dateDatum2_sekunder) {
        dateDatum2_sekunder += 60;
        dateDatum2_minuter--;
    }

    if (dateDatum1_minuter > dateDatum2_minuter) {
        dateDatum2_minuter += 60;
        dateDatum2_timmar--;
    }

    if (dateDatum1_timmar > dateDatum2_timmar) {
        dateDatum2_timmar += 24;
        dateDatum2_dagar--;
    }

    if (dateDatum1_dagar > dateDatum2_dagar) {
        dateDatum2_dagar += dagar_manad[dateDatum1_manader_spara];
        dateDatum2_manader--;
    }

    if (dateDatum1_manader > dateDatum2_manader) {
        dateDatum2_manader += 12;
        dateDatum2_ar--;
    }

    // Årtal för datum2 är senare är lika med årtal för datum1. 
    // OBS! Årtal för datum 2 kan vara manipulerat
    if ((dateDatum2_ar - dateDatum1_ar) >= 0) {
        switch (enhet) {
            case 'AR':
                // Returvärdet ska vara antalet år mellan tidpunkterna
                return (dateDatum2_ar - dateDatum1_ar);
                break;
            case 'DAG':
                // Returvärdet ska vara antalet dagar mellan tidpunkterna
                intAntalDagar = 0;
                if (dateDatum1.getMonth() > dateDatum2.getMonth()) {
                    for (i = dateDatum1.getMonth() + 1; i < 12; i++) {
                        intAntalDagar += dagar_manad[i];
                    }

                    for (i = 0; i < dateDatum2.getMonth(); i++) {
                        intAntalDagar += dagar_manad[i];
                    }
                }
                else {
                    for (i = dateDatum1.getMonth() + 1; i < dateDatum2.getMonth(); i++) {
                        intAntalDagar += dagar_manad[i];
                    }
                }
                intAntalDagar = intAntalDagar + ((dateDatum2_ar - dateDatum1_ar) * 365) + (dateDatum2_dagar - dateDatum1_dagar);
                //window.alert('Antal dagar = ' + ( intAntalDagar ) ); 
                return intAntalDagar;
                break;
            case 'MIN':
                // Returvärdet ska vara antalet minuter mellan tidpunkterna
                intAntalDagar = 0;
                if (dateDatum1.getMonth() > dateDatum2.getMonth()) {
                    for (i = dateDatum1.getMonth() + 1; i < 12; i++) {
                        intAntalDagar += dagar_manad[i];
                    }

                    for (i = 0; i < dateDatum2.getMonth(); i++) {
                        intAntalDagar += dagar_manad[i];
                    }
                }
                else {
                    for (i = dateDatum1.getMonth() + 1; i < dateDatum2.getMonth(); i++) {
                        intAntalDagar += dagar_manad[i];
                    }
                }
                intAntalDagar = intAntalDagar + ((dateDatum2_ar - dateDatum1_ar) * 365) + (dateDatum2_dagar - dateDatum1_dagar);
                intAntalMinuter = (intAntalDagar * 24 * 60) + ((dateDatum2_timmar - dateDatum1_timmar) * 60) + (dateDatum2_minuter - dateDatum1_minuter);
                //window.alert('Antal minuter = ' + intAntalMinuter ); 
                return intAntalMinuter;
                break;
            default:
                return (dateDatum2_ar - dateDatum1_ar);
        } // switch
    }
    else {
        // window.alert('Något är fel');
        // Returnera ett tal för att inte få ett felaktigt datavärde som resultat
        return -1;
    }
}
//*************************************************************************************************************************************************************************************
//SLUT DATUMFUNKTIONER --- 
//*************************************************************************************************************************************************************************************
//ÖVRIGA ALLMÄNNA FUNKTIONER --
//*******************************************************************************************
function trim(str, chars) {
    return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

function TrimString(elementID) {
    elementReference = getRefToElement(elementID);

    if (!elementReference) {
        return 0; // Avbryt
    }

    return trim(elementReference.value);
}


//*******************************************************************************************
// En funktion för att sätta flera element i tillståndet HIDE (Dolda)
//*******************************************************************************************
function hideElements(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        hideElement(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion för att sätta flera element i tillståndet SHOW (visas)
//*******************************************************************************************
function showElements(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        showElement(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion för att sätta flera element i tillståndet DISABLED
//*******************************************************************************************
function disableElements(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        disableElement(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion för att sätta flera element i tillståndet ENABLED
//*******************************************************************************************
function enableElements(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        enableElement(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion för att sätta ett element i tillståndet DISABLED
//*******************************************************************************************
function disableElement(elementID) {
    elementReference = getRefToElement(elementID);
    var elRef = new RegExp('_Val');

    if (!elementReference) {
        window.alert('Funktion disableElement. Det finns inget element med ID = ' + elementID);
        return; // Avbryt
    }
    elementReference.disabled = true;

    if ((elementReference.type != 'checkbox') && (GoodBrowser()) && (elRef.test(elementID) == true)) {
        elementReference.style.backgroundColor = '#F5F5F5';
        elementReference.style.borderStyle = "solid";
        elementReference.style.borderWidth = "1px";
        elementReference.style.borderColor = "#ADD8E6";
    }
}

//************************************************************************************************************
// En funktion för att sätta ett element i tillståndet ENABLED och fixa 3D utseende på checkboxar
//************************************************************************************************************

function enableElement(elementID) {
    elementReference = getRefToElement(elementID);
    var elRef = new RegExp('_Val');
    if (!elementReference) {
        window.alert('Funktion enableElement. Det finns inget element med ID = ' + elementID);
        return; // Avbryt
    }
    elementReference.disabled = false;

    if ((elementReference.type != 'checkbox') && (GoodBrowser()) && (elRef.test(elementID) == true)) {
        elementReference.style.backgroundColor = 'white';
        elementReference.style.borderStyle = "solid";
        elementReference.style.borderWidth = "1px";
        elementReference.style.borderColor = "#4169E1";
    }
}

//*******************************************************************************************
// En funktion för att få en referens till ett element 
//*******************************************************************************************
function getRefToElement(elementID) {
    if (document.getElementById) {
        return document.getElementById(elementID);
    }
    else {
        window.alert('Funktion getRefToElement avbryts.');
        return; // Avbryt		
    }
}
//*******************************************************************************************
// En funktion för att kontrollera att en kontroll finns
//*******************************************************************************************
function GetRefToSeveral(WhichControl) {
    elementReference = getRefToElement(WhichControl); //       Kontrollerar att kontrollen finns

    if (!elementReference) {
        return false; // Avbryt
    }
    else {
        return true;
    }
}

//*******************************************************************************************
//En funktion för att kontrollera om en sträng innehåller numeriska tecken
//*******************************************************************************************
function isNumeric(strString)
//  check for valid numeric strings
{
    var strValidChars = "0123456789.-,";   	//OBS komma skall finnas med!!!!!!
    var strChar;
    var blnResult = true;

    if (strString.length == 0) return false;

    //  test strString consists of valid characters listed above
    for (i = 0; i < strString.length && blnResult == true; i++) {
        strChar = strString.charAt(i);
        if (strValidChars.indexOf(strChar) == -1) {
            blnResult = false;
        }
    }
    return blnResult;
}
//*******************************************************************************************
//  En funktion för att sätta ett värde i ett element
//*******************************************************************************************

function SetValueInEmptyElement(elementID, newValue) {
    elementReference = getRefToElement(elementID);

    if (!elementReference) {
        return false; // Avbryt
    }
    else {
        if (elementReference.value == "") {
            elementReference.value = newValue;
        }
    }
}

function PickUpValue(elementID, elementIDNew) {
    elementReference = getRefToElement(elementID);
    elementReferenceNew = getRefToElement(elementIDNew);

    if ((!elementReference) || (!elementReferenceNew)) {
        return false; // Avbryt
    }
    else {
        if ((elementReference.value == "") && (elementReferenceNew.value != "")) {
            elementReference.value = elementReferenceNew.value;
        }
    }
}

function PickUpValueEJtom(elementID, elementIDNew) {
    elementReference = getRefToElement(elementID);
    elementReferenceNew = getRefToElement(elementIDNew);

    if ((!elementReference) || (!elementReferenceNew)) {
        return false; // Avbryt
    }
    else {
        elementReference.value = elementReferenceNew.value;
    }
}

//*******************************************************************************************
//  En funktion för att sätta ett värde i ett element
//*******************************************************************************************
function changeValue(elementID, newValue) {
    elementReference = getRefToElement(elementID);

    if (!elementReference) {
        return false; // Avbryt
    }
    else {
        elementReference.value = newValue;
    }
}
//*******************************************************************************************
//En funktion för att återställa kontroller i ursprunglig style betr färg etc
//*******************************************************************************************
function RestoreController(WhichControl, WhichControlDesc) {
    var OBJ = document.getElementById(WhichControl);
    var OBJdesc = document.getElementById(WhichControlDesc);
    if (OBJ.type == 'checkbox') {
        OBJdesc.style.color = 'black';
        OBJ.style.background = 'white';
    }
    else {
        OBJdesc.style.color = 'black';
        OBJ.style.background = 'white';
        if (GoodBrowser() == true) {
            //		window.alert('GoodBrowser=true' );
            OBJ.style.borderStyle = 'solid';
            OBJ.style.borderWidth = '1px';
            OBJ.style.borderColor = '#4169E1';
        }
    }
}

//*******************************************************************************************
//En funktion för att ändra färg etc i kontroller
//*******************************************************************************************
function ChangeStyleController(WhichControl, WhichControlDesc) {
    var OBJ = document.getElementById(WhichControl);
    var OBJdesc = document.getElementById(WhichControlDesc);
    if (OBJ.type == 'checkbox') {
        OBJdesc.style.color = 'red';
        OBJ.style.background = 'pink';

    }
    else {
        OBJdesc.style.color = 'red';
        OBJ.style.background = 'pink';
        if (GoodBrowser() == true) {
            OBJ.style.borderStyle = 'solid';
            OBJ.style.borderWidth = '1px';
            OBJ.style.borderColor = '#4169E1';
        }
    }
}
//*******************************************************************************************************
// En funktion för att dölja ett element i formuläret. 
//Parameter till funktionen är en referens till element som kan läsas i formulärets objektlista.
//*******************************************************************************************************
function hideElement(elementID) {
    elementReference = getRefToElement(elementID);

    if (!elementReference) {
        return; // Avbryt
    }
    if (elementReference.style) {
        elementReference.style.visibility = 'hidden';
    }
    else {
        // Layers syntax
        // elementReference.visibility = 'hide';
    }
}
//*******************************************************************************************************
// En funktion för att visa ett element på formuläret
//*******************************************************************************************************
function showElement(elementID) {
    elementReference = getRefToElement(elementID);

    if (!elementReference) {
        return; // Avbryt
    }
    if (elementReference.style) {
        elementReference.style.visibility = 'visible';
    }
    else {
        // Layers syntax
        // elementReference.visibility = 'show';
    }
}

//*******************************************************************************************
// En funktion som kontrollerar om en kontroll är ifylld eller är null.
//*******************************************************************************************
function CheckIfNull(sVarVal, sVarDesc) {
    arrayReturn = new Array(2);
    var objVal = document.getElementById(sVarVal);
    var objDesc = document.getElementById(sVarDesc);

    // window.alert('Kontroll av variabel: ' + '\n\n' + sVarVal + '   ' + objVal.value + '   ' + objVal.type);

    arrayReturn[0] = sVarVal;
    arrayReturn[1] = '';
    arrayReturn[2] = sVarDesc;

    switch (objVal.type) {
        case 'text':
            // Textfält
            // window.alert('Typ TEXT, DATUM, HELTAL och DECIMALTAL');
            if ((objVal.value == ' ') || (objVal.value == '')) {
                arrayReturn[0] = sVarVal;
                arrayReturn[1] = 'Följande fält får inte vara tomt: ' + objDesc.innerHTML + '\n';
                arrayReturn[2] = sVarDesc;
            }
            break;
        case 'select-one':
            // Dropdownlista med möjlighet till ett val
            // window.alert('Typ LISTA');
            if (objVal.selectedIndex == 0) {
                arrayReturn[0] = sVarVal;
                arrayReturn[1] = 'Följande lista får inte lämnas utan val: ' + objDesc.innerHTML + '\n';
                arrayReturn[2] = sVarDesc;
            }
            break;
        case 'checkbox':
            // Kryssruta eller mer korrekt checkbox
            // window.alert('Typ SANT/FALSKT');
            if (objVal.checked != true) {
                arrayReturn[0] = sVarVal;
                arrayReturn[1] = 'Följande ruta får inte vara omarkerad: ' + objDesc.innerHTML + '\n';
                arrayReturn[2] = sVarDesc;
            }
            break;
        default:
            // Okänd typ av input-fält
            // window.alert('Typ OKÄNT');
            arrayReturn[0] = sVarVal;
            arrayReturn[1] = 'Följande fält får inte vara tomt: ' + objDesc.innerHTML + '\n';
            arrayReturn[2] = sVarDesc;
    } // switch( objVal.type )

    // Skicka en array i retur med felmeddelanden ifyllda för fält som inte klarat kontrollen
    return arrayReturn;
}

//**************************************************************************************************************************
// Funktion som bara returnerar true i fall ett fält är tomt, oberoende av typen (för kryss blir det true i fall krysset är false.
//**************************************************************************************************************************

function ITisNull(sVarVal) {
    var objVal = document.getElementById(sVarVal);
    switch (objVal.type) {
        case 'text':
            // Textfält
            if ((objVal.value == ' ') || (objVal.value == '')) {
                return true;
            }
            break;
        case 'select-one':
            // Dropdownlista med möjlighet till ett val
            if (objVal.selectedIndex == 0) {
                return true;
            }
            break;
        case 'checkbox':
            // Kryssruta eller mer korrekt checkbox
            // window.alert('Typ SANT/FALSKT');
            if (objVal.checked != true) {
                return true;
            }
            break;
    } // switch( objVal.type )
}
//****************************************************************************************************************************************************************************
// funktion som bara returnerar true ifall ett fält töms av innehållet, oberoende av typen (för kryss blir det false ifall krysset är true).
//****************************************************************************************************************************************************************************
function ClearControl(sVarVal) {
    var objVal = document.getElementById(sVarVal);
    switch (objVal.type) {
        case 'text':
            // Textfält
            if ((objVal.value != ' ') || (objVal.value != '')) {
                objVal.value = '';
                return true;
            }
            break;
        case 'select-one':
            // Dropdownlista med möjlighet till ett val
            if (objVal.selectedIndex != 0) {
                objVal.selectedIndex = 0;
                return true;
            }
            break;
        case 'checkbox':
            // Kryssruta eller mer korrekt checkbox
            // window.alert('checkboxen checked= ' + objVal.checked );
            if (objVal.checked == true) {
                objVal.checked = false;
                return true;
            }
            break;
    } // switch( objVal.type )
}
//*******************************************************************************************
//Funktion för att tömma innehållet i en array
//*******************************************************************************************
function ClearController(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        ClearControl(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion för att sätta fokus i ett formulär
//*******************************************************************************************
function setFocusToElement(elementID) {
    elementReference = getRefToElement(elementID);

    if (!elementReference) {
        return false; // Avbryt
    }
    else {
        //elementReference.focus();
        setTimeout(function () { elementReference.focus() }, 10);
    }
}

//*******************************************************************************************
// En funktion för att sätta fokus på Ärendepanelen
//*******************************************************************************************
function SetFocusToddEvent() {
    elementReference = getRefToElement('OverviewErrandHandler_ddEvent');   	// Flyttar focus till åtgärdslistan när man fyllt i sista variablen

    if (!elementReference) {
        return false; // Avbryt
    }
    else {
        window.scrollTo(0, 0);
        setTimeout(function () { elementReference.focus() }, 10); // elementReference.focus();
        return;
    }
}
//******************************************************************************************************************************************
// En funktion för att exekvera en funktion i OnBlur. Parametrar är kontrollens namn och funktionens nam
//******************************************************************************************************************************************
function setFunctionForOnBlur(varID, strFunction) {
    elementReference = getRefToElement(varID);

    if (!elementReference) {
        return false; // Avbryt
    }
    else {
        elementReference.onblur = strFunction;
        return true;
    }
}
//******************************************************************************************************************************************
// En funktion för att exekvera en funktion i OnClick. Parametrar är kontrollens namn och funktionens namn.
//******************************************************************************************************************************************
function setFunctionForOnClick(varID, strFunction) {
    elementReference = getRefToElement(varID);
    //window.alert('La varID es= ' + varID);

    if (!elementReference) {
        //window.alert('slutför button NOOOOOOO');
        return false; // Avbryt
    }
    else {
        //window.alert('slutför button finns');
        elementReference.onclick = strFunction;
        return true;
    }
}
//*************************************************************************************************************************************
// En funktion för att exekvera en funktion i OnChange. Parametrar är kontrollens namn och funktionens namn
//*************************************************************************************************************************************

function setFunctionForOnChange(varID, strFunction) {
    elementReference = getRefToElement(varID);

    if (!elementReference) {
        return false; // Avbryt
    }
    else {
        elementReference.onchange = strFunction;
        return true;
    }
}
//******************************************************************************************************************************************
//funktion som lägger ,0 i fall man skriver ett heltal och som avrundar till 1 decimal, i fall man skriver 2 decimaler.
//******************************************************************************************************************************************
function ConvertToDecimal() {
    if (isNumeric(this.value) == false) {
        //alert("not numeric " + this.value);
        return false;
    }
    else {
        input = this.value;
        var find = ',';
        var find2 = '.';
        var placedFind = 0;
        if (input.indexOf(find) > 0)       // om hittad, indexOf ger antalet tecken till vänster! 
        {
            placedFind = input.indexOf(find); 	// om t.ex 2,34 placedFind=1, om t.ex 23,45 placedFind=2
            if ((input.length - (placedFind + 1)) != 1) {
                var decDel = input.substring(placedFind + 1);
                var decTal = decDel.substring(0, 1) + "." + decDel.substring(1, 2);
                var nyTal = Math.round(decTal);
                this.value = input.substring(0, placedFind) + "," + nyTal;
                return true;
            }
            return true;
        }
        if (input.indexOf(find2) > 0)   // man använde punkt istället för komma.
        {
            placedFind = input.indexOf(find2);
            if ((input.length - placedFind - 1) != 1) {
                var decDel = input.substring(placedFind + 1);
                var decTal = decDel.substring(0, 1) + "." + decDel.substring(1, 2);
                var nyTal = Math.round(decTal);
                this.value = input.substring(0, placedFind) + "," + nyTal;
                return true;
            }
            this.value = input.replace(".", ","); // REPLACE punkt med komma !!!!!!
            return true;
        }

        if ((input.indexOf(find) < 1) && (input.indexOf(find2) < 1))    //inget decimal tecken angivet! 
        {

            input = input + ",0";
            this.value = input;
            return true;
        }
    }
}
//**************************************************************************************************************************************************************************
//Funktion för att sätta fokus AKTA skall användas BARA i de kontroller som inte har andra onblur, eftersom denna funktion har onblur 
//**************************************************************************************************************************************************************************
function Tabbordning(from_var, to_var) {
    var tabfrom = getRefToElement(from_var); //from_var objektet får inte ha en annan onblur-funktion kopplad till sig
    var tabto = getRefToElement(to_var);
    if (!tabto) {
        return false; // Avbryt
    }
    else {
        tabfrom.onblur = function () {
            setTimeout(function () { tabto.focus() }, 10);
        }
    }
}

//**********************************************************************************************************************************************************************
//Funktion som aktiverar alla avaktiverade kontroller för att ev nytt värde i kontrollerna skall sparas, anropas i clickUtfor 
//**********************************************************************************************************************************************************************
function AktiveraAlla() {
    var DokForm = document.getElementById("form1");
    for (var i = 0; i < DokForm.length; i++) {
        if (DokForm.elements[i].disabled == true) {
            DokForm.elements[i].disabled = false;
        }
    }
}

//**********************************************************************************************************************************************
// en fuktion som returnerar false i fall IE är äldre än version 7.0, och kontroller är tredimensionella by default.
// Den returnerar true när IE är 7.0
//**********************************************************************************************************************************************
function FindIE() {
    var str = Agent.match('MSIE');
    if (str == 'MSIE') {
        var pos1 = Agent.indexOf(str);
        var versionNr = parseFloat(Agent.charAt(pos1 + 5) + Agent.charAt(pos1 + 6) + Agent.charAt(pos1 + 7));
        if (versionNr < 7.0) {
            return false;
        }
        else {
            //alert('version är 7.0');
            return true;
        }
    }
}
//************************************************************************************************************************************************************************
//En fuktion som returnerar false i fall FireFox är nyare än version 1.0, och kontroller är tredimensionella by default. 
//Den returnerar true när FireFox är 1.0 eller äldre
//************************************************************************************************************************************************************************
function FindFireFox() {
    var str = Agent.match('Firefox');
    var OpSysMc = Agent.match('Macintosh');

    if (str == 'Firefox') {
        var pos1 = Agent.indexOf(str);
        var versionNr = parseFloat(Agent.charAt(pos1 + 8) + Agent.charAt(pos1 + 9) + Agent.charAt(pos1 + 10));
        if (OpSysMc == 'Macintosh')		// tog bort detta (versionNr>1.0) && 
        {
            return false;
        }
        else {
            //alert('version är 1.0, eller äldre och Windows');
            return true;
        }
    }
}
//***********************************************************************************************************************************************
//Funktion som returnerar false om browsern är av nyare typ med 3D-fält och true om browsern är av äldre typ 
//***********************************************************************************************************************************************
function GoodBrowser() {
    if ((FindIE() == false) || (FindFireFox() == false)) {
        return false;
    }
    else {
        return true;
    }
}

function VarnaDialog() {
    var r = confirm("Bekräfta att du vill avbryta och radera inrapportering genom att trycka på OK.\n\n Om du ångrar dig och INTE vill avbryta och radera inrapportering, tryck på Avbryt!");
    if (r == true) {
        return true;
    }
    else {
        return false;
    }
}

//****************************************************************************************************************************************************************
// En funktion för att kontrollera vilken åtgärd  är vald i ärendepanelen och returnerar värde för åtgärden (value == 2, för klar, t.ex.)
// ID på kontrollen som innehåller valbara åtgärder är "välkänd"! (OverviewErrandHandler_ddEvent)
//****************************************************************************************************************************************************************
// En funktion för att kontrollera vilken åtgärd  som är vald i ärendepanelen och returnerar värde för åtgärden (value == 2, för klar, t.ex.)
// ID på kontrollen som innehåller valbara åtgärder är "välkänd"! (OverviewErrandHandler_ddEvent)

function ChoosenEvent() {
    var FinnsEvents = GetRefToSeveral('OverviewErrandHandler_ddEvent'); // Blir sant i fall det finns Åtgärd lista 

    if (FinnsEvents) {
        var Events = getRefToElement('OverviewErrandHandler_ddEvent'); //om ÅTGÄRD LISTA finns
    }
    if (FinnsEvents == false) {
        return false; // Avbryt
    }
    else {
        switch (Events.value) {
            case '1':
                return '1'; 	//Ej klar
            case '2':
                return '2';  	//Klar
            case '3':
                return '3'; 	//Komplettera
            case '4':
                return '4'; 	//Komplettera och delspara
            case '5':
                return '5';  	//Påminn
            case '6':
                return '6'; 	//Avbryt och radera
            case '7':
                return '7';  	//Skicka till annat OC
            case '8':
                return '8'; 	//Skicka på remiss
            case '9':
                return '9'; 	//Hantera som normalärende
            case '10':
                return '10'; 	//Låt monitor inrapportera
            case '11':
                return '11'; 	//Efterforska
            case '12':
                return '12'; 	//Kontrollera indata
            case '13':
                return '13'; 	//Skapa ärende från fil
            case '14':
                return '14'; 	//Spara som inrapporterat
            case '15':
                return '15'; 	//Kontrollera och spara
            case '16':
                return '16'; 	//Avbryt och stäng
            case '17':
                return '17'; 	//Skicka ansökan
            case '18':
                return '18'; 	//Skicka till RBC
            case '19':
                return '19'; 	//Godkänn ansökan
            case '20':
                return '20'; 	//Avslag, återsänd
            case '21':
                return '21'; 	//Komplettera (papper)
            case '22':
                return '22'; 	//Avvakta canceranmälan
            case '23':
                return '23'; 	//Skicka på remiss och delspara
            case '24':
                return '24'; 	//Klar för godkännande
            case '25':
                return '25'; 	//Ej godkänt
            case '26':
                return '26'; 	//Avvakta canceranmälan(papper)
            case '27':
                return '27'; 	//Validera indata i fil
            case '28':
                return '28'; 	//Avvakta canceranmälan, delspara
            case '29':
                return '29'; 	//Ej klar, delspara
            default:
                return '0';
        } // switch
    }
}

//**************************************************************************************************************************************************************
//ENDAST MONITOR---ENDAST MONITOR---ENDAST MONITOR---ENDAST MONITOR---ENDAST MONITOR---ENDAST MONITOR
//**************************************************************************************************************************************************************
//FUNKTIONER MONITOR---
//**************************************************************************************************************************************************************
function GetOrganisation() {
    var ORG = getRefToElement('OverviewErrandHandler_ddReceiver'); 	// Organisationslista
    var InrapporEnhet = getRefToElement(var_T8669_Val); 	// A_Inrapporterande enhet sjukhus, klinik.**OBS OBS OBS ÄNDRA***
    InrapporEnhet.value = ORG.options[ORG.selectedIndex].text; //Tar valt värde i orglistan och sätter till InrappEnhet
}

// ENDAST MONITOR**************************************************  
//En funktion för att påminna om att avmarkera  monitors checkboxar
//********************************************************************  
function CheckboxVarning() {
    if (checkKomplettering()) {
        window.alert("Kompletteringsrutan är ikryssad, glöm inte att kryssa för de termer som du vill lägga i registret!");

    }
}

//**********************************************************************************
// Ärendetyp MMfull 2.0.4(1)
// Följande kombinationer av status och åtgärd kräver ett val i organisationslistan
// STATUS			ÅTGÄRD
// * 					- (7) Skicka till annat OC
// * 					- (8) Skicka på remiss
// *					- (23) Skicka på remiss och delspara
// Monitor, ej klar		- (3) Komplettera
// Monitor, ej klar		- (4) Komplettera och delspara
// Monitor				- (1) Ej klar
// Monitor				- (2) Klar
// Monitor				- (3) Komplettera
// Monitor				- (21) Komplettera (papper)
// Monitor				- (26) Avvakta canceranmälan (papper)
// Monitor				- (4) Komplettera och delspara
// Monitor				- (5) Påminn
// Monitor				- (29) Ej klar, delspara

function ShowHideOrg() {
    if ((FinnsEvents) && (FinnsStatus)) {
        // Fånga ändringar i åtgärdslistan. Visa eller dölj organisationslistan med enheter beroende på om den valda åtgärden innehåller
        // aktiviteter som kräver organisationsenhet som parameter eller inte.

        // I ärendetypen MMfull 2.0.4(1) finns tre åtgärder som alltid kräver ett val av organisationsenhet. Detta gäller oavsett vilken status ärendet befinner sig i.
        // Detta blir en GRUNDINSTÄLLNING som kan korrigeras för vissa specifika ärendestatus
        if ((Events.value == '7') || (Events.value == '8') || (Events.value == '23')) {
            //enableElement('OverviewErrandHandler_ddReceiver');
            showElement('OverviewErrandHandler_ddReceiver');
            showElement('OverviewErrandHandler_lblReceiver');
        }
        else {
            //disableElement('OverviewErrandHandler_ddReceiver');
            hideElement('OverviewErrandHandler_ddReceiver');
            hideElement('OverviewErrandHandler_lblReceiver');
        }

        // För vissa ärendestatus behövs en extra kontroll
        // För ärendestatus Monitor ska organisation väljas för ALLA åtgärder UTOM åtgärden Avbryt och radera
        if (Statusen.value == 'Monitor') {
            if ((Events.value == '6') || (Events.value == ''))	// För status Monitor ska organisation väljas för alla åtgärder UTOM Avbryt och Radera och Inget val.
            {
                //enableElement('OverviewErrandHandler_ddReceiver');
                hideElement('OverviewErrandHandler_ddReceiver');
                hideElement('OverviewErrandHandler_lblReceiver');
            }
            else {
                //disableElement('OverviewErrandHandler_ddReceiver');
                showElement('OverviewErrandHandler_ddReceiver');
                showElement('OverviewErrandHandler_lblReceiver');
            }
        }
        // För ärendestatus Monitor, ej klar ska organisation väljas för två extra åtgärder (Komplettera och Komplettera och delspara) utöver grundinställningen.
        else if (Statusen.value == 'Monitor, ej klar') {
            if ((Events.value == '3') || (Events.value == '4'))	// För status Monitor, ej klar ska organisation väljas för två åtgärder (Komplettera och Komplettera och delspara).
            {
                //enableElement('OverviewErrandHandler_ddReceiver');
                showElement('OverviewErrandHandler_ddReceiver');
                showElement('OverviewErrandHandler_lblReceiver');
            }
        }
    }
}

//ENDAST MONITOR*************************************************************
//Funktion för att påminna monitor om att koppla
//*******************************************************************************
function KopplaDialog() {
    var r = confirm("KOPPLA ALLTID först INNAN ett pågående ärende görs klar - gäller ÄVEN DELSPARA.\n Ett undantag: FÖRSTA ärendet för en patient om det inte finns någon cancerregisterpost.\n\n Om du har glömt att koppla och vill göra det nu, tryck på avbryt!");
    if (r == true) {
        return true;
    }
    else {
        return false;
    }
}

//********************************************************************************************************************
//Skickar värde från Organisationslistan till Inrapporterande enhet  om statusfält finns och status = Monitor.
//Anropar setSjhKlinKod som extraherar Sjukhuskod och Klinikkod och skickar värden till resp fält i formuläret
//Inparameter: elementRef: textsträng med elementnamn för Inrapporterande enhet
//Inparameter: elemSjh, textsträng med elementnamn för Sjukhuskod
//Inparameter: elemKlin, textsträng med elementnamn för  Klinikkod
//Senast ändrad: 2009-01-27

function setOrganisationFromOrgList(elemRef, elemSjh, elemKlin) {
    var objStatus = getRefToElement('OverviewErrandHandler_txtState'); 	// Statusfält

    if (objStatus) {
        var elemInrappEnhet = getRefToElement(elemRef); //	 A_Inrapporterande enhet.

        if (objStatus.value == 'Monitor') {
            var elementReference = getRefToElement('OverviewErrandHandler_ddReceiver'); // Organisationslista 
            if (!elementReference) {
                return false; // Avbryt
            }
            else {
                elementReference.onchange = function () //
                {
                    var inrappenhet = elementReference.options[elementReference.selectedIndex].text;
                    elemInrappEnhet.value = inrappenhet; 	//skickar värde till InrappEnhet om status = Monitor //ENDAST MONITOR	
                    setSjhKlinKod(elemRef, elemSjh, elemKlin);
                }
            }
        }
        else
        //if (objStatus.value!='Monitor')
        {
            disableElement(elemRef);     // inaktivera registervariabeln för Inrapporterande enhet
            var elemKlinKod = getRefToElement(elemKlin);
            var elemSjhKod = getRefToElement(elemSjh);
            if ((elemKlinKod.value == "") && (elemSjhKod.value == ""))//Om status inte är Monitor och både sjukhuskod och klinikkod är tomma hämtas sjukhuskod och klinikkod
            {
                setSjhKlinKod(elemRef, elemSjh, elemKlin);
            }
            else {
                return;
            }
        }
    }
    else {
        return;
    }
}

//********************************************************************************************************************
//Sätter klinikkod, anropas från setOrganisationFromOrgList
//Inparameter elemRef: textsträng med tekniskt namn för Inrapporterande enhet
//Inparameter elemSjh: textsträng med tekniskt namn för Sjukhuskod
//Inparameter elemKlin: textsträng med tekniskt namn för Klinikkod
//Senast ändrad 2009-07-08 Åsa Sundberg
//Ny version för att inte "undefined" ska visas i klinikkodsrutan när man väljer en organisatinosenhet som saknar klinikkod

function setSjhKlinKod(elemRef, elemSjh, elemKlin) {
    var elemInrappEnhet = getRefToElement(elemRef);
    var inrappenhet = elemInrappEnhet.value;
    var elemSjhKod = getRefToElement(elemSjh);
    var elemKlinKod = getRefToElement(elemKlin);

    var patt = new RegExp(/\)/);

    var find = /\)/g;

    if (patt.test(inrappenhet) == true) //Kontrollerar om det finns ett parentestecken och därmed också om det finns koder i strängen
    {
        var strInrapp = inrappenhet.replace(/\)/g, "(");
        strInrapp = strInrapp.split("(");
        elemSjhKod.value = strInrapp[3];

        var result = inrappenhet.match(find); //Kontrollerar hur många högerparenteser som finns

        if (result == "),)") //Om det bara finns 2 parenteser, dvs om inte klinikkod finns
        {
            elemKlinKod.value = "";
        }
        else {
            elemKlinKod.value = strInrapp[5];
        }
    }
    else {
        elemKlinKod.value = "";
        elemSjhKod.value = "";
        elemInrappEnhet.value = "";
    }

}

//*********************************************************************************************
var browser = navigator.appName;
var b_version = navigator.appVersion;
var version = parseFloat(b_version);
var Agent = navigator.userAgent;
//*********************************************************************************************
// Globala variabler monitor
// Deklarera tre variabler som används för att testa om kontroller i ärendepanelen är tillgängliga
var FinnsStatus = GetRefToSeveral('OverviewErrandHandler_txtState'); 		// Statusfält  
var FinnsEvents = GetRefToSeveral('OverviewErrandHandler_ddEvent');  		// Åtgärdslista  
var Statusen = getRefToElement('OverviewErrandHandler_txtState');

if (FinnsEvents) {
    var Events = getRefToElement('OverviewErrandHandler_ddEvent'); // om  kontrollen Åtgärdslista finns på formuläret
}

setFunctionForOnChange('OverviewErrandHandler_ddEvent', ShowHideOrg); // Finns endast i monitorformulär 

// Lägger i onblur på Åtgärd listan en funktion som aktiverar/avaktiverar organisationsenhet.ENDAST MONITOR
ShowHideOrg();
//Om  kompletteringskryssrutan är markerad - varning + uppmaning att markera de termer man vill lägga in i registret från monitorsformulär	ENDAST MONITOR	
CheckboxVarning();

//Dölj och avaktivera kontroller
// hideElement(var_HeaderControl2_Head); // Rubrik för dolda variabler
// hideElement(var_T63746_Val); //Gör LKF-dia osynligt --- osynlig ENDAST  INRAPPORTÖR
// hideElement(var_T63746_Desc); //Gör LKF-dia label osynlig --- osynlig ENDAST  INRAPPORTÖR
// hideElement(var__LKF_Val); //Gör LKF osynligt  --- BÅDE INRAPPORTÖR OCH MONITOR
// hideElement(var__LKF_Desc); //Gör LKF text osynlig   --- BÅDE INRAPPORTÖR OCH MONITOR
// hideElement(var_T63747_Val); //Gör  inrapporteringsdatum osynligt --- osynlig ENDAST FÖR INRAPPORTÖR
// hideElement(var_T63747_Desc); //Gör  inrapporteringsdatum label osynligt --- osynlig ENDAST FÖR INRAPPORTÖR

// hideElement(var_T63742_Val); //Gör Inrapportör  osynlig  --- osynlig ENDAST FÖR INRAPPORTÖR
// hideElement(var_T63742_Desc); // Gör Inrapportör label  osynlig --- osynlig ENDAST FÖR INRAPPORTÖR
// hideElement(var_T63743_Val); //Gör Inrapporterande enhet osynlig --- osynlig ENDAST FÖR INRAPPORTÖR
// hideElement(var_T63743_Desc); //Gör  Inrapporterande enhet label  osynlig --- osynlig ENDAST FÖR INRAPPORTÖR

// disableElement(var_T42395_Val);   // disable Ålder  och sedan enable den  i clickUtfor för att kunna skicka värde vidare !!!!!  
//hideElement(var_T42395_Val);
//hideElement(var_T42395_Desc);

//****************************************************************************
//Funktioner som anropas i onload
PickUpValue(var_T464641_Val, var__LKF_Val); // Hämta värde till LKF-dia 
SetValueInEmptyElement(var_T464642_Val, getDagensDatum()); // Rapporteringsdatum (dold i inrapportörs formulär) 
SetValueInEmptyElement(var_T464656_Val, getDagensDatum()); // Datum för ifyllande
changeValue(var_T464647_Val, TrimString(var_T464647_Val)); // Trimma inledande och avslutande blanka 
PickUpValue(var_T464647_Val, var__INREPNAME_Val); // Initierat av (dold i inrapportörs formulär)
changeValue(var_T464648_Val, TrimString(var_T464648_Val)); // Trimma inledande och avslutande blanka 
PickUpValue(var_T464648_Val, var__REPORTERNAME_Val); // Inrapportör (dold i inrapportörs formulär)
changeValue(var_T464644_Val, TrimString(var_T464644_Val)); // Trimma inledande och avslutande blanka 
PickUpValue(var_T464644_Val, var__INUNITNAME_Val); // inrapporterande enhet (dold i inrapportörs formulär)


// Aktiviera fråga om hemsjukhus då denna inte är samma som rapporterande enhet
toggle_hemsjukhus();
// Aktiverar  patologenhet, prepnr och prepår om Morfologi är bedömd = JA
toggle_MorfologiBedomd();
// Aktiverar textfält för gynonkologisk enhet
toggle_RemissGynOnk();
// Aktiverar textfält för primäroperation
toggle_Primoperation();
// Aktiverar textfält för annan sjukvårdsinrättning
toggle_RemissAnnan();

// //****************************************************************************************************************************************************************
// Sätt egenskaper för länken till pdf-filen med hjälptexter
//setFunctionForLink( var_LinkControl1_Link, '#var_LinkControl1_Link', '_self', 'https://www.inca.sjunet.org/pic/oc_gbg/Ovarial/Help.pdf', 'Hjälp', '800', '900', '550', '150' );
// setFunctionForOnClick( var_LinkControl5_Link, clickTillAtgard );
// setFunctionForLink(var_LinkControl1_Link, '#var_LinkControl1_Link', '_self', 'http://www.incanet.se/upload/Dokument/oc5/Ovarial/FIGO Stadieindelning.pdf', 'Kriterier', '800', '900', '550', '150');

// Aktiviera fråga om hemsjukhus då denna inte är samma som rapporterande enhet
setFunctionForOnChange(var_T464651_Val, toggle_hemsjukhus);
// Aktiverar  patologenhet, prepnr och prepår om Morfologi är bedömd av referenspatolog = JA
setFunctionForOnChange(var_T464668_Val, toggle_MorfologiBedomd);
// Aktiverar  textfält för Gynonk
setFunctionForOnChange(var_T464673_Val, toggle_RemissGynOnk);
// Aktiverar  textfält för Primäroperation
setFunctionForOnChange(var_T464677_Val, toggle_Primoperation);
// Aktiverar  textfält för annan sjukvårdsinrättning
setFunctionForOnChange(var_T464681_Val, toggle_RemissAnnan);

// Kontrollera årtal för preparatnummer
setFunctionForOnBlur(var_T464667_Val, checkYear);
setFunctionForOnBlur(var_T464672_Val, checkYear);

//Ålder vid diagnos beräknas när man lämnar diagnosdatum och även när man lämnar Ålder vid diagnos
setFunctionForOnBlur(var_T464657_Val, calcAlderVidDiaDatum);
calcAlderVidDiaDatum()

//Skickar värde från Organisationslistan till Inrapporterande enhet  om statusfält finns och status = Monitor - ENDAST MONITOR
//Inparametrar; registervariablernas tekniska namnen  (inrapp_sjukhusklinik, sjukhuskod, klinikkod)
setOrganisationFromOrgList(var_T464644_Val, var_T464645_Val, var_T464646_Val);


// Dölj uppgift om ålder 
disableElement(var_T464650_Val);
// hideElement(var_T464650_Desc);
// hideElement(var_HeaderControl7_Head); // år