// ********************************************************************
// Vulva
// Inrapporteringsformul�r - Monitor
// ANM�LAN 1
// Region Alla
// 2011-09-26
// Erik B�low
//
// ********************************************************************



// HJ�LPTEXTER
//*********************************************************************


// Hemsjukhus
var elementImage6 = document.getElementById(var_ImageControl12_Image);
elementImage6.onclick = function () {
    window.alert("Med 'hemsjukhus' avses i detta fall det sjukhus som remitterat till gynonkolog/det sjukhus varifr�n information om uppf�ljning f�rv�ntas inkomma. \n\n Denna information f�rv�ntas ifyllas av inrapport�rer i region V�st (men visas som ifyllbar i samtliga regioner).");
};

// Ansvarig l�kare
var elementImage1 = document.getElementById(var_ImageControl1_Image);
elementImage1.onclick = function () {
    window.alert("Den l�kare som ansvarar f�r att uppgifterna i anm�lningsblanketten/canceranm�lan �r korrekta.\nObligatorisk uppgift f�r att anm�lan skall kunna g�lla som canceranm�lan\n");
};

// Datum f�r ifyllande
var elementImage2 = document.getElementById(var_ImageControl2_Image);
elementImage2.onclick = function () {
    window.alert("Obligatorisk uppgift f�r att anm�lan skall kunna g�lla som canceranm�lan\n");
};

// Diagnosdatum
var elementImage3 = document.getElementById(var_ImageControl3_Image);
elementImage3.onclick = function () {
    window.alert("	Enligt rekommendation fr�n ENCR (European Network of Cancer Registries; http://www.encr.com.fr) \n \t 1.	Datum fr�n f�rsta histologi- eller cytologibed�mningen. Om flera datum finns att v�lja p� v�ljs i ordningen; \n\t\t	a)	Provtagningsdatum f�r prov som resulterar i definitiv cancerdiagnos(PAD eller cytologi), dvs enbart misstanke om malignitet, dysplasi eller atypi g�ller inte. \n\t\t b)	ankomstdatum till morfologilaboratorium om provtagningsdatum ok�nt \n\t\t c)	rapportdatum fr�n ovann�mnda om b�da ovanst�ende datum ok�nda \n\n Andra m�jliga alternativ till diagnosdatum (om cytologisk eller histologisk unders�kning ej f�religger) kan enligt ENCR vara; \n\t 2.	Inskrivningsdatum p� sjukhus pga tum�rsjukdom \n\t 3.	Polikliniskt mottagningsbes�k pga tum�rsjukdom \n\t 4.	Datum f�r annan klinisk diagnos av tum�rsjukdom \n\t 5.	D�dsdatum (tum�rsjukdomen kan ha varit k�nd tidigare, men dokumentation om detta f�religger ej) ej inkluderbar i kvalitetsregistret \n\t 6.	D�dsdatum d� tum�rsjukdom uppt�ckts f�rst vid obduktion ej inkluderbar i kvalitetsregistret \n\n Diagnosdatum senare �n behandlingsstart eller datum f�r beslut att avst� fr�n behandling eller datum senare �n d�dsdatum f�r ej v�ljas.")
};

// Diagnos; tum�rens lokalisation anges s� specificerat som m�jligt
var elementImage4 = document.getElementById(var_ImageControl4_Image);
elementImage4.onclick = function () {
    window.alert("Tum�rens lokalisation skall i canceranm�lan anges i klartext s� specifikt som m�jligt (t ex  labium majus dx).");
};

// ICD-10-kod
var elementImage5 = document.getElementById(var_ImageControl13_Image);
elementImage5.onclick = function () {
    window.alert("Koder m�rkta med * �r anm�lningspliktiga till cancerregistret men ing�r inte i kvalitetsregistret \n\n\t N90.2* \t Grav dysplasi som ej angetts som VIN 3 \n\t D07.1*	\t	Carcinoma in situ i vulva, VIN 3 \n\t D04.5*	\t		Cancer in situ p� perianala huden \n\t D03.5*	\t		Melanom in situ i vulva och perianalt \n\t D39.7A* \t	Tum�r av patologiskt ok�nd natur i vulva \n\t D39.7B* \t	Tum�r av kliniskt ok�nd natur i vulva (PAD saknas) \n\t C51.0 \t 	Malign tum�r i labium majus (inklusive Bartholins k�rtel) \n\t C51.1 \t 	Malign tum�r i labium minus  \n\t C51.2 \t 	Malign tum�r i klitoris \n\t C51.8 \t 	Malign tum�r i vulva med �vergripande v�xt \n\t C51.9 \t 	Icke specificerad lokalisation av malign tum�r i vulva (Pudendum, Yttre kvinnliga genitalia UNS)"); 
};

// FIGO
var elementImageFIGO = document.getElementById(var_ImageControl14_Image);
elementImageFIGO.onclick = function () {
    window.alert("I fall av tveksamhet �r regeln att f�r klassifikation v�lja det l�gre stadiet. Behandlingen styrs dock i dessa fall vanligen av det misst�nkta h�gre stadiet. I de fall substadium finns (IA, IB, IIIA, IIIB, IIIC, IVA, IVB) skall s�dant �s�ttas och stadium I, III eller IV �r s�ledes inte valbart. Om stadium, trots ovanst�ende regel, inte kan �s�ttas p� grund av saknade uppgifter, v�ljs alternativet X");
};

// Diagnosgrund
var elementImage7 = document.getElementById(var_ImageControl5_Image);
elementImage7.onclick = function () {
    window.alert("Diagnosgrund �r en variabel som �r oberoende av diagnosdatum. Det f�religger ofta flera olika diagnosgrunder. Val av diagnosgrund ska g�ras s� att den s�kraste grunden prioriteras, dock skall obduktion ej v�ljas om annan diagnosgrund finns. Patologi anses s�krare �n cytologi och r�ntgen eller datortomografi anses s�krare �n en klinisk unders�kning. \n\n Diagnosgrunden �annan laboratorieunders�kning� m�jligg�r en mer specifik SNOMED-kod �n diagnosgrund �klinisk unders�kning�, �r�ntgen etc�, �operation utan histopatologisk unders�kning� och �obduktion utan histopatologisk unders�kning� och b�r d�rf�r v�ljas framf�r dessa alternativ. Denna diagnosgrund anv�nds f n s�llan. \n\n �Cytologisk unders�kning� �r ofta den f�rsta diagnosgrunden. Om ingrepp med PAD d�refter g�rs, b�r diagnosgrunden uppgraderas till �provexcision eller op m histopatol unders�kn�. Diagnosdatum blir dock of�r�ndrat.");
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

// Preparatnummer/�r
var elementImage9 = document.getElementById(var_ImageControl8_Image);
elementImage9.onclick = function () {
    window.alert("Ange det F�RSTA PAD/CYT som �r grundval f�r definitiv diagnos.\n");
};

// Morfologi bed�mt av referenspatolog (eftergranskat)
var elementImage10 = document.getElementById(var_ImageControl9_Image);
elementImage10.onclick = function () {
    window.alert("Vid anm�lan fr�n kvinnoklinik vet man ofta inte om PAD kommer att eftergranskas eller inte och markerar d� ok�nt. Anm�lningsblankett skall ocks� inskickas fr�n gynonkologisk enhet och uppgifterna kan d� kompletteras. Ibland kan man ha f�tt remissvar, som anger att eftergranskning skett, men man k�nner inte till PAD-nummer etc; man kryssar d� f�r ja, PAD-nr etc. ok�nt");
};

// Patologi eller cytologiavdelning f�r eftergranskat preparat
var elementImage11 = document.getElementById(var_ImageControl16_Image);
elementImage11.onclick = function () {
    window.alert("Klartext, kan vara samma avdelning som ovan\n");
};

// Remiss till gynonkologisk enhet
var elementImage22 = document.getElementById(var_ImageControl15_Image);
elementImage22.onclick = function () {
    window.alert("Kvalitetsparameter, uppgiften hj�lper monitor att vid behov efters�ka ytterligare blanketter\n");
};

// Var planeras prim�roperation utf�ras/var har den utf�rts?
var elementImage13 = document.getElementById(var_ImageControl10_Image);
elementImage13.onclick = function () {
    window.alert("Uppgiften hj�lper monitor att vid behov efters�ka kirurgblankett.\n");
};

// Remiss till anan sjukv�rdsinr�ttning/motsvarande
var elementImage14 = document.getElementById(var_ImageControl11_Image);
elementImage14.onclick = function () {
    window.alert("Uppgiften hj�lper monitor att vid behov efters�ka ytterligare blanketter\n");
};



// ************************
// * Funktionsbibliotek*
// ************************

//**********************************************************************************************************************************************************************
//L�nkar
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

// Skapa en parameterstr�ng med WindowFeatures
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
    var Upp = getRefToElement(var_LinkControl5_Link); // skapar objekt f�r l�nk till �tg�rder

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
//�NDRA H�R F�R SIMULERING ---�NDRA H�R F�R SIMULERING---�NDRA H�R F�R SIMULERING---
//***************************************************************************************************************************************
// *** S�tt ett personnummer, k�n och LKF f�r test i formul�rverktygets f�rhandsgranskning
//changeValue( var__PERSNR_Val, '19121212-1212' )
//changeValue( var__SEX_Val, 'M' );
//changeValue( var__LKF_Val, '178213' );
//***************************************************************************************************************************************
// L�gg till hantering av onClick p� knappen Utf�r i �rendepanelen

// OBS OBS OBS----F�r att anv�nda formul�ret i SKARP INRAPPORTERING-----TA BORT KOMMENTERING  av f�ljande rad.---------
// F�r att testa formul�ret i F�RHANDSGRANSKA----KOMMENTERA f�ljande rad

setFunctionForOnClick('OverviewErrandHandler_btnSlutfor', clickUtfor); // -------Skarp inrapportering: TA BORT kommentering ----F�rhandsgranska: KOMMENTERA

// OBS OBS OBS ---- F�r att anv�nda formul�ret i SKARP INRAPPORTERING----- KOMMENTERA  f�ljande rad.---------
// F�r att testa formul�ret i F�RHANDSGRANSKA----TA BORT KOMMENTERING av f�ljande rad.--------

//	simuleraUtfor(); // -------Skarp inrapportering: KOMMENTERA---- F�rhandsgranska: TA BORT kommentering
//*********************************************************************************************************************************
// En funktion f�r att kontrollera om �tg�rden Klar �r vald i �rendepanelen (value == 2)
// ID p� kontrollen som inneh�ller valbara �tg�rder �r "v�lk�nd"! (OverviewErrandHandler_ddEvent)
//*********************************************************************************************************************************

function eventKlarForGodkannade() {
    elementReference = getRefToElement('OverviewErrandHandler_ddEvent');

    if (!elementReference) {
        // OBS OBS OBS --Skarp inrapportering: TA BORT kommentering av f�ljande rad ---- F�rhandsgranska: KOMMENTERA 
        return false; // Avbryt   

        // OBS OBS OBS --Skarp inrapportering: KOMMENTERA f�ljande tv� rader ---- F�rhandsgranska: TA BORT kommentering
        //		window.alert(' Det finns ingen �rendepanel att v�lja �tg�rd i.  Formul�ret simulerar att �tg�rden Klar f�r godk�nnande �r vald.' );
        //		return true; // anv�nds f�r test i formul�rverktyget 

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

        // OBS OBS OBS --Skarp inrapportering: TA BORT kommentering av f�ljande rad ---- F�rhandsgranska: KOMMENTERA 
        return false; // Avbryt  ------Skarp inrapportering: TA BORT kommentering ----F�rhandsgranska: KOMMENTERA

        // OBS OBS OBS --Skarp inrapportering: KOMMENTERA f�ljande tv� rader ---- F�rhandsgranska: TA BORT kommentering
        //window.alert(' Det finns ingen �rendepanel att v�lja �tg�rd i.  Formul�ret simulerar att �tg�rden Klar �r vald.' );
        //return true; // anv�nds f�r test i formul�rverktyget 
    }

    if (elementReference.value == 2) {
        return true;
    }
    else {
        return false;
    }
}

//***SLUT �NDRA F�R SIMULERING
//**************************************************************************************************************************************
// En funktion som simulerar knappen Utf�r. 
// F�r att testa i formul�rverktyget n�r ett formul�r f�rhandsgranskas l�ter jag f�ltet f�r  Remissdatum 
// reagera p� onClick med samma beteende som en tryckning p� knappen Utf�r utl�ser.

function simuleraUtfor() {
    window.alert(' Det finns ingen knapp Utf�r. L�t rubriken simulera knappen Utf�r');
    elementReference = getRefToElement(var_HeaderControl1_Head);
    elementReference.onclick = clickUtfor;
    return true;
}

//**********************************************************************************************************************************************************************
//FORMUL�RBEROENDE FUNKTIONER---FORMUL�RBEROENDE FUNKTIONER---FORMUL�RBEROENDE FUNKTIONER
//�NDRA V�RDEN---�NDRA V�RDEN---�NDRA V�RDEN---�NDRA V�RDEN---�NDRA V�RDEN---�NDRA V�RDEN---�NDRA V�RDEN
//**********************************************************************************************************************************************************************
//CLICKUTF�R ---  CLICKUTF�R --- CLICKUTF�R --- CLICKUTF�R --- CLICKUTF�R --- CLICKUTF�R
//*******************************************************************************************
//Funktion som s�tter upp en array med alla variabler som skall kontrolleras eftersom de �r obligatoriska:
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

    var n = 0 	//n�sta index nr!

    var DenValda = ChoosenEvent();
    if (DenValda == '6')					// Avbryt och radera  
    {
        if (!VarnaDialog()) {
            HideProgressBar();  // finns, fr�n Sogeti
            AbortEvent(e);   // finns, fr�n Sogeti
            return false;
        }
    }


 // H�R B�RJAR DEN EGNA KODEN F�R OBLIGATORISKA VARIABLER
 
    var elementRemissGynOnk = getRefToElement(var_T464673_Val);
    var elementPrimOp = getRefToElement(var_T464677_Val);
    var elementRemissAnnan = getRefToElement(var_T464681_Val);

	// uppgifter om hemsjukhus
	var elementAnmSjPatHemSj = getRefToElement(var_T464651_Val);
	if (elementAnmSjPatHemSj.value == '5384')   // Om NEJ �r vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464652_Val, var_T464652_Desc); // Ange hemsjukhus i klartext 
        arrayFunctions[n++] = CheckIfNull(var_T464653_Val, var_T464653_Desc); // hemsjukhus kod
        arrayFunctions[n++] = CheckIfNull(var_T464654_Val, var_T464654_Desc); // hemklinik kod
    }

	
    arrayFunctions[n++] = CheckIfNull(var_T464655_Val, var_T464655_Desc); //  Ansvarig l�kare
    arrayFunctions[n++] = CheckIfNull(var_T464656_Val, var_T464656_Desc); //  Datum f�r ifyllande
    arrayFunctions[n++] = CheckIfNull(var_T464657_Val, var_T464657_Desc); //  Diagnosdatum
    arrayFunctions[n++] = CheckIfNull(var_T464658_Val, var_T464658_Desc); //  Diagnos
    arrayFunctions[n++] = CheckIfNull(var_T551858_Val, var_T551858_Desc); //  ICD-10 kod
    arrayFunctions[n++] = CheckIfNull(var_T464660_Val, var_T464660_Desc); //  Diagnosgrund
    arrayFunctions[n++] = CheckIfNull(var_T464662_Val, var_T464662_Desc); //  Morfologisk diagnos
    arrayFunctions[n++] = CheckIfNull(var_T464663_Val, var_T464663_Desc); //  Patologenhet
    arrayFunctions[n++] = CheckIfNull(var_T464670_Val, var_T464670_Desc); //  Preparatnummer
    arrayFunctions[n++] = CheckIfNull(var_T464667_Val, var_T464667_Desc); //  Preparat�r
    arrayFunctions[n++] = CheckIfNull(var_T464668_Val, var_T464668_Desc); //  Morfologi bed�md av referenspatolog
    arrayFunctions[n++] = CheckIfNull(var_T464673_Val, var_T464673_Desc); //  Remiss till gynonkologisk enhet
    arrayFunctions[n++] = CheckIfNull(var_T464677_Val, var_T464677_Desc); //  Prim�roperation
    arrayFunctions[n++] = CheckIfNull(var_T464681_Val, var_T464681_Desc); //  Remiss till annan sjukv�rdsinr�ttning
    arrayFunctions[n++] = CheckIfNull(var_T551857_Val, var_T551857_Desc); //  FIGO-stadium

	var elementMorfBedomd = getRefToElement(var_T464668_Val);
    if (elementMorfBedomd.value == '10571')   // Om JA �r vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464661_Val, var_T464661_Desc); //  Morfologi bed�md av referenspatolog patologiavdelning
        arrayFunctions[n++] = CheckIfNull(var_T464664_Val, var_T464664_Desc); //  Morfologi bed�md av referenspatolog prepnr
        arrayFunctions[n++] = CheckIfNull(var_T464672_Val, var_T464672_Desc); //  Morfologi bed�md av referenspatolog prep�r
    }
    if (elementRemissGynOnk.value == '5385')   // Om JA �r vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464669_Val, var_T464669_Desc); //  Remiss till gynonkologisk enhet, vilken
    }
    if (elementPrimOp.value == '10576')   // Om Annan enhet �r vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464674_Val, var_T464674_Desc); //  Prim�rop p� annan enhet, vilken
    }
    if (elementRemissAnnan.value == '5385')   // Om JA �r vald
    {
        arrayFunctions[n++] = CheckIfNull(var_T464678_Val, var_T464678_Desc); //  Remiss till annan sjukv�rdsinr�ttning, vilken
    }

    //AKTA !!!! de termerna som blir obligatoriska beroende p� ett vilkor, skall �terst�llas i ursprunglig style innan vilkoret k�rs!.
 
	RestoreController(var_T464652_Val, var_T464652_Desc); //  hemsjukhus i klartext
	RestoreController(var_T464653_Val, var_T464653_Desc); //  hemsjukhus kod
	RestoreController(var_T464654_Val, var_T464654_Desc); //  hemklinik kod
    RestoreController(var_T464655_Val, var_T464655_Desc); //  Ansvarig l�kare
    RestoreController(var_T464656_Val, var_T464656_Desc); //  Datum f�r ifyllande
    RestoreController(var_T464657_Val, var_T464657_Desc); //  Diagnosdatum
    RestoreController(var_T464658_Val, var_T464658_Desc); //  Diagnos
    RestoreController(var_T551858_Val, var_T551858_Desc); //  ICD-10 kod
    RestoreController(var_T551857_Val, var_T551857_Desc); //  FIGO-stadium
    RestoreController(var_T464660_Val, var_T464660_Desc); //  Diagnosgrund
    RestoreController(var_T464662_Val, var_T464662_Desc); //  Morfologisk diagnos
    RestoreController(var_T464661_Val, var_T464661_Desc); //  Patologenhet
    RestoreController(var_T464670_Val, var_T464670_Desc); //  Preparatnummer
    RestoreController(var_T464667_Val, var_T464667_Desc); //  Preparat�r
    RestoreController(var_T464668_Val, var_T464668_Desc); //  Morfologi bed�md av referenspatolog
    RestoreController(var_T464661_Val, var_T464661_Desc); //  Morfologi bed�md av referenspatolog patologiavdelning
    RestoreController(var_T464664_Val, var_T464664_Desc); //  Morfologi bed�md av referenspatolog prepnr
    RestoreController(var_T464672_Val, var_T464672_Desc); //  Morfologi bed�md av referenspatolog prep�r
    RestoreController(var_T464673_Val, var_T464673_Desc); //  Remiss till gynonkologisk enhet
    RestoreController(var_T464669_Val, var_T464669_Desc); //  Remiss till gynonkologisk enhet, vilken
    RestoreController(var_T464677_Val, var_T464677_Desc); //  Prim�roperation
    RestoreController(var_T464674_Val, var_T464674_Desc); //  Prim�rop p� annan enhet, vilken
    RestoreController(var_T464681_Val, var_T464681_Desc); //  Remiss till annan sjukv�rdsinr�ttning
    RestoreController(var_T464678_Val, var_T464678_Desc); //  Remiss till annan sjukv�rdsinr�ttning, vilken

    // Checkar om �klar�, �klar f�r godk�nnande och Kontrollera Indata �r markerad visas h�r under. Jag v�ljer att ta bara klar.
    // bytt if satsen i fall du vill ha flera �tg�rder checkade.


    if (eventKlar()) {
        // Kontrollera alla objekt i listan
        for (i = 0; i < arrayFunctions.length; i++) // exekverar alla funktioner och f�r vid fel tillbaka variabel, felbeskrivning, och titel
        {
            arrayResult[i] = arrayFunctions[i];
            if (arrayResult[i][0].length > 0) {
                sErrorMessage = sErrorMessage + arrayResult[i][1];
            }
        }
        // Alla objekt �r kontrollerade. De som inte uppfyller �nskade villkor ska markeras med r�d text och
        // och rosa babkgrund.
        // Objekt som uppfyller villkoren �terst�lls till normal visning
        for (i = 0; i < arrayFunctions.length; i++) // r�dmarkera
        {
            // �terst�ll visninsgformat p� alla obligatoriska variabler
            var obj = document.getElementById(arrayResult[i][0]);

            RestoreController(arrayResult[i][0], arrayResult[i][2]);
            obj.title = arrayResult[i][1];

            // Rubrik ska skrivas med r�d text och variabler ska f� rosa bakgrund
            // om ett obligatoriskt f�lt saknar v�rde.
            // Markering av f�lt utf�rs endast n�r komplettering INTE �r markerad
            if (!checkKomplettering()) {
                if (arrayResult[i][1].length > 0) {
                    bPassedCheck = false;

                    var obj = document.getElementById(arrayResult[i][0]);

                    ChangeStyleController(arrayResult[i][0], arrayResult[i][2]);
                    obj.title = arrayResult[i][1];
                }
            }
        }
        // Iterera i listan tills det f�rsta objektet som �r felaktigt p�tr�ffas. S�tt fokus p� f�ltet och avbryt iterationen
        if (!checkKomplettering()) {
            for (i = 0; i < arrayFunctions.length; i++) // s�tt fokus p� f�rsta felet
            {
                if (arrayResult[i][0].length > 0) {
                    var objFirstHit = document.getElementById(arrayResult[i][0]);
                    objFirstHit.focus()
                    break;
                }
            }
        }

    }
    // Kan aldrig intr�ffa n�r komplettering �r markerad
    if (bPassedCheck == false) {
        window.alert('Formul�ret kunde inte skickas p� grund av f�ljande problem:' + '\n\n' + sErrorMessage);
        HideProgressBar();  // finns, fr�n Sogeti
        AbortEvent(e);   // finns, fr�n Sogeti
        return false;
    }
    // Kontrollera om �rendepanelen inneh�ller en kontroll f�r information om koppling. 
    var KopplaFinns = GetRefToSeveral('OverviewErrandHandler_ConnectionInfoLabel'); 	//ENDAST MONITOR 
    if (KopplaFinns) {
        var DenValda = ChoosenEvent();
        var KopplaLabel = document.getElementById('OverviewErrandHandler_ConnectionInfoLabel');
        //  �tg�rder som testas �r de �tg�rder som avslutar eller delsparar ett �rende och skapar eller uppdaterar en registerpost. �tg�rderna Klar och �tg�rder med delspara.	
        if ((DenValda == '2') || (DenValda == '4') || (DenValda == '23') || (DenValda == '28') || (DenValda == '29')) {
            if ((KopplaLabel.innerHTML == '') || (KopplaLabel.innerHTML == ' ') || (KopplaLabel.innerHTML.match("Ej kopplad"))) {
                if (!KopplaDialog()) {
                    HideProgressBar();  // finns, fr�n Sogeti
                    AbortEvent(e);   // finns, fr�n Sogeti
                    return false;
                }
            }
        }
    }

    AktiveraAlla();
}
//***********************************************************************************************************
// En funktion f�r att kontrollera om �inrapportering avser komplettering /r�ttning� �r ikryssad.
//***********************************************************************************************************
function checkKomplettering() {
    elementReference = getRefToElement(var_T464649_Val); //OBS OBS OBS OBS OBS �NDRA V�RDE OBS OBS OBS
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
// Kontrollera vilken ICD-10 kod som �r vald
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
// <option value="7597">D 07.3 Cancer in situ i �ggledare</option>
// <option value="7595">D 39.1 Borderlinetum�r i ovarium</option>
switch (elementICD10.value) {
case '7527':
// C57.0 Tubarcancer
enableElements(elementArray); // Aktivera
break;
case '7596':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // T�m inneh�ll
break;
case '7592':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // T�m inneh�ll
break;
case '7526':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // T�m inneh�ll
break;
case '7593':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // T�m inneh�ll
break;
case '7594':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // T�m inneh�ll
break;
case '7597':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // T�m inneh�ll
break;
case '7595':
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // T�m inneh�ll
break;
default:
// inget
disableElements(elementArray); // Annars avaktivera 
ClearController(elementArray); // T�m inneh�ll
} // switch
}
*/


// Om anm�lande enhet inte samma som hemsjukhus
function toggle_hemsjukhus() {
    elementArray = new Array();
	elementArray.push(var_T464652_Val); // hemsjukhus i klartext
	elementArray.push(var_T464653_Val); // hemsjukhus kod
	elementArray.push(var_T464654_Val); // hemklinik kod
	
    var elementAnmSjPatHemSj = getRefToElement(var_T464651_Val); //  anm�lande enhet = hemsjukhus?

    if (elementAnmSjPatHemSj.value == '5384')   // Om NEJ �r vald
    {
        enableElements(elementArray); // Aktivera
    }
    else if (elementAnmSjPatHemSj.value == '5385')   // Om JA �r vald
	{
		disableElements(elementArray); // Annars avaktivera 
		PickUpValueEJtom(var_T464652_Val, var_T464644_Val); // inrapporterande enhet i klartext kopieras till hemsjukhus
		PickUpValue(var_T464653_Val, var_T464645_Val); // inrapporterande enhet (dold i inrapport�rs formul�r)
		PickUpValue(var_T464654_Val, var_T464646_Val); // inrapporterande enhet (dold i inrapport�rs formul�r)
	}
	else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // T�m inneh�ll
    }
}



// Om Morfologi bed�md av referenspatolog
function toggle_MorfologiBedomd() {
    elementArray = new Array(4);
    elementArray[0] = var_T464661_Val; // Patologi eller cytologiavsdelning
    elementArray[1] = var_T464671_Val; // Preparatnummer eftergranskat
    elementArray[2] = var_T464664_Val; // Preparatets registrerings�r eftergranskat
    elementArray[3] = var_T464672_Val; // Patologi- eller cytologiavd (eftergransk) kod

    var elementMorfBedomd = getRefToElement(var_T464668_Val); //  Morfologi bed�md 

    if (elementMorfBedomd.value == '10571')   // Om JA �r vald
    {
        enableElements(elementArray); // Aktivera
    }
    else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // T�m inneh�ll
    }
}

//***********************************************************************************************************************
// Om Remiss till gynonkologisk enhet
function toggle_RemissGynOnk() {
    elementArray = new Array(3);
    elementArray[0] = var_T464669_Val; // Ja, vilken
    elementArray[1] = var_T464679_Val; // Sjukhus dit remiss �r st�lld (kod)
    elementArray[2] = var_T464676_Val; // Klinik dit remiss �r st�lld (kod)

    var elementRemissGynOnk = getRefToElement(var_T464673_Val); //  Remiss till gynonk

    if (elementRemissGynOnk.value == '5385')   // Om JA �r vald
    {
        enableElements(elementArray); // Aktivera
    }
    else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // T�m inneh�ll
    }
}

//***********************************************************************************************************************
// Prim�roperation 
function toggle_Primoperation() {
    var elementArray = new Array(1);
    elementArray[0] = var_T464674_Val; // Ja, annan enhet spec
    elementArray[1] = var_T464675_Val; // Ja, annan enhet spec Sjukhuskod
    elementArray[2] = var_T464680_Val; // Ja, annan enhet spec Klinikkod

    var elementRemissAnnan = getRefToElement(var_T464677_Val); //  Prim�roperation

    if (elementRemissAnnan.value == '10576')   // Om JA �r vald
    {
        enableElements(elementArray); // Aktivera
    }
    else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // T�m inneh�ll
    }
}

//***********************************************************************************************************************
// Om Remiss till annan sjukv�rdsinr�ttnig
function toggle_RemissAnnan() {
    elementArray = new Array(3);
    elementArray[0] = var_T464678_Val; // Ja, vilken
    elementArray[1] = var_T464683_Val; // Sjukhus dit remiss �r st�lld
    elementArray[2] = var_T464682_Val; // Klinik dit remiss �r st�lld

    var elementRemissAnnan = getRefToElement(var_T464681_Val); //  Remiss till gynonk

    if (elementRemissAnnan.value == '5385')   // Om JA �r vald
    {
        enableElements(elementArray); // Aktivera
    }
    else {
        disableElements(elementArray); // Annars avaktivera 
        ClearController(elementArray); // T�m inneh�ll
    }
}

//SLUT AKTIVERA/INAKTIVERA---
//************************************************************************************************************************************************************************
// FORMUL�RBEROENDE DATUMFUNKTIONER --
//************************************************************************************************************************************************************************

//****************************************************************************************
//Kontrollerar att inrapporteringsdatum <= dagens datum
function CheckInrappdatum() {
    if (IsDate(var_T464642_Val) == false)	// Sogetis funktions som SKALL finnas innan. 
    {
        //			this.focus();  
        return;
    }
    if (IsOldDate(var_T464642_Val) == false) // anropet till funktionen.  Returnerar true ifall datumet �r < = dagens   
    {
        this.focus();
        return;
    }
}

//*****************************************************************************************
//En funktion f�r att l�sa in personnummer och ber�kna �lder vid diagnos 
//*****************************************************************************************
//R�knar ut �lder vid diagnosdatum
//Kontroll att diagnosdatum <= dagens datum sker  i funktionen calcAlderVidDiagnosdatum 

function calcAlderVidDiaDatum() {
    if (IsDate(var_T464657_Val) == false) //OBS OBS OBS OBS OBS �NDRA V�RDE OBS OBS OBS
    {
        // window.alert('Felaktigt datumformmat');
        return false;
    }
    if (IsOldDate(var_T464657_Val) == false) // anropet till funktionen.  Returnerar true ifall datumet �r < = dagens   
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
    dateDiagnosdatum = getDatum(var_T464657_Val); //OBS OBS OBS OBS OBS �NDRA V�RDE OBS OBS OBS
    var dateDiadat = getRefToElement(var_T464657_Val); //OBS OBS OBS OBS OBS �NDRA V�RDE OBS OBS OBS

    // Ber�kna �lder med �nskad enhet och placera resultatet i ett f�lt p� formul�ret
    if (dateDiagnosdatum != 0) {
        if (dateDiadat.value > getDagensDatum()) {
            window.alert('Diagnosdatum f�r inte vara senare �n dagens datum');
            setFocusToElement(var_T464657_Val); //OBS OBS OBS OBS OBS �NDRA V�RDE OBS OBS OBS
            return false;
        }
        if (AfterBirthday(var_T464657_Val) == false)//*** //OBS OBS OBS OBS OBS �NDRA V�RDE OBS OBS OBS
        {										//***
            changeValue(var_T464650_Val, ''); 	// Blanka ut �lder //OBS OBS OBS OBS OBS �NDRA V�RDE OBS OBS OBS**************
            this.focus(); 					//***
            return; 							//***
        } 									//***
        else {
            changeValue(var_T464650_Val, calcTidsskillnad(dateFodelseDatum, dateDiagnosdatum, 'AR')); //OBS OBS OBS OBS OBS �NDRA V�RDE OBS OBS OBS
        }
    }
    else {
        // Ingen ber�kning g�rs n�r operationsdatum saknas och mark�ren l�mnar variabeln
        // Blanka ut �lder n�r diagnosdatum saknas
        changeValue(var_T464650_Val, '');  //OBS OBS OBS OBS OBS �NDRA V�RDE OBS OBS OBS
    }
}



// Funktion f�r att kontrollera att �rtal har 4 siffor.
// Anropas vi onblur f�r att �verskriva Sogetis onblur-funktion.
function checkYear() {
    IsValidInt(this.name, '-2147483648', '2147483647', '-1')
    var year = this.value;
    if (year.length != 4) {
        alert('�rtal m�ste anges med 4 siffror');
        this.focus();
    }
}

//**********************************************************************************************************************************************************************
// SLUT FORMUL�RBEROENDE FUNKTIONER ---
//**********************************************************************************************************************************************************************
//ALLM�NNA FUNKTIONER---ALLM�NNA FUNKTIONER---ALLM�NNA FUNKTIONER---
//**********************************************************************************************************************************************************************
//DATUMFUNKTIONER ---  
//**********************************************************************************************************************************************************************
// Plocka ut datum ur ett personnummer i formul�ret
//*******************************************************************************************
function getFodelseDatum(elementID) {
    elementReferenceDatum = getRefToElement(elementID);
    if (!elementReferenceDatum) {
        return; // Avbryt
    }

    var dateDatum = new Date();
    var strDatum = elementReferenceDatum.value;

    if (strDatum.length > 0) {
        // Personummerf�ltet har ett inneh�ll!
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
// Plocka ut datum ur ett f�lt i formul�ret
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
// Funktion som returnerar true i fall ett datum �r inte �r st�rre �n f�delsedatum. 
//Kr�ver att funktioner f�r h�mtning av f�delsedatum �r med i skriptet.
//***********************************************************************************************************************************************************************
function AfterBirthday(WhichControl) {
    var x = document.getElementById(WhichControl);
    if (x.value != '') {
        var ObjDate = new Date();
        ObjDate = getDatum(WhichControl);

        var Birthday = new Date();
        Birthday = getFodelseDatum(var__PERSNR_Val);

        if (ObjDate <= Birthday) {
            alert('Kontrollera datum! Det f�r inte vara innan f�delsedatum. ');
            return false;
        }
        else {
            return true;
        }
    }
}
//*******************************************************************************************
// En funktion f�r att H�MTA DAGENSDATUM  (H�kan)
//*******************************************************************************************
function getDagensDatum() {
    var currentTime = new Date(); 	// currentTime - inneh�ller dagens datum
    var currentYear = currentTime.getFullYear(); 	// currentYear - inneh�ller �rtal f�r dagens datum
    var currentMonth = currentTime.getMonth(); // currentMonth - inneh�ller m�nad f�r dagens datum
    var currentDay = currentTime.getDate(); // currentDay - inneh�ller dag ( dagnummer i m�naden ) f�r dagens datum
    var currentMonthShow = ''; // currentMonthShow - inneh�ller m�nad f�r dagens datum med format f�r visning
    var currentDayShow = ''; // currentDayShow - inneh�ller dag ( dagnummer i m�naden ) f�r dagens datum med format f�r visning
    var strToday = ''; 	// strToday - dagens datum som en str�ng med ett format anpassat f�r visning

    // Observera att m�nad s�tts med v�rdena 0 - 11 n�r dagens datum levereras med Date().
    // Vilket inneb�r att 0 = januari, 1 = februari, 2 = mars osv.
    // Korrigera m�ndssiffran f�r visning i olika meddelanden p� sk�rmen
    currentMonthShow = currentMonth + 1;
    if (currentMonthShow < 10) {
        currentMonthShow = '0' + currentMonthShow;
    }

    // Korrigera dagnummer f�r visning i olika meddelanden p� sk�rmen.
    currentDayShow = currentDay;
    if (currentDayShow < 10) {
        currentDayShow = '0' + currentDayShow;
    }
    // G�r iordning dagens datum som en str�ng f�r visning i en variabel i ett formul�r

    strToday = currentYear + '-' + currentMonthShow + '-' + currentDayShow;

    //window.alert('Dagens datum YYYY-MM-DD = ' + strToday + '    �r ' + currentYear + '  m�nad ' + currentMonthShow + ' dag ' + currentDayShow);
    return strToday;
}
//*******************************************************************************************
// returnerar true ifall datumet �r < = dagens
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
// Funktion som J�MF�R 2 DATUM            
//**********************************************************************************************************************************************************
//Den returnerar false i fall �ObjectDatum� �r EFTER  �CompareDatum� OCH man anropa How=�B�
//Den returnerar false i fall �ObjectDatum� �r INNAN  �CompareDatum� OCH man anropa How=�A�
// I b�da fall anropet skall finnas i �ObjectDatum� term dvs, den term som �ndras och skall j�mf�ras med en redan ifylld (�CompareDatum� )
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
                        alert('Kontrollera datum!.  Det f�r inte vara efter  ' + desc.innerHTML + '\n');
                        return false;
                    }
                    break;

                case 'B': 	// 'B'= ObjectDatumSKALL vara INNAN  CompareDatum
                    if (ObjDate >= CompDate) {
                        alert('Kontrollera datum!.  Det f�r inte vara lika eller efter  ' + desc.innerHTML + '\n');
                        return false;
                    }
                    break;
                case 'AL': 	// 'AL' = ObjectDatum SKALL vara EFTER eller LIKA CompareDatum
                    if (ObjDate < CompDate) {
                        alert('Kontrollera datum!. Det f�r inte vara innan  ' + desc.innerHTML + '\n');
                        return false;
                    }
                    break;

                case 'A': 	// 'A' = ObjectDatum SKALL vara EFTER CompareDatum
                    if (ObjDate <= CompDate) {
                        alert('Kontrollera datum!.  Det f�r inte vara lika eller innan ' + desc.innerHTML + '\n');
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
// Man beh�ver bara �ndra termers namn i block f�r calcAlderVidDiaDatum() 
//**************************************************************************************************************************************
function calcTidsskillnad(dateDatum1, dateDatum2, enhet) {
    // Ber�kna tidsskillnaden mellan tv� tidpunkter. 
    // Funktionen levererar tidsskillnaden mellan tv� datum. Det spelar ingen roll om i vilken ordningsf�ljd datum anges i parameterlistan
    // Funktionen kan anv�ndas f�r att ber�kna antalet �r, antalet dagar eller antalet minuter mellan tv� datum, vilka som helst. Den 
    // tredje parametern (enhet) avg�r i vilken enhet tidsskillnaden returneras. Parametern f�ruts�tts vara en textstr�ng.
    // enhet = AR returnerar antalet �r mellan tv� tidpunkter
    // enhet = DAG returnerar antalet dagar mellan tv� tidpunkter
    // enhet = MIN returnerar antalet minuter mellan tv� tidpunkter
    // Funktionen kan enkelt kompletteras f�r att �ven returnera m�nader och sekunder
    // Om enhet inte �r n�gon av ovan angivna returneras antalet �r mellan tv� datum

    var tempDate = new Date();

    if (dateDatum1 <= dateDatum2) {
        // Datum1 �r �ldre �n datum2 -> OK
    }
    else {
        // L�t datum1 och datum2 byta plats
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

    // �rtal f�r datum2 �r senare �r lika med �rtal f�r datum1. 
    // OBS! �rtal f�r datum 2 kan vara manipulerat
    if ((dateDatum2_ar - dateDatum1_ar) >= 0) {
        switch (enhet) {
            case 'AR':
                // Returv�rdet ska vara antalet �r mellan tidpunkterna
                return (dateDatum2_ar - dateDatum1_ar);
                break;
            case 'DAG':
                // Returv�rdet ska vara antalet dagar mellan tidpunkterna
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
                // Returv�rdet ska vara antalet minuter mellan tidpunkterna
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
        // window.alert('N�got �r fel');
        // Returnera ett tal f�r att inte f� ett felaktigt datav�rde som resultat
        return -1;
    }
}
//*************************************************************************************************************************************************************************************
//SLUT DATUMFUNKTIONER --- 
//*************************************************************************************************************************************************************************************
//�VRIGA ALLM�NNA FUNKTIONER --
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
// En funktion f�r att s�tta flera element i tillst�ndet HIDE (Dolda)
//*******************************************************************************************
function hideElements(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        hideElement(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion f�r att s�tta flera element i tillst�ndet SHOW (visas)
//*******************************************************************************************
function showElements(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        showElement(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion f�r att s�tta flera element i tillst�ndet DISABLED
//*******************************************************************************************
function disableElements(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        disableElement(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion f�r att s�tta flera element i tillst�ndet ENABLED
//*******************************************************************************************
function enableElements(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        enableElement(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion f�r att s�tta ett element i tillst�ndet DISABLED
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
// En funktion f�r att s�tta ett element i tillst�ndet ENABLED och fixa 3D utseende p� checkboxar
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
// En funktion f�r att f� en referens till ett element 
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
// En funktion f�r att kontrollera att en kontroll finns
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
//En funktion f�r att kontrollera om en str�ng inneh�ller numeriska tecken
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
//  En funktion f�r att s�tta ett v�rde i ett element
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
//  En funktion f�r att s�tta ett v�rde i ett element
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
//En funktion f�r att �terst�lla kontroller i ursprunglig style betr f�rg etc
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
//En funktion f�r att �ndra f�rg etc i kontroller
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
// En funktion f�r att d�lja ett element i formul�ret. 
//Parameter till funktionen �r en referens till element som kan l�sas i formul�rets objektlista.
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
// En funktion f�r att visa ett element p� formul�ret
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
// En funktion som kontrollerar om en kontroll �r ifylld eller �r null.
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
            // Textf�lt
            // window.alert('Typ TEXT, DATUM, HELTAL och DECIMALTAL');
            if ((objVal.value == ' ') || (objVal.value == '')) {
                arrayReturn[0] = sVarVal;
                arrayReturn[1] = 'F�ljande f�lt f�r inte vara tomt: ' + objDesc.innerHTML + '\n';
                arrayReturn[2] = sVarDesc;
            }
            break;
        case 'select-one':
            // Dropdownlista med m�jlighet till ett val
            // window.alert('Typ LISTA');
            if (objVal.selectedIndex == 0) {
                arrayReturn[0] = sVarVal;
                arrayReturn[1] = 'F�ljande lista f�r inte l�mnas utan val: ' + objDesc.innerHTML + '\n';
                arrayReturn[2] = sVarDesc;
            }
            break;
        case 'checkbox':
            // Kryssruta eller mer korrekt checkbox
            // window.alert('Typ SANT/FALSKT');
            if (objVal.checked != true) {
                arrayReturn[0] = sVarVal;
                arrayReturn[1] = 'F�ljande ruta f�r inte vara omarkerad: ' + objDesc.innerHTML + '\n';
                arrayReturn[2] = sVarDesc;
            }
            break;
        default:
            // Ok�nd typ av input-f�lt
            // window.alert('Typ OK�NT');
            arrayReturn[0] = sVarVal;
            arrayReturn[1] = 'F�ljande f�lt f�r inte vara tomt: ' + objDesc.innerHTML + '\n';
            arrayReturn[2] = sVarDesc;
    } // switch( objVal.type )

    // Skicka en array i retur med felmeddelanden ifyllda f�r f�lt som inte klarat kontrollen
    return arrayReturn;
}

//**************************************************************************************************************************
// Funktion som bara returnerar true i fall ett f�lt �r tomt, oberoende av typen (f�r kryss blir det true i fall krysset �r false.
//**************************************************************************************************************************

function ITisNull(sVarVal) {
    var objVal = document.getElementById(sVarVal);
    switch (objVal.type) {
        case 'text':
            // Textf�lt
            if ((objVal.value == ' ') || (objVal.value == '')) {
                return true;
            }
            break;
        case 'select-one':
            // Dropdownlista med m�jlighet till ett val
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
// funktion som bara returnerar true ifall ett f�lt t�ms av inneh�llet, oberoende av typen (f�r kryss blir det false ifall krysset �r true).
//****************************************************************************************************************************************************************************
function ClearControl(sVarVal) {
    var objVal = document.getElementById(sVarVal);
    switch (objVal.type) {
        case 'text':
            // Textf�lt
            if ((objVal.value != ' ') || (objVal.value != '')) {
                objVal.value = '';
                return true;
            }
            break;
        case 'select-one':
            // Dropdownlista med m�jlighet till ett val
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
//Funktion f�r att t�mma inneh�llet i en array
//*******************************************************************************************
function ClearController(elementArray) {
    for (i = 0; i < elementArray.length; i++) {
        ClearControl(elementArray[i]);
    }
}
//*******************************************************************************************
// En funktion f�r att s�tta fokus i ett formul�r
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
// En funktion f�r att s�tta fokus p� �rendepanelen
//*******************************************************************************************
function SetFocusToddEvent() {
    elementReference = getRefToElement('OverviewErrandHandler_ddEvent');   	// Flyttar focus till �tg�rdslistan n�r man fyllt i sista variablen

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
// En funktion f�r att exekvera en funktion i OnBlur. Parametrar �r kontrollens namn och funktionens nam
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
// En funktion f�r att exekvera en funktion i OnClick. Parametrar �r kontrollens namn och funktionens namn.
//******************************************************************************************************************************************
function setFunctionForOnClick(varID, strFunction) {
    elementReference = getRefToElement(varID);
    //window.alert('La varID es= ' + varID);

    if (!elementReference) {
        //window.alert('slutf�r button NOOOOOOO');
        return false; // Avbryt
    }
    else {
        //window.alert('slutf�r button finns');
        elementReference.onclick = strFunction;
        return true;
    }
}
//*************************************************************************************************************************************
// En funktion f�r att exekvera en funktion i OnChange. Parametrar �r kontrollens namn och funktionens namn
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
//funktion som l�gger ,0 i fall man skriver ett heltal och som avrundar till 1 decimal, i fall man skriver 2 decimaler.
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
        if (input.indexOf(find) > 0)       // om hittad, indexOf ger antalet tecken till v�nster! 
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
        if (input.indexOf(find2) > 0)   // man anv�nde punkt ist�llet f�r komma.
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
//Funktion f�r att s�tta fokus AKTA skall anv�ndas BARA i de kontroller som inte har andra onblur, eftersom denna funktion har onblur 
//**************************************************************************************************************************************************************************
function Tabbordning(from_var, to_var) {
    var tabfrom = getRefToElement(from_var); //from_var objektet f�r inte ha en annan onblur-funktion kopplad till sig
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
//Funktion som aktiverar alla avaktiverade kontroller f�r att ev nytt v�rde i kontrollerna skall sparas, anropas i clickUtfor 
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
// en fuktion som returnerar false i fall IE �r �ldre �n version 7.0, och kontroller �r tredimensionella by default.
// Den returnerar true n�r IE �r 7.0
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
            //alert('version �r 7.0');
            return true;
        }
    }
}
//************************************************************************************************************************************************************************
//En fuktion som returnerar false i fall FireFox �r nyare �n version 1.0, och kontroller �r tredimensionella by default. 
//Den returnerar true n�r FireFox �r 1.0 eller �ldre
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
            //alert('version �r 1.0, eller �ldre och Windows');
            return true;
        }
    }
}
//***********************************************************************************************************************************************
//Funktion som returnerar false om browsern �r av nyare typ med 3D-f�lt och true om browsern �r av �ldre typ 
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
    var r = confirm("Bekr�fta att du vill avbryta och radera inrapportering genom att trycka p� OK.\n\n Om du �ngrar dig och INTE vill avbryta och radera inrapportering, tryck p� Avbryt!");
    if (r == true) {
        return true;
    }
    else {
        return false;
    }
}

//****************************************************************************************************************************************************************
// En funktion f�r att kontrollera vilken �tg�rd  �r vald i �rendepanelen och returnerar v�rde f�r �tg�rden (value == 2, f�r klar, t.ex.)
// ID p� kontrollen som inneh�ller valbara �tg�rder �r "v�lk�nd"! (OverviewErrandHandler_ddEvent)
//****************************************************************************************************************************************************************
// En funktion f�r att kontrollera vilken �tg�rd  som �r vald i �rendepanelen och returnerar v�rde f�r �tg�rden (value == 2, f�r klar, t.ex.)
// ID p� kontrollen som inneh�ller valbara �tg�rder �r "v�lk�nd"! (OverviewErrandHandler_ddEvent)

function ChoosenEvent() {
    var FinnsEvents = GetRefToSeveral('OverviewErrandHandler_ddEvent'); // Blir sant i fall det finns �tg�rd lista 

    if (FinnsEvents) {
        var Events = getRefToElement('OverviewErrandHandler_ddEvent'); //om �TG�RD LISTA finns
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
                return '5';  	//P�minn
            case '6':
                return '6'; 	//Avbryt och radera
            case '7':
                return '7';  	//Skicka till annat OC
            case '8':
                return '8'; 	//Skicka p� remiss
            case '9':
                return '9'; 	//Hantera som normal�rende
            case '10':
                return '10'; 	//L�t monitor inrapportera
            case '11':
                return '11'; 	//Efterforska
            case '12':
                return '12'; 	//Kontrollera indata
            case '13':
                return '13'; 	//Skapa �rende fr�n fil
            case '14':
                return '14'; 	//Spara som inrapporterat
            case '15':
                return '15'; 	//Kontrollera och spara
            case '16':
                return '16'; 	//Avbryt och st�ng
            case '17':
                return '17'; 	//Skicka ans�kan
            case '18':
                return '18'; 	//Skicka till RBC
            case '19':
                return '19'; 	//Godk�nn ans�kan
            case '20':
                return '20'; 	//Avslag, �ters�nd
            case '21':
                return '21'; 	//Komplettera (papper)
            case '22':
                return '22'; 	//Avvakta canceranm�lan
            case '23':
                return '23'; 	//Skicka p� remiss och delspara
            case '24':
                return '24'; 	//Klar f�r godk�nnande
            case '25':
                return '25'; 	//Ej godk�nt
            case '26':
                return '26'; 	//Avvakta canceranm�lan(papper)
            case '27':
                return '27'; 	//Validera indata i fil
            case '28':
                return '28'; 	//Avvakta canceranm�lan, delspara
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
    var InrapporEnhet = getRefToElement(var_T8669_Val); 	// A_Inrapporterande enhet sjukhus, klinik.**OBS OBS OBS �NDRA***
    InrapporEnhet.value = ORG.options[ORG.selectedIndex].text; //Tar valt v�rde i orglistan och s�tter till InrappEnhet
}

// ENDAST MONITOR**************************************************  
//En funktion f�r att p�minna om att avmarkera  monitors checkboxar
//********************************************************************  
function CheckboxVarning() {
    if (checkKomplettering()) {
        window.alert("Kompletteringsrutan �r ikryssad, gl�m inte att kryssa f�r de termer som du vill l�gga i registret!");

    }
}

//**********************************************************************************
// �rendetyp MMfull 2.0.4(1)
// F�ljande kombinationer av status och �tg�rd kr�ver ett val i organisationslistan
// STATUS			�TG�RD
// * 					- (7) Skicka till annat OC
// * 					- (8) Skicka p� remiss
// *					- (23) Skicka p� remiss och delspara
// Monitor, ej klar		- (3) Komplettera
// Monitor, ej klar		- (4) Komplettera och delspara
// Monitor				- (1) Ej klar
// Monitor				- (2) Klar
// Monitor				- (3) Komplettera
// Monitor				- (21) Komplettera (papper)
// Monitor				- (26) Avvakta canceranm�lan (papper)
// Monitor				- (4) Komplettera och delspara
// Monitor				- (5) P�minn
// Monitor				- (29) Ej klar, delspara

function ShowHideOrg() {
    if ((FinnsEvents) && (FinnsStatus)) {
        // F�nga �ndringar i �tg�rdslistan. Visa eller d�lj organisationslistan med enheter beroende p� om den valda �tg�rden inneh�ller
        // aktiviteter som kr�ver organisationsenhet som parameter eller inte.

        // I �rendetypen MMfull 2.0.4(1) finns tre �tg�rder som alltid kr�ver ett val av organisationsenhet. Detta g�ller oavsett vilken status �rendet befinner sig i.
        // Detta blir en GRUNDINST�LLNING som kan korrigeras f�r vissa specifika �rendestatus
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

        // F�r vissa �rendestatus beh�vs en extra kontroll
        // F�r �rendestatus Monitor ska organisation v�ljas f�r ALLA �tg�rder UTOM �tg�rden Avbryt och radera
        if (Statusen.value == 'Monitor') {
            if ((Events.value == '6') || (Events.value == ''))	// F�r status Monitor ska organisation v�ljas f�r alla �tg�rder UTOM Avbryt och Radera och Inget val.
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
        // F�r �rendestatus Monitor, ej klar ska organisation v�ljas f�r tv� extra �tg�rder (Komplettera och Komplettera och delspara) ut�ver grundinst�llningen.
        else if (Statusen.value == 'Monitor, ej klar') {
            if ((Events.value == '3') || (Events.value == '4'))	// F�r status Monitor, ej klar ska organisation v�ljas f�r tv� �tg�rder (Komplettera och Komplettera och delspara).
            {
                //enableElement('OverviewErrandHandler_ddReceiver');
                showElement('OverviewErrandHandler_ddReceiver');
                showElement('OverviewErrandHandler_lblReceiver');
            }
        }
    }
}

//ENDAST MONITOR*************************************************************
//Funktion f�r att p�minna monitor om att koppla
//*******************************************************************************
function KopplaDialog() {
    var r = confirm("KOPPLA ALLTID f�rst INNAN ett p�g�ende �rende g�rs klar - g�ller �VEN DELSPARA.\n Ett undantag: F�RSTA �rendet f�r en patient om det inte finns n�gon cancerregisterpost.\n\n Om du har gl�mt att koppla och vill g�ra det nu, tryck p� avbryt!");
    if (r == true) {
        return true;
    }
    else {
        return false;
    }
}

//********************************************************************************************************************
//Skickar v�rde fr�n Organisationslistan till Inrapporterande enhet  om statusf�lt finns och status = Monitor.
//Anropar setSjhKlinKod som extraherar Sjukhuskod och Klinikkod och skickar v�rden till resp f�lt i formul�ret
//Inparameter: elementRef: textstr�ng med elementnamn f�r Inrapporterande enhet
//Inparameter: elemSjh, textstr�ng med elementnamn f�r Sjukhuskod
//Inparameter: elemKlin, textstr�ng med elementnamn f�r  Klinikkod
//Senast �ndrad: 2009-01-27

function setOrganisationFromOrgList(elemRef, elemSjh, elemKlin) {
    var objStatus = getRefToElement('OverviewErrandHandler_txtState'); 	// Statusf�lt

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
                    elemInrappEnhet.value = inrappenhet; 	//skickar v�rde till InrappEnhet om status = Monitor //ENDAST MONITOR	
                    setSjhKlinKod(elemRef, elemSjh, elemKlin);
                }
            }
        }
        else
        //if (objStatus.value!='Monitor')
        {
            disableElement(elemRef);     // inaktivera registervariabeln f�r Inrapporterande enhet
            var elemKlinKod = getRefToElement(elemKlin);
            var elemSjhKod = getRefToElement(elemSjh);
            if ((elemKlinKod.value == "") && (elemSjhKod.value == ""))//Om status inte �r Monitor och b�de sjukhuskod och klinikkod �r tomma h�mtas sjukhuskod och klinikkod
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
//S�tter klinikkod, anropas fr�n setOrganisationFromOrgList
//Inparameter elemRef: textstr�ng med tekniskt namn f�r Inrapporterande enhet
//Inparameter elemSjh: textstr�ng med tekniskt namn f�r Sjukhuskod
//Inparameter elemKlin: textstr�ng med tekniskt namn f�r Klinikkod
//Senast �ndrad 2009-07-08 �sa Sundberg
//Ny version f�r att inte "undefined" ska visas i klinikkodsrutan n�r man v�ljer en organisatinosenhet som saknar klinikkod

function setSjhKlinKod(elemRef, elemSjh, elemKlin) {
    var elemInrappEnhet = getRefToElement(elemRef);
    var inrappenhet = elemInrappEnhet.value;
    var elemSjhKod = getRefToElement(elemSjh);
    var elemKlinKod = getRefToElement(elemKlin);

    var patt = new RegExp(/\)/);

    var find = /\)/g;

    if (patt.test(inrappenhet) == true) //Kontrollerar om det finns ett parentestecken och d�rmed ocks� om det finns koder i str�ngen
    {
        var strInrapp = inrappenhet.replace(/\)/g, "(");
        strInrapp = strInrapp.split("(");
        elemSjhKod.value = strInrapp[3];

        var result = inrappenhet.match(find); //Kontrollerar hur m�nga h�gerparenteser som finns

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
// Deklarera tre variabler som anv�nds f�r att testa om kontroller i �rendepanelen �r tillg�ngliga
var FinnsStatus = GetRefToSeveral('OverviewErrandHandler_txtState'); 		// Statusf�lt  
var FinnsEvents = GetRefToSeveral('OverviewErrandHandler_ddEvent');  		// �tg�rdslista  
var Statusen = getRefToElement('OverviewErrandHandler_txtState');

if (FinnsEvents) {
    var Events = getRefToElement('OverviewErrandHandler_ddEvent'); // om  kontrollen �tg�rdslista finns p� formul�ret
}

setFunctionForOnChange('OverviewErrandHandler_ddEvent', ShowHideOrg); // Finns endast i monitorformul�r 

// L�gger i onblur p� �tg�rd listan en funktion som aktiverar/avaktiverar organisationsenhet.ENDAST MONITOR
ShowHideOrg();
//Om  kompletteringskryssrutan �r markerad - varning + uppmaning att markera de termer man vill l�gga in i registret fr�n monitorsformul�r	ENDAST MONITOR	
CheckboxVarning();

//D�lj och avaktivera kontroller
// hideElement(var_HeaderControl2_Head); // Rubrik f�r dolda variabler
// hideElement(var_T63746_Val); //G�r LKF-dia osynligt --- osynlig ENDAST  INRAPPORT�R
// hideElement(var_T63746_Desc); //G�r LKF-dia label osynlig --- osynlig ENDAST  INRAPPORT�R
// hideElement(var__LKF_Val); //G�r LKF osynligt  --- B�DE INRAPPORT�R OCH MONITOR
// hideElement(var__LKF_Desc); //G�r LKF text osynlig   --- B�DE INRAPPORT�R OCH MONITOR
// hideElement(var_T63747_Val); //G�r  inrapporteringsdatum osynligt --- osynlig ENDAST F�R INRAPPORT�R
// hideElement(var_T63747_Desc); //G�r  inrapporteringsdatum label osynligt --- osynlig ENDAST F�R INRAPPORT�R

// hideElement(var_T63742_Val); //G�r Inrapport�r  osynlig  --- osynlig ENDAST F�R INRAPPORT�R
// hideElement(var_T63742_Desc); // G�r Inrapport�r label  osynlig --- osynlig ENDAST F�R INRAPPORT�R
// hideElement(var_T63743_Val); //G�r Inrapporterande enhet osynlig --- osynlig ENDAST F�R INRAPPORT�R
// hideElement(var_T63743_Desc); //G�r  Inrapporterande enhet label  osynlig --- osynlig ENDAST F�R INRAPPORT�R

// disableElement(var_T42395_Val);   // disable �lder  och sedan enable den  i clickUtfor f�r att kunna skicka v�rde vidare !!!!!  
//hideElement(var_T42395_Val);
//hideElement(var_T42395_Desc);

//****************************************************************************
//Funktioner som anropas i onload
PickUpValue(var_T464641_Val, var__LKF_Val); // H�mta v�rde till LKF-dia 
SetValueInEmptyElement(var_T464642_Val, getDagensDatum()); // Rapporteringsdatum (dold i inrapport�rs formul�r) 
SetValueInEmptyElement(var_T464656_Val, getDagensDatum()); // Datum f�r ifyllande
changeValue(var_T464647_Val, TrimString(var_T464647_Val)); // Trimma inledande och avslutande blanka 
PickUpValue(var_T464647_Val, var__INREPNAME_Val); // Initierat av (dold i inrapport�rs formul�r)
changeValue(var_T464648_Val, TrimString(var_T464648_Val)); // Trimma inledande och avslutande blanka 
PickUpValue(var_T464648_Val, var__REPORTERNAME_Val); // Inrapport�r (dold i inrapport�rs formul�r)
changeValue(var_T464644_Val, TrimString(var_T464644_Val)); // Trimma inledande och avslutande blanka 
PickUpValue(var_T464644_Val, var__INUNITNAME_Val); // inrapporterande enhet (dold i inrapport�rs formul�r)


// Aktiviera fr�ga om hemsjukhus d� denna inte �r samma som rapporterande enhet
toggle_hemsjukhus();
// Aktiverar  patologenhet, prepnr och prep�r om Morfologi �r bed�md = JA
toggle_MorfologiBedomd();
// Aktiverar textf�lt f�r gynonkologisk enhet
toggle_RemissGynOnk();
// Aktiverar textf�lt f�r prim�roperation
toggle_Primoperation();
// Aktiverar textf�lt f�r annan sjukv�rdsinr�ttning
toggle_RemissAnnan();

// //****************************************************************************************************************************************************************
// S�tt egenskaper f�r l�nken till pdf-filen med hj�lptexter
//setFunctionForLink( var_LinkControl1_Link, '#var_LinkControl1_Link', '_self', 'https://www.inca.sjunet.org/pic/oc_gbg/Ovarial/Help.pdf', 'Hj�lp', '800', '900', '550', '150' );
// setFunctionForOnClick( var_LinkControl5_Link, clickTillAtgard );
// setFunctionForLink(var_LinkControl1_Link, '#var_LinkControl1_Link', '_self', 'http://www.incanet.se/upload/Dokument/oc5/Ovarial/FIGO Stadieindelning.pdf', 'Kriterier', '800', '900', '550', '150');

// Aktiviera fr�ga om hemsjukhus d� denna inte �r samma som rapporterande enhet
setFunctionForOnChange(var_T464651_Val, toggle_hemsjukhus);
// Aktiverar  patologenhet, prepnr och prep�r om Morfologi �r bed�md av referenspatolog = JA
setFunctionForOnChange(var_T464668_Val, toggle_MorfologiBedomd);
// Aktiverar  textf�lt f�r Gynonk
setFunctionForOnChange(var_T464673_Val, toggle_RemissGynOnk);
// Aktiverar  textf�lt f�r Prim�roperation
setFunctionForOnChange(var_T464677_Val, toggle_Primoperation);
// Aktiverar  textf�lt f�r annan sjukv�rdsinr�ttning
setFunctionForOnChange(var_T464681_Val, toggle_RemissAnnan);

// Kontrollera �rtal f�r preparatnummer
setFunctionForOnBlur(var_T464667_Val, checkYear);
setFunctionForOnBlur(var_T464672_Val, checkYear);

//�lder vid diagnos ber�knas n�r man l�mnar diagnosdatum och �ven n�r man l�mnar �lder vid diagnos
setFunctionForOnBlur(var_T464657_Val, calcAlderVidDiaDatum);
calcAlderVidDiaDatum()

//Skickar v�rde fr�n Organisationslistan till Inrapporterande enhet  om statusf�lt finns och status = Monitor - ENDAST MONITOR
//Inparametrar; registervariablernas tekniska namnen  (inrapp_sjukhusklinik, sjukhuskod, klinikkod)
setOrganisationFromOrgList(var_T464644_Val, var_T464645_Val, var_T464646_Val);


// D�lj uppgift om �lder 
disableElement(var_T464650_Val);
// hideElement(var_T464650_Desc);
// hideElement(var_HeaderControl7_Head); // �r