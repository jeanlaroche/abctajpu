//////////////////////////////////////////////////////////////////////////////
// Vi povas modifi tiun chi dosieron por via persona uzo, kaj se vi
// emas al tio, eble la kora funkcio "tujtraduku_literojn__" estus
// bona deirpunkto.
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// //////////////////////////////
// You can modify this file for your personal use, and if you
// tends to that, maybe the heart function "instantly translate_letters__" would be
// good starting point.
//////////////////////////////////////////////////// //////////////////////////////

var tajpu = {

	tondujo1 : "",
	tondujo2_length : 0,
	tb_pauz : 180,
	tb_niamaks : 50,
	tb_viamaks : 1,
	tondujo2_spaco : false,
	to : null,
	ConsoleService : null,
	pgClipboard: null,
	source: null,
	trans: null,
	str2: null,

	init: function() {
		if (navigator.userAgent.search(/firefox/gi) == -1 && navigator.userAgent.search(/seamonkey/gi) == -1)
		{
			try {
				var korpo = document.getElementById('msgComposeContext');
				korpo.addEventListener('popupshowing', tajpu.montrado, false);
			} catch (e) {}

			try {
				var korpo = document.getElementById('editorContentContext');
				korpo.addEventListener('popupshowing', tajpu.montrado, false);
			} catch (e) {}

			try {
				var menuF = document.getElementById('contentAreaContextMenu');
				menuF.addEventListener('popupshowing', tajpu.montrado, false);
			} catch (e) {}
		
			try {
				//var adresoj = document.getElementById('addressingWidget'); // problemo en TB 3.0a1
				//adresoj.addEventListener('popupshowing', tajpu.montrado_a, true);
			} catch (e) {}

			try {
				var temo = document.getElementById('msgSubject');
				temo.addEventListener('popupshowing', tajpu.montrado_t, true);
			} catch (e) {}

			try {
			// IAL TIU CHI KS NE FUNKCIAS:
				var trovujo;
				if (document.getElementById("searchInput")) {
				trovujo = document.getElementById("searchInput").mTextbox;
				} else if (document.getElementById("search-input")) {
				trovujo = document.getElementById("search-input");
				} else if (document.getElementById("input")) {
				trovujo = document.getElementById("input").firstChild.firstChild;
				}
				trovujo.addEventListener('popupshowing', tajpu.montrado_z, true);
			} catch (e) {}

		}
		else
		{
			try {
				var menuF = document.getElementById('contentAreaContextMenu');
				menuF.addEventListener('popupshowing', tajpu.montrado, false);
			} catch (e) {}
		
			try {
				var adresujo = document.getElementById("urlbar");
				adresujo.addEventListener("popupshowing", tajpu.montrado_l, true);
			} catch (e) {}

			try {
				var tekstserchujo = document.getElementById("find-field");
				tekstserchujo.addEventListener("popupshowing", tajpu.montrado_s, true); // Okazas che pagh-shargo (3 foje?)
			} catch (e) {}

			try {
				var trovujo;
				if (document.getElementById("searchbar")) {
					trovujo = document.getElementById("searchbar"); //.mTextbox;
				} else if (document.getElementById("search-bar")) {
					trovujo = document.getElementById("search-bar");
				} else if (document.getElementById("input")) {
				trovujo = document.getElementById("input").firstChild.firstChild;
				}
				trovujo.addEventListener("popupshowing", tajpu.montrado_k, true);
			} catch (e) {}
		}


 
  document.addEventListener('click', tajpu.klaka_loko, false);

 // Post unua shargho montru preskau nenion:
try
{
		document.getElementById('context-tajpu-af').hidden = true;
		document.getElementById('context-tajpu-ar').hidden = true;
		document.getElementById('context-tajpu-be').hidden = true;
		document.getElementById('context-tajpu-br').hidden = true;
		document.getElementById('context-tajpu-ca').hidden = true;
		document.getElementById('context-tajpu-cs').hidden = true;
		document.getElementById('context-tajpu-cy').hidden = true;
		document.getElementById('context-tajpu-da').hidden = true;
		document.getElementById('context-tajpu-de').hidden = true;
		document.getElementById('context-tajpu-el').hidden = true;
		document.getElementById('context-tajpu-eo').hidden = true;
		document.getElementById('context-tajpu-es').hidden = true;
		document.getElementById('context-tajpu-et').hidden = true;
		document.getElementById('context-tajpu-eu').hidden = true;
		document.getElementById('context-tajpu-fi').hidden = true;
		document.getElementById('context-tajpu-fr').hidden = true;
		document.getElementById('context-tajpu-ga').hidden = true;
		document.getElementById('context-tajpu-gl').hidden = true;
		document.getElementById('context-tajpu-he').hidden = true;
		document.getElementById('context-tajpu-hi').hidden = true;
		document.getElementById('context-tajpu-hr').hidden = true;
		document.getElementById('context-tajpu-hu').hidden = true;
		document.getElementById('context-tajpu-is').hidden = true;
		document.getElementById('context-tajpu-it').hidden = true;
		document.getElementById('context-tajpu-ja_h').hidden = true;
		document.getElementById('context-tajpu-ja_k').hidden = true;
		document.getElementById('context-tajpu-ko').hidden = true;
		document.getElementById('context-tajpu-lb').hidden = true;
		document.getElementById('context-tajpu-lt').hidden = true;
		document.getElementById('context-tajpu-lv').hidden = true;
		document.getElementById('context-tajpu-mk').hidden = true;
		document.getElementById('context-tajpu-mt').hidden = true;
		document.getElementById('context-tajpu-nl').hidden = true;
		document.getElementById('context-tajpu-no').hidden = true;
		document.getElementById('context-tajpu-oc').hidden = true;
		document.getElementById('context-tajpu-pl').hidden = true;
		document.getElementById('context-tajpu-pt').hidden = true;
		document.getElementById('context-tajpu-rm').hidden = true;
		document.getElementById('context-tajpu-ro').hidden = true;
		document.getElementById('context-tajpu-ru').hidden = true;
		document.getElementById('context-tajpu-se').hidden = true;
		document.getElementById('context-tajpu-sk').hidden = true;
		document.getElementById('context-tajpu-sl').hidden = true;
		document.getElementById('context-tajpu-sq').hidden = true;
		document.getElementById('context-tajpu-sr').hidden = true;
		document.getElementById('context-tajpu-sv').hidden = true;
		document.getElementById('context-tajpu-th').hidden = true;
		document.getElementById('context-tajpu-tr').hidden = true;
		document.getElementById('context-tajpu-uk').hidden = true;
		document.getElementById('context-tajpu-zh_p').hidden = true;
} catch (e) {}

	try
	{
		var nun_preferoj = Components.classes["\@mozilla.org/preferences-service;1"].
				    getService(Components.interfaces.nsIPrefService).
				    getBranch("tajpu.");
		if (nun_preferoj.getCharPref('rapidklavo') != '')
		{
			document.getElementById('klavo-tujtraduku').setAttribute('keycode', "VK_"+nun_preferoj.getCharPref('rapidklavo'));
		}
		if (!nun_preferoj.getBoolPref('uzu_alt_f2')) 
		{ 
			document.getElementById('tajpu_F2').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F2s').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F2sc').setAttribute('keycode', "VK_F15"); 
		}
		if (!nun_preferoj.getBoolPref('uzu_alt_f5')) 
		{ 
			document.getElementById('tajpu_F5').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F5s').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F5sc').setAttribute('keycode', "VK_F15"); 
		}
		if (!nun_preferoj.getBoolPref('uzu_alt_f7')) 
		{ 
			document.getElementById('tajpu_F7').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F7s').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F7sc').setAttribute('keycode', "VK_F15"); 
		}
		if (!nun_preferoj.getBoolPref('uzu_alt_f8')) 
		{ 
			document.getElementById('tajpu_F8').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F8s').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F8sc').setAttribute('keycode', "VK_F15"); 
		}
		if (!nun_preferoj.getBoolPref('uzu_alt_f10')) 
		{ 
			document.getElementById('tajpu_F10').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F10s').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F10sc').setAttribute('keycode', "VK_F15"); 
		}
		if (!nun_preferoj.getBoolPref('uzu_alt_f11')) 
		{ 
			document.getElementById('tajpu_F11').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F11s').setAttribute('keycode', "VK_F15"); 
			document.getElementById('tajpu_F11sc').setAttribute('keycode', "VK_F15"); 
		}
	}
	catch(e)
	{
	}




	},
	
	montrado_a: function(e) {
		try
		{
			// provizore akceptita problemeto : mia menuo metita nur sur unuan adres-linion de la unua (post Thunderbird-starto) redaktita letero!!
			tajpu.montrado_(e, "a-");
		}
		catch (e)
		{
		}
	},

	montrado_t: function(e) {
		try
		{
			tajpu.montrado_(e, "t-");
		}
		catch (e)
		{
		}
	},

	montrado_l: function(e) {
		try
		{
			tajpu.montrado_(e, "l-");
		}
		catch (e)
		{
		}
	},

	montrado_s: function(e) {
		try
		{
			tajpu.montrado_(e, "s-");
		}
		catch (e)
		{
		}
	},

	montrado_z: function(e) {
		try
		{
			tajpu.montrado_(e, "z-");
		}
		catch (e)
		{
		}
	},

	montrado_k: function(e) {
		try
		{
			tajpu.montrado_(e, "k-");
		}
		catch (e)
		{
		}
	},

	menuero: function(e, kie, kio) {
		var nun_preferoj = Components.classes["@mozilla.org/preferences-service;1"].
			    getService(Components.interfaces.nsIPrefService).
			    getBranch("tajpu.");

		var tb = false;
		if (navigator.userAgent.search(/firefox/gi) == -1 && navigator.userAgent.search(/seamonkey/gi) == -1) {tb = true;}

		var jama = document.getElementById("context-"+kie+"tajpu-"+kio);
		if (jama)
		{
		    jama.hidden = true;
		}
	},

	montrado_: function(e, kie) {

	try{document.getElementById('context-tajpu-transformoj').hidden = false;}catch(e){}
  if (
	  e.originalTarget.localName == "menupopup"
	  && !document.getElementById("context-"+kie+"abcTajpu") // jam aldonita
  )
  {




      var nova = document.getElementById('context-abcTajpu').cloneNode(true);
      if (nova)
      {
	      e.originalTarget.appendChild(document.createElement("menuseparator"));

	      nova.setAttribute("id", "context-"+kie+"abcTajpu");
	      e.originalTarget.appendChild(nova);
      }
  }

  if ( e.originalTarget.localName == "menupopup" )
  {
	var infano;

	var nun_preferoj = Components.classes["@mozilla.org/preferences-service;1"].
		    getService(Components.interfaces.nsIPrefService).
		    getBranch("tajpu.");
var lingvoj = new Array();
lingvoj[0]='af';
lingvoj[1]='ar';
lingvoj[2]='be';
lingvoj[3]='br';
lingvoj[4]='ca';
lingvoj[5]='cs';
lingvoj[6]='cy';
lingvoj[7]='da';
lingvoj[8]='de';
lingvoj[9]='el';
lingvoj[10]='eo';
lingvoj[11]='es';
lingvoj[12]='et';
lingvoj[13]='eu';
lingvoj[14]='fi';
lingvoj[15]='fr';
lingvoj[16]='ga';
lingvoj[17]='gl';
lingvoj[18]='he';
lingvoj[19]='hi';
lingvoj[20]='hr';
lingvoj[21]='hu';
lingvoj[22]='is';
lingvoj[23]='it';
lingvoj[24]='ja_h';
lingvoj[25]='ja_k';
lingvoj[26]='ko';
lingvoj[27]='lb';
lingvoj[28]='lt';
lingvoj[29]='lv';
lingvoj[30]='mk';
lingvoj[31]='mt';
lingvoj[32]='nl';
lingvoj[33]='no';
lingvoj[34]='oc';
lingvoj[35]='pl';
lingvoj[36]='pt';
lingvoj[37]='rm';
lingvoj[38]='ro';
lingvoj[39]='ru';
lingvoj[40]='se';
lingvoj[41]='sk';
lingvoj[42]='sl';
lingvoj[43]='sq';
lingvoj[44]='sr';
lingvoj[45]='sv';
lingvoj[46]='th';
lingvoj[47]='tr';
lingvoj[48]='uk';
lingvoj[49]='zh_p';
lingvoj[50]='e2';
lingvoj[51]='sa';
lingvoj[52]='i5';
for (var i=0; i<=52; i++)
{
	try
	{
		elemento = document.getElementById("context-tajpu-"+kie+lingvoj[i]);
		if (!elemento)
		{
			    var nomo1 = "context-tajpu-"+lingvoj[i];
			    elemento = document.getElementById(nomo1).cloneNode(true);
			    var nomo2 = "context-tajpu-"+kie+lingvoj[i];
			    elemento.setAttribute("id", nomo2);
			    e.originalTarget.appendChild(elemento);
		}
		if ( !nun_preferoj.getBoolPref('kashu_'+lingvoj[i]) )
		{
			    elemento.hidden = false;
		}
		else
		{
			    elemento.hidden = true;
		}
	}
	catch (e) {}
}
   }
},

	//////////////////////////////////////////////////////////////////////////////
	// Montru miajn funkciojn, simple se Malfaru montrita.
	// Show my functions, simply if Undo shown.
	montrado: function() {

		var nun_preferoj = Components.classes["@mozilla.org/preferences-service;1"].
			    getService(Components.interfaces.nsIPrefService).
			    getBranch("tajpu.");


		var tb = false;
		if (navigator.userAgent.search(/firefox/gi) == -1 && navigator.userAgent.search(/seamonkey/gi) == -1) {tb = true;}

		try 
		{
			if (!nun_preferoj.getBoolPref('menuo'))
			{
				document.getElementById('context-abcTajpu').hidden = true;
			}
			else
			{
				document.getElementById('context-abcTajpu').hidden = tb?false:document.getElementById('context-paste').hidden; // cut ne copy cxar yahoo mesagxa korpo, kaj cxar krom analizu gxi farus nenion
			}

			//document.getElementById('context-tajpu-transformoj').hidden = tb?true:false;
			document.getElementById('context-tajpu-analizu').hidden = tb?true:false;


		if (!nun_preferoj.getBoolPref('kashu_af')) document.getElementById('context-tajpu-af').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-af').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_ar')) document.getElementById('context-tajpu-ar').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-ar').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_be')) document.getElementById('context-tajpu-be').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-be').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_br')) document.getElementById('context-tajpu-br').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-br').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_ca')) document.getElementById('context-tajpu-ca').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-ca').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_cs')) document.getElementById('context-tajpu-cs').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-cs').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_cy')) document.getElementById('context-tajpu-cy').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-cy').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_da')) document.getElementById('context-tajpu-da').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-da').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_de')) document.getElementById('context-tajpu-de').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-de').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_el')) document.getElementById('context-tajpu-el').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-el').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_eo')) document.getElementById('context-tajpu-eo').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-eo').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_es')) document.getElementById('context-tajpu-es').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-es').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_et')) document.getElementById('context-tajpu-et').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-et').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_eu')) document.getElementById('context-tajpu-eu').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-eu').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_fi')) document.getElementById('context-tajpu-fi').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-fi').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_fr')) document.getElementById('context-tajpu-fr').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-fr').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_ga')) document.getElementById('context-tajpu-ga').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-ga').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_gl')) document.getElementById('context-tajpu-gl').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-gl').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_he')) document.getElementById('context-tajpu-he').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-he').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_hi')) document.getElementById('context-tajpu-hi').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-hi').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_hr')) document.getElementById('context-tajpu-hr').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-hr').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_hu')) document.getElementById('context-tajpu-hu').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-hu').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_is')) document.getElementById('context-tajpu-is').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-is').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_it')) document.getElementById('context-tajpu-it').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-it').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_ja_h')) document.getElementById('context-tajpu-ja_h').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-ja_h').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_ja_k')) document.getElementById('context-tajpu-ja_k').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-ja_k').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_ko')) document.getElementById('context-tajpu-ko').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-ko').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_lb')) document.getElementById('context-tajpu-lb').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-lb').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_lt')) document.getElementById('context-tajpu-lt').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-lt').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_lv')) document.getElementById('context-tajpu-lv').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-lv').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_mk')) document.getElementById('context-tajpu-mk').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-mk').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_mt')) document.getElementById('context-tajpu-mt').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-mt').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_nl')) document.getElementById('context-tajpu-nl').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-nl').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_no')) document.getElementById('context-tajpu-no').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-no').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_oc')) document.getElementById('context-tajpu-oc').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-oc').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_pl')) document.getElementById('context-tajpu-pl').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-pl').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_pt')) document.getElementById('context-tajpu-pt').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-pt').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_rm')) document.getElementById('context-tajpu-rm').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-rm').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_ro')) document.getElementById('context-tajpu-ro').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-ro').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_ru')) document.getElementById('context-tajpu-ru').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-ru').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_se')) document.getElementById('context-tajpu-se').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-se').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_sk')) document.getElementById('context-tajpu-sk').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-sk').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_sl')) document.getElementById('context-tajpu-sl').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-sl').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_sq')) document.getElementById('context-tajpu-sq').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-sq').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_sr')) document.getElementById('context-tajpu-sr').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-sr').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_sv')) document.getElementById('context-tajpu-sv').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-sv').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_th')) document.getElementById('context-tajpu-th').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-th').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_tr')) document.getElementById('context-tajpu-tr').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-tr').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_uk')) document.getElementById('context-tajpu-uk').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-uk').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_zh_p')) document.getElementById('context-tajpu-zh_p').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-zh_p').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_e2')) document.getElementById('context-tajpu-e2').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-e2').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_sa')) document.getElementById('context-tajpu-sa').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-sa').hidden = true;
		if (!nun_preferoj.getBoolPref('kashu_i5')) document.getElementById('context-tajpu-i5').hidden = tb?false:document.getElementById('context-paste').hidden;
		else document.getElementById('context-tajpu-i5').hidden = true;
		}
		catch (e)
		{
		document.getElementById('context-tajpu-af').hidden = true;
		document.getElementById('context-tajpu-ar').hidden = true;
		document.getElementById('context-tajpu-be').hidden = true;
		document.getElementById('context-tajpu-br').hidden = true;
		document.getElementById('context-tajpu-ca').hidden = true;
		document.getElementById('context-tajpu-cs').hidden = true;
		document.getElementById('context-tajpu-cy').hidden = true;
		document.getElementById('context-tajpu-da').hidden = true;
		document.getElementById('context-tajpu-de').hidden = true;
		document.getElementById('context-tajpu-el').hidden = true;
		document.getElementById('context-tajpu-eo').hidden = true;
		document.getElementById('context-tajpu-es').hidden = true;
		document.getElementById('context-tajpu-et').hidden = true;
		document.getElementById('context-tajpu-eu').hidden = true;
		document.getElementById('context-tajpu-fi').hidden = true;
		document.getElementById('context-tajpu-fr').hidden = true;
		document.getElementById('context-tajpu-ga').hidden = true;
		document.getElementById('context-tajpu-gl').hidden = true;
		document.getElementById('context-tajpu-he').hidden = true;
		document.getElementById('context-tajpu-hi').hidden = true;
		document.getElementById('context-tajpu-hr').hidden = true;
		document.getElementById('context-tajpu-hu').hidden = true;
		document.getElementById('context-tajpu-is').hidden = true;
		document.getElementById('context-tajpu-it').hidden = true;
		document.getElementById('context-tajpu-ja_h').hidden = true;
		document.getElementById('context-tajpu-ja_k').hidden = true;
		document.getElementById('context-tajpu-ko').hidden = true;
		document.getElementById('context-tajpu-lb').hidden = true;
		document.getElementById('context-tajpu-lt').hidden = true;
		document.getElementById('context-tajpu-lv').hidden = true;
		document.getElementById('context-tajpu-mk').hidden = true;
		document.getElementById('context-tajpu-mt').hidden = true;
		document.getElementById('context-tajpu-nl').hidden = true;
		document.getElementById('context-tajpu-no').hidden = true;
		document.getElementById('context-tajpu-oc').hidden = true;
		document.getElementById('context-tajpu-pl').hidden = true;
		document.getElementById('context-tajpu-pt').hidden = true;
		document.getElementById('context-tajpu-rm').hidden = true;
		document.getElementById('context-tajpu-ro').hidden = true;
		document.getElementById('context-tajpu-ru').hidden = true;
		document.getElementById('context-tajpu-se').hidden = true;
		document.getElementById('context-tajpu-sk').hidden = true;
		document.getElementById('context-tajpu-sl').hidden = true;
		document.getElementById('context-tajpu-sq').hidden = true;
		document.getElementById('context-tajpu-sr').hidden = true;
		document.getElementById('context-tajpu-sv').hidden = true;
		document.getElementById('context-tajpu-th').hidden = true;
		document.getElementById('context-tajpu-tr').hidden = true;
		document.getElementById('context-tajpu-uk').hidden = true;
		document.getElementById('context-tajpu-zh_p').hidden = true;
		document.getElementById('context-tajpu-e2').hidden = true;
		document.getElementById('context-tajpu-sa').hidden = true;
		document.getElementById('context-tajpu-i5').hidden = true;
		}
	},

	//////////////////////////////////////////////////////////////////////////////
	klaka_loko: function(e) {
	  if (!e) e = window.event;
	  if (e.button != 2) return;
	  if (!e.target) return;
	  try {
		  if (e.target.getAttribute("readonly") == "readonly") {
			  document.getElementById('context-tajpu').setAttribute("disabled", true);
  	  }
  	  else {
		  document.getElementById('context-tajpu').setAttribute("disabled", false);
  	  }
  	}
  	catch (e) {}
	},

	//////////////////////////////////////////////////////////////////////////////
	elcent_klavaro: function(posxto, teksto) {
		// aldono de ekzemple __%
		// Adding for example
		try
		{
			if (posxto == 0) // Firefox
			{
				var tajpejo = document.commandDispatcher.focusedElement; // Sed en firefox /-rapidsercho, ne ekzistas fokusita elemento!!
				/// But in firefox / -speed search, there is no focused element !!
				var v = tajpejo.scrollTop;
				var h = tajpejo.scrollLeft;
				tajpu.metu(tajpejo,teksto);
				tajpejo.scrollTop = v;
				tajpejo.scrollLeft = h;
			}
			else // Thunderbird
			{
				if (teksto != "")
				{
					try
					{
						clearTimeout(tajpu.to);
						tajpu.to=setTimeout(function(){tajpu.tujtraduku_helpF();},0);
					}
					catch (e)
					{
						alert("Eraro, ne povus enmeti "+teksto);
					}
				}
			}
		}
		catch (e) // problemo ekzemple Yahoo retposhto //// problem for example Yahoo email
		{
			if (teksto != "")
			{
				try
				{
					clearTimeout(tajpu.to);
					tajpu.to=setTimeout(function(){tajpu.tujtraduku_helpF();},0);
				}
				catch (e)
				{
					alert("Eraro, ne povus enmeti "+teksto);
				}
			}
		}
	},

	//////////////////////////////////////////////////////////////////////////////

	tajpu_hhhh: function () {
		var c=prompt("&#xHHHH; , HHHH = ?");
		if (c) 
		{
			var C = String.fromCharCode(parseInt("0x"+c));

			tajpu.skribu_tondujon(C);
			clearTimeout(tajpu.to);
			tajpu.to=setTimeout(function(){goDoCommand('cmd_paste');},tajpu.tb_pauz);
		}
	},

	//////////////////////////////////////////////////////////////////////////////

		tl: function(posxto, teksto) {
			tajpu.skribu_tondujon(teksto);
			clearTimeout(tajpu.to);
			tajpu.to=setTimeout(function(){goDoCommand('cmd_paste');},tajpu.tb_pauz);
	},

		html_klavaro2: function () {
			var fokusitaFenestro = document.commandDispatcher.focusedElement;
			//var x; var p; for (x in fokusitaFenestro) {p += "\n" + x + ":" + fokusitaFenestro[x];}; alert(prompt("",p));
			if (fokusitaFenestro["baseURI"] != "chrome://browser/content/browser.xul"
			||  fokusitaFenestro["className"].indexOf("autocomplete-textbox") == -1)
				return false;
			var obj = new Object();
			obj.res = new String(fokusitaFenestro["value"]);
			window.openDialog("chrome://tajpu/content/html_klavaro.html","_blank","width=850,height=720,chrome,close,modal,titlebar,resizable",obj);

			tajpu.skribu_tondujon(""+obj.res);
			clearTimeout(tajpu.to);
			tajpu.to=setTimeout(function(){goDoCommand('cmd_paste');},tajpu.tb_pauz);
			return true;
	},

		html_klavaro: function () {
			//if (tajpu.html_klavaro2()) return;
			var obj = new Object();
			obj.res = new String("");
			window.openDialog("chrome://tajpu/content/html_klavaro.html","_blank","width=850,height=720,chrome,close,modal,titlebar,resizable",obj);

			tajpu.skribu_tondujon(""+obj.res);
			clearTimeout(tajpu.to);
			tajpu.to=setTimeout(function(){goDoCommand('cmd_paste');},tajpu.tb_pauz);
	},

		html_klavoj: function () {
			//if (tajpu.html_klavaro2()) return;
			var obj = new Object ( );
			obj.res = "";
			window.openDialog("chrome://tajpu/content/html_klavoj.html","_blank","width=830,height=740,chrome,close,modal,resizable,alwaysRaised=yes",obj);

			tajpu.skribu_tondujon(""+obj.res);
			clearTimeout(tajpu.to);
			tajpu.to=setTimeout(function(){goDoCommand('cmd_paste');},tajpu.tb_pauz);
	},

			html_esperanto: function () {
			var obj = new Object();
			obj.res = new String("");
			window.openDialog("chrome://tajpu/content/html_esperanto.html","_blank","width=800,height=620,chrome,close,modal,titlebar,resizable",obj);

			tajpu.skribu_tondujon(""+obj.res);
			clearTimeout(tajpu.to);
			tajpu.to=setTimeout(function(){goDoCommand('cmd_paste');},tajpu.tb_pauz);
	},

	//////////////////////////////////////////////////////////////////////////////
	analizu_literojn: function () {

		var fokusitaFenestro = document.commandDispatcher.focusedWindow;
		var selektajho = fokusitaFenestro.getSelection(); //fokusitaFenestro.__proto__.getSelection.call(fokusitaFenestro);
		var teksto = String(selektajho);
		if (teksto.length==0)
		{
			var tajpejo = document.commandDispatcher.focusedElement;
			teksto = tajpejo.value;
		}
		if (teksto.length!=0)
		{
			window.open('http://lingvo.org/cgi-bin/analizu/analizu?tt='+teksto,"Analizu","width=330,height=500,resizable,scrollbars")
		}
	},

	//////////////////////////////////////////////////////////////////////////////
	flagigu_literojn: function () {

		var fokusitaFenestro = document.commandDispatcher.focusedWindow;
		var selektajho = fokusitaFenestro.getSelection(); //fokusitaFenestro.__proto__.getSelection.call(fokusitaFenestro);
		var teksto = String(selektajho);
		if (teksto.length==0)
		{
			var tajpejo = document.commandDispatcher.focusedElement;
			teksto = tajpejo.value;
		}
		if (teksto.length!=0)
		{
			window.open('http://lingvo.org/flagoj?teksto='+teksto,"Flagoj","width=980,height=780,resizable,scrollbars")
		}
	},
		
	//////////////////////////////////////////////////////////////////////////////

tujtraduku_helpF: function() {
try
{
		clearTimeout(tajpu.to);
		tajpu.tondujo1 = tajpu.legu_tondujon();
		tajpu.tujtraduku_help0();
		// Apparently does not go here!
		asdf
		console.log('FUCK');
		console.error('FUCK2');
		}catch(e){alert(e);goDoCommand('cmd_selectNone');}
		},
		
logToConsole: function (msg) {
	  if (tajpu.ConsoleService == null)
		tajpu.ConsoleService = Components.classes["@mozilla.org/consoleservice;1"]
								   .getService(Components.interfaces.nsIConsoleService);
	  tajpu.ConsoleService.logStringMessage(msg);
	} ,

		// USING THE CLIPBOARD: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Using_the_clipboard
tujtraduku_help0: function() {
try
{
		clearTimeout(tajpu.to);
		tajpu.tondujo2_length=0;
		// https://developer.mozilla.org/En/XUL/List_of_commands JEAN CHANGE.
		goDoCommand('cmd_selectNone');
		goDoCommand('cmd_selectCharPrevious'); // %
		goDoCommand('cmd_copy');
		var tondujo2 = tajpu.legu_tondujon();
		for (var uu = 0; uu < 50; uu++) {
			if(tondujo2 != '') { break;}
			tajpu.logToConsole("Re-reading");
			goDoCommand('cmd_selectNone');
			goDoCommand('cmd_selectCharPrevious'); // %
			goDoCommand('cmd_copy');
			tondujo2 = tajpu.legu_tondujon();
		}
		if(tondujo2 == '') {
			alert('Empty2');
		}
		var tondujo2_ = tondujo2.replace(/__%/g,"");
		var tondujo3 = tajpu.tujtraduku_literojn_(tondujo2+"__%", -1);
		// alert("["+tondujo2_+"] ["+tondujo3+"] "+tajpu.tb_viamaks);
		// Goes here if match, i.e., in the interesting cases.
		if (tondujo2_ != tondujo3 /* do bone, sxangxita */) {
			tondujo2_spaco=false; 
			// goDoCommand('cmd_copy');
			// clearTimeout(tajpu.to);
			// var tondujo2 = tajpu.legu_tondujon();
			// var tondujo3 = tajpu.tujtraduku_literojn_(tondujo2+"__%", 1);
			if (tondujo3 == "")
			{
				alert('DELETE'); // does not go here
				goDoCommand('cmd_delete'); // forstreku lini-komencan __%
			}
			else
			{
				if (tondujo2_spaco) {alert('space');tondujo3=" "+tondujo3;} // does not go here.
				// tajpu.skribu_tondujon(tondujo3); // write clipboard.
				tajpu.skribu_tondujon(tondujo3); // write clipboard.
				// Verify write to clipboard. If not right, redo!
				clearTimeout(tajpu.to);
				var foo = tajpu.legu_tondujon();
				if(foo != tondujo3) { 
					tajpu.logToConsole("No write! --" + foo + "--" + tondujo3);
				}
				setTimeout(function(){goDoCommand('cmd_paste');},100);
				// goDoCommand('cmd_paste');
				tajpu.logToConsole('Paste ' + tondujo3 + ' clip: ' + foo);
				// Sometimes, we get here, and no paste actually happened. We need to verify that the paste operation worked>
				// clearTimeout(tajpu.to);
				// tajpu.to=setTimeout(function(){tajpu.skribu_tondujon(tajpu.tondujo1); tajpu.to=null;},tajpu.tb_pauz); // nur simpla teksto, markiteco perdita!!
				// tajpu.to=setTimeout(function(){tajpu.tujtraduku_help3();},0);
			}
			}
		else {
				// alert("No translation --" + tondujo2_ + "--" + tondujo3);
				tajpu.logToConsole("No translation --" + tondujo2_ + "--" + tondujo3);
				goDoCommand('cmd_selectNone');
				goDoCommand('cmd_charNext');
			}
}catch(e){alert(e);goDoCommand('cmd_selectNone');}
},

tujtraduku_help0_OLD: function() {
try
{
		clearTimeout(tajpu.to);
		tajpu.tondujo2_length=0;
		// https://developer.mozilla.org/En/XUL/List_of_commands JEAN CHANGE.
		goDoCommand('cmd_selectNone');
		goDoCommand('cmd_selectCharPrevious'); // %
		// goDoCommand('cmd_selectCharPrevious'); // _
		// goDoCommand('cmd_selectCharPrevious'); // _
		// goDoCommand('cmd_selectCharPrevious'); // via
		tajpu.tujtraduku_help1();
		// tajpu.to=setTimeout(function(){tajpu.tujtraduku_help1();},0); // cedu por cmd
}catch(e){alert(e);goDoCommand('cmd_selectNone');}
},

tujtraduku_help00: function() {
try
{
		clearTimeout(tajpu.to);
		goDoCommand('cmd_selectCharPrevious');
		tajpu.tujtraduku_help1();
		// tajpu.to=setTimeout(function(){tajpu.tujtraduku_help1();},0); // cedu por cmd
}catch(e){alert(e);goDoCommand('cmd_selectNone');}
},

tujtraduku_help1: function() {
try
{
		clearTimeout(tajpu.to);
		goDoCommand('cmd_copy');
		tajpu.tujtraduku_help10();
		// tajpu.to=setTimeout(function(){tajpu.tujtraduku_help10();},0); // cedu por cmd
}catch(e){alert(e);goDoCommand('cmd_selectNone');}
},

tujtraduku_help10: function() {
try
{
		/*nur por Thunderbird*/ / * only for Thunderbird * /
		clearTimeout(tajpu.to);
		var tondujo2 = tajpu.legu_tondujon();
		var tondujo2_ = tondujo2.replace(/__%/g,"");
		var tondujo3 = tajpu.tujtraduku_literojn_(tondujo2+"__%", -1);
		// alert("["+tondujo2_+"] ["+tondujo3+"] "+tajpu.tb_viamaks);
		if (tondujo2_ != tondujo3 /* do bone, sxangxita */) {tondujo2_spaco=false; tajpu.tujtraduku_help11();}
		// else if (tondujo2.match(/\r|\n/) /*cxe novliniigxo*/ || tondujo2.length>tajpu.tb_viamaks+4) {tondujo2_spaco=false;goDoCommand('cmd_selectCharNext'); tajpu.to=setTimeout(function(){tajpu.tujtraduku_help11();},0);}
		else if (tondujo2.match(/\r|\n/) /*cxe novliniigxo*/ || tondujo2.length>tajpu.tb_viamaks+4) {tondujo2_spaco=false;goDoCommand('cmd_selectCharNext'); tajpu.tujtraduku_help11();}
		// else if (tondujo2.match(/^\s/)) {/*cxe spaco*/tondujo2_spaco=false;goDoCommand('cmd_selectCharNext'); tajpu.to=setTimeout(function(){tajpu.tujtraduku_help11();},0);}
		else if (tondujo2.match(/^\s/)) {/*cxe spaco*/tondujo2_spaco=false;goDoCommand('cmd_selectCharNext'); tajpu.tujtraduku_help11();}
		else if (tondujo2.length>tajpu.tondujo2_length) {/*meze de vorto*/tajpu.tondujo2_length=tondujo2.length;tajpu.tujtraduku_help00();}
		else {/*cxe spaco*/tondujo2_spaco=true;tajpu.to=setTimeout(function(){tajpu.tujtraduku_help11();},0);}
}catch(e){alert(e);goDoCommand('cmd_selectNone');}
},

tujtraduku_help11: function() {
try
{
		clearTimeout(tajpu.to);
		goDoCommand('cmd_copy');
		tajpu.tujtraduku_help2();
		// tajpu.to=setTimeout(function(){tajpu.tujtraduku_help2();},0);
}catch(e){alert(e);goDoCommand('cmd_selectNone');}
},


tujtraduku_help2: function() {
	try
	{
		clearTimeout(tajpu.to);
		var tondujo2 = tajpu.legu_tondujon();
		var tondujo3 = tajpu.tujtraduku_literojn_(tondujo2+"__%", 1);
		if (tondujo3 == "")
		{
			goDoCommand('cmd_delete'); // forstreku lini-komencan __%
		}
		else
		{
			if (tondujo2_spaco) {tondujo3=" "+tondujo3;}
			tajpu.skribu_tondujon(tondujo3);
			tajpu.tujtraduku_help3();
			// tajpu.to=setTimeout(function(){tajpu.tujtraduku_help3();},0);
		}
	}catch(e){alert(e);goDoCommand('cmd_selectNone');}
},

tujtraduku_help3: function() {
	try
	{
		goDoCommand('cmd_paste');
		clearTimeout(tajpu.to);
		// just plain text, markup lost !!
		tajpu.to=setTimeout(function(){tajpu.skribu_tondujon(tajpu.tondujo1); tajpu.to=null;},tajpu.tb_pauz); // nur simpla teksto, markiteco perdita!!
	}catch(e){alert(e);goDoCommand('cmd_selectNone');}
},

	tujtraduku_literojn: function() {

	// alert("JEN "+navigator.userAgent);
	if (navigator.userAgent.search(/firefox/gi) == -1 || navigator.userAgent.search(/seamonkey/gi) >= 0)
	{
		// Tondrobird au SeaMonkey(ekz.composer) ////////////////////////////////////////////////////////

		/*
				//redaktilo = GetCurrentEditor();
				// https://developer.mozilla.org/en/docs/XPCOM_Interface_Reference/NsIEditor   for (var key in redaktilo) {if (!confirm(key)) {break;}}

		try
		{

			// uzo de document.commandDispatcher.focusedElement ne funkcias en >respondoj en TB 3.X
			// use of document.commandDispatcher.focusedElement does not work in> responses in TB 3.X
			var tajpejo = document.commandDispatcher.focusedElement;

			// adresujo au temlinio, tondrobird uzante rapidklavon ne menuon //////////
			// address book or subject line, thunderbird using keyboard shortcut not menu //////////
			var k = tajpejo.selectionStart;
			var f = tajpejo.selectionEnd;
			var l = tajpejo.value.length;
			var h = tajpejo.scrollLeft;
			var v = tajpejo.scrollTop;

			tajpejo.value = tajpu.tujtraduku_literojn_(tajpejo.value, 0);

			var m = tajpejo.value.length;
			tajpejo.selectionStart = k-l+m;
			tajpejo.selectionEnd = f-l+m;
			tajpejo.scrollLeft = h;
			tajpejo.scrollTop = v;
		}
		catch (e) {alert(e)}
		*/

		try
		{
			tajpu.tondujo1 = tajpu.legu_tondujon();
			// http://developer.mozilla.org/en/docs/XUL_Tutorial:Updating_Commands
			clearTimeout(tajpu.to);
			tajpu.to=setTimeout(function(){tajpu.tujtraduku_help0();},0);
		}
		catch(e3) { alert(e3); }
	}
	else 
	{
		// Fajrovulpo ////////////////////////////////////////////////////////
		// Fire Fox ///////////////////////////////////////////////// /////////

		var tajpejo = document.commandDispatcher.focusedElement;

		var adresujo;
		adresujo = document.getElementById("urlbar");

		var trovujo;
		if (document.getElementById("searchbar")) {
			trovujo = document.getElementById("searchbar").mTextbox;
		} else if (document.getElementById("search-bar")) {
			trovujo = document.getElementById("search-bar");
		}

		var tekstserchujo;
		if (document.getElementById("findField")) {
			tekstserchujo = document.getElementById("findField").mTextbox;
		} else if (document.getElementById("find-field")) {
			tekstserchujo = document.getElementById("find-field");
		}


		if (tajpejo == adresujo)
		{
			adresujo.value = tajpu.tujtraduku_literojn_(adresujo.value, 0);
		}
		else if (tajpejo == trovujo)
		{
			trovujo.value = tajpu.tujtraduku_literojn_(trovujo.value, 0);
		}
		else if (tajpejo == tekstserchujo)
		{
			trovujo.value = tajpu.tujtraduku_literojn_(tekstserchujo.value, 0);
		}
		else
		{
			var k = tajpejo.selectionStart;
			var f = tajpejo.selectionEnd;
			var l = tajpejo.value.length;
			var h = tajpejo.scrollLeft;
			var v = tajpejo.scrollTop;

			var tradukita;
			tradukita = tajpu.tujtraduku_literojn_(tajpejo.value, 0);
			tajpejo.value = tradukita;

			var m = tajpejo.value.length;
			tajpejo.selectionStart = k-l+m;
			tajpejo.selectionEnd = f-l+m;
			tajpejo.scrollLeft = h;
			tajpejo.scrollTop = v;
		}
	}

	},

	traduku_literojn: function(speco) {

		  var tajpejo = document.commandDispatcher.focusedElement;

		  var adresujo;
		  adresujo = document.getElementById("urlbar");

		  var trovujo;
		  if (document.getElementById("searchbar")) {
		    trovujo = document.getElementById("searchbar").mTextbox;
		  } else if (document.getElementById("search-bar")) {
		    trovujo = document.getElementById("search-bar");
		  }

		  var tekstserchujo;
		  if (document.getElementById("findField")) {
		    tekstserchujo = document.getElementById("findField").mTextbox;
		  } else if (document.getElementById("find-field")) {
		    tekstserchujo = document.getElementById("find-field");
		  }

		  // kontraste kun enuja teksto, jen HTML - teksto (ne uzita ;-)
		  // unlike boring text, this is HTML text (not used ;-)
		var focusedWindow = document.commandDispatcher.focusedWindow;
		var elektita = null;
		try
		{
			elektita = focusedWindow.getSelection(); // por FF >= 1.0.3
		}
		catch (e)
		{
			elektita = focusedWindow.__proto__.getSelection.call(focusedWindow); // por FF < 1.0.3
		}
		var html_teksto;
		try
		{
			html_teksto = elektita.getRangeAt(0).toString();
		}
		catch (e)
		{
			html_teksto = "";
		}


		if (html_teksto.length>0)
		{
			try
			{
			if (speco == 0) {html_teksto = tajpu.traduku_literojn_(html_teksto);}
			else if (speco == 1) {html_teksto = html_teksto.toUpperCase();}
			else if (speco == 2) {html_teksto = html_teksto.toLowerCase();}
			else if (speco == 3) {html_teksto = tajpu.alncr_literojn_(html_teksto);}
			else if (speco == 4) {html_teksto = tajpu.alu_literojn_(html_teksto);}
			else if (speco == 5) {html_teksto = tajpu.dencr_literojn_(html_teksto);}
			else if (speco == 6) {html_teksto = tajpu.deu_literojn_(html_teksto);}
			else if (speco == 7) {html_teksto = tajpu.rot13(html_teksto);}
			tajpu.tl(0, html_teksto);
			}
			catch(e)
			{
				prompt("",html_teksto) ;
			}
		}
	else if (tajpejo == adresujo)
	{
		if (speco == 0) {adresujo.value = tajpu.traduku_literojn_(adresujo.value);}
		else if (speco == 1) {adresujo.value = adresujo.value.toUpperCase();}
		else if (speco == 2) {adresujo.value = adresujo.value.toLowerCase();}
		else if (speco == 3) {adresujo.value = tajpu.alncr_literojn_(adresujo.value);}
		else if (speco == 4) {adresujo.value = tajpu.alu_literojn_(adresujo.value);}
		else if (speco == 5) {adresujo.value = tajpu.dencr_literojn_(adresujo.value);}
		else if (speco == 6) {adresujo.value = tajpu.deu_literojn_(adresujo.value);}
		else if (speco == 7) {adresujo.value = tajpu.rot13(adresujo.value);}
	}
	else if (tajpejo == trovujo)
	{
		if (speco == 0) {trovujo.value = tajpu.traduku_literojn_(trovujo.value);}
		else if (speco == 1) {trovujo.value = trovujo.value.toUpperCase();}
		else if (speco == 2) {trovujo.value = trovujo.value.toLowerCase();}
		else if (speco == 3) {trovujo.value = tajpu.alncr_literojn_(trovujo.value);}
		else if (speco == 4) {trovujo.value = tajpu.alu_literojn_(trovujo.value);}
		else if (speco == 5) {trovujo.value = tajpu.dencr_literojn_(trovujo.value);}
		else if (speco == 6) {trovujo.value = tajpu.deu_literojn_(trovujo.value);}
		else if (speco == 7) {trovujo.value = tajpu.rot13(trovujo.value);}
        }
	else if (tajpejo == tekstserchujo)
	{
		if (speco == 0) {tekstserchujo.value = tajpu.traduku_literojn_(tekstserchujo.value);}
		else if (speco == 1) {tekstserchujo.value = tekstserchujo.value.toUpperCase();}
		else if (speco == 2) {tekstserchujo.value = tekstserchujo.value.toLowerCase();}
		else if (speco == 3) {tekstserchujo.value = tajpu.alncr_literojn_(tekstserchujo.value);}
		else if (speco == 4) {tekstserchujo.value = tajpu.alu_literojn_(tekstserchujo.value);}
		else if (speco == 5) {tekstserchujo.value = tajpu.dencr_literojn_(tekstserchujo.value);}
		else if (speco == 6) {tekstserchujo.value = tajpu.deu_literojn_(tekstserchujo.value);}
		else if (speco == 7) {tekstserchujo.value = tajpu.rot13(tekstserchujo.value);}
        }
	else
	{
		var enuja_teksto = tajpejo.value;
		var elektita_enuja_teksto = enuja_teksto.substring(tajpejo.selectionStart, tajpejo.selectionEnd);
		if (elektita_enuja_teksto != "")
		{
			var nova_teksto = "";

			if (speco == 0) {nova_teksto = tajpu.traduku_literojn_(elektita_enuja_teksto);}
			else if (speco == 1) {nova_teksto = elektita_enuja_teksto.toUpperCase();}
			else if (speco == 2) {nova_teksto = elektita_enuja_teksto.toLowerCase();}
			else if (speco == 3) {nova_teksto = tajpu.alncr_literojn_(elektita_enuja_teksto);}
			else if (speco == 4) {nova_teksto = tajpu.alu_literojn_(elektita_enuja_teksto);}
			else if (speco == 5) {nova_teksto = tajpu.dencr_literojn_(elektita_enuja_teksto);}
			else if (speco == 6) {nova_teksto = tajpu.deu_literojn_(elektita_enuja_teksto);}
			else if (speco == 7) {nova_teksto = tajpu.rot13(elektita_enuja_teksto);}
			tajpejo.value = enuja_teksto.substring(0, tajpejo.selectionStart) + nova_teksto + enuja_teksto.substring(tajpejo.selectionEnd, enuja_teksto.length);
		}
		else
		{
			if (speco == 0) {tajpejo.value = tajpu.traduku_literojn_(tajpejo.value);}
			else if (speco == 1) {tajpejo.value = tajpejo.value.toUpperCase();}
			else if (speco == 2) {tajpejo.value = tajpejo.value.toLowerCase();}
			else if (speco == 3) {tajpejo.value = tajpu.alncr_literojn_(tajpejo.value);}
			else if (speco == 4) {tajpejo.value = tajpu.alu_literojn_(tajpejo.value);}
			else if (speco == 5) {tajpejo.value = tajpu.dencr_literojn_(tajpejo.value);}
			else if (speco == 6) {tajpejo.value = tajpu.deu_literojn_(tajpejo.value);}
			else if (speco == 7) {tajpejo.value = tajpu.rot13(tajpejo.value);}
		}
	}
	},

	tujtraduku_literojn__: function(teksto) {
			var originalo = teksto;

		if (teksto == "") return "";

			var literoj = new Array(
		"A'", "\u00C1",
		"a'", "\u00E1",
		"C'", "\u0106",
		"c'", "\u0107",
		"D'", "\u00D0",
		"d'", "\u00F0",
		"E'", "\u00C9",
		"e'", "\u00E9",
		"I'", "\u00CD",
		"i'", "\u00ED",
		"L'", "\u0139",
		"l'", "\u013A",
		"N'", "\u0143",
		"n'", "\u0144",
		"O'", "\u00D3",
		"o'", "\u00F3",
		"R'", "\u0154",
		"r'", "\u0155",
		"S'", "\u015A",
		"s'", "\u015B",
		"U'", "\u00DA",
		"u'", "\u00FA",
		"U:'", "\u01D7",
		"u:'", "\u01D8",
		"Z'", "\u0179",
		"z'", "\u017A",

		"O\"", "\u0150",
		"o\"", "\u0151",
		"U\"", "\u0170",
		"u\"", "\u0171",

		// kiel sube
		"A`", "\u00C0",
		"a`", "\u00E0",
		"E`", "\u00C8",
		"e`", "\u00E8",
		"I`", "\u00CC",
		"i`", "\u00EC",
		"O`", "\u00D2",
		"o`", "\u00F2",
		"U`", "\u00D9",
		"u`", "\u00F9",
		"U:`", "\u01DB",
		"u:`", "\u01DC",

		"D/", "\u00D0",
		"d/", "\u00F0",
		"H/", "\u0126",
		"h/", "\u0127",
		"L/", "\u0141",
		"l/", "\u0142",
		"O/", "\u00D8",
		"o/", "\u00F8",

		"A\\^", "\u00C2",
		"a\\^", "\u00E2",
		"C\\^", "\u0108",
		"c\\^", "\u0109",
		"E\\^", "\u00CA",
		"e\\^", "\u00EA",
		"G\\^", "\u011C",
		"g\\^", "\u011D",
		"H\\^", "\u0124",
		"h\\^", "\u0125",
		"I\\^", "\u00CE",
		"i\\^", "\u00EE",
		"J\\^", "\u0134",
		"j\\^", "\u0135",
		"O\\^", "\u00D4",
		"o\\^", "\u00F4",
		"S\\^", "\u015C",
		"s\\^", "\u015D",
		"U\\^", "\u00DB",
		"u\\^", "\u00FB",
		"W\\^", "\u0174",
		"w\\^", "\u0175",
		"Y\\^", "\u0176",
		"y\\^", "\u0177",

		"C<", "\u010C",
		"c<", "\u010D",
		"D<", "\u010E",
		"d<", "\u010F",
		"E<", "\u011A",
		"e<", "\u011B",
		"N<", "\u0147",
		"n<", "\u0148",
		"R<", "\u0158",
		"r<", "\u0159",
		"S<", "\u0160",
		"s<", "\u0161",
		"T<", "\u0164",
		"t<", "\u0165",
		"U<", "\u01D3",
		"u<", "\u01D4",
		"U:<", "\u01D9",
		"u:<", "\u01DA",
		"Z<", "\u017D",
		"z<", "\u017E",
		
		"A\\(", "\u0102",
		"a\\(", "\u0103",
		"E\\(", "\u0114",
		"e\\(", "\u0115",
		"G\\(", "\u011E",
		"g\\(", "\u011F",
		"I\\(", "\u012C",
		"i\\(", "\u012D",
		"O\\(", "\u014E",
		"o\\(", "\u014F",
		"U\\(", "\u016C",
		"u\\(", "\u016D",

		"A\\~", "\u00C3",
		"a\\~", "\u00E3",
		"I\\~", "\u0128",
		"i\\~", "\u0129",
		"N\\~", "\u00D1",
		"n\\~", "\u00F1",
		"O\\~", "\u00D5",
		"o\\~", "\u00F5",
		"U\\~", "\u0168",
		"u\\~", "\u0169",
		
		"A-", "\u0100",
		"a-", "\u0101",
		"E-", "\u0112",
		"e-", "\u0113",
		"I-", "\u012A",
		"i-", "\u012B",
		"O-", "\u014C",
		"o-", "\u014D",
		"U-", "\u016A",
		"u-", "\u016B",
		"U:-", "\u01D5",
		"u:-", "\u01D6",


		"E\\.", "\u0116",
		"e\\.", "\u0117",
		"G\\.", "\u0120",
		"g\\.", "\u0121",
		"I\\.", "\u0130",
		"L\\.", "\u013F",
		"l\\.", "\u0140",
		"Z\\.", "\u017B",
		"z\\.", "\u017C",

		"A:", "\u00C4",
		"a:", "\u00E4",
		"E:", "\u00CB",
		"e:", "\u00EB",
		"I:", "\u00CF",
		"i:", "\u00EF",
		"O:", "\u00D6",
		"o:", "\u00F6",
		"U:", "\u00DC",
		"u:", "\u00FC",
		"Y:", "\u0178",
		"y:", "\u00FF",
		
		"A,", "\u0104",
		"a,", "\u0105",
		"C,", "\u00C7",
		"c,", "\u00E7",
		"E,", "\u0118",
		"e,", "\u0119",
		"G,", "\u0122",
		"g,", "\u0123",
		"I,", "\u012E",
		"i,", "\u012F",
		"K,", "\u0136",
		"k,", "\u0137",
		"L,", "\u013B",
		"l,", "\u013C",
		"N,", "\u0145",
		"n,", "\u0146",
		"R,", "\u0156",
		"r,", "\u0157",
		"S,", "\u015E",
		"s,", "\u015F",
		"T,", "\u0162",
		"t,", "\u0163",
		"U,", "\u0172",
		"u,", "\u0173",

		"D-", "\u0110",
		"d-", "\u0111",
		"H-", "\u0126",
		"h-", "\u0127",
		"L-", "\u0141",
		"l-", "\u0142",
		"T-", "\u0166",
		"t-", "\u0167",

		"AA", "\u00C5",
		"aa", "\u00E5",
		"A0", "\u00C5",
		"a0", "\u00E5",
		"U0", "\u016E",
		"u0", "\u016F",
		"AE", "\u00C6",
		"ae", "\u00E6",
		//"DH", "\u00D0",
		//"dh", "\u00F0",
		"I\\|", "\u0132",
		"i\\|", "\u0133",
		"OE", "\u0152",
		"oe", "\u0153",
		//"ss", "\u00DF",
		"&", "\u00DF",
		//"TH", "\u00DE",
		//"th", "\u00FE",


		// diversaj
		"\\$\\$", "\u00A7",
		"\\|", "\u0131",
		"kk", "\u0138",
		//"oC", "\u2103",
		//"oF", "\u2109",
		"<<", "\u00AB",
		">>", "\u00BB",
		"\\+-", "\u00B1",
		"TM", "\u2122",
		"~~", "\u2248",
		"/=", "\u2260",
		"<=", "\u2264",
		">=", "\u2265",
		"__%", " ",
		"%", "\u2030",
		"00", "\u221E",
		//"GBP", "\u00A3",
		//"EUR", "\u20AC",
		"c/", "\u00A2",
		"66", "\u201C",
		"99", "\u201D",
		"``", "\u201D",
		"''", "\u201C",
		",,", "\u201E",
		"--", "\u2014",
		"\\.", "\u00B7",
		"\\*", "\u2022",
		"!", "\u00A1",
		"\\?", "\u00BF",
		" ", "\u00A0",

		// ciferoj
		"1/4", "\u00BC",
		"1/2", "\u00BD",
		"3/4", "\u00BE",
		"1/8", "\u215B",
		"3/8", "\u215C",
		"5/8", "\u215D",
		"7/8", "\u215E"
				);
		
			//alert(literoj.length);
			if (teksto.indexOf("__%") != -1)
			{
				for (var i=0; i<literoj.length; i+=2)
				{
					// en longa tajpujo // in a long typewriter
					var r = new RegExp(literoj[i]+"__%");
					var n = literoj[i+1];
					teksto = teksto.replace(r,n);
					//if (i<20) {alert(i+".i)  "+literoj[i]+" -> "+literoj[i+1]+"   => "+teksto);}
					if (teksto.length != originalo.length)
					{	
						//alert(originalo+" => "+teksto+" (longeco "+teksto.length+")");
						return teksto;
					}
				}
			}
			if (teksto != originalo)
			{
				//alert(originalo+" => "+teksto);
				return teksto;
			}
			if (teksto.indexOf("__%") == -1)
			{
				for (var i=0; i<literoj.length; i+=2)
				{
					// en mallonga tajpujo // in a short typo
					var r = new RegExp(literoj[i]+"_?_?$"); // pro maxlength, __% damagxita; ni esperu pri uj-fineco ($).
					var n = literoj[i+1];
					teksto = teksto.replace(r,n);
					//if (i<20) {alert(i+".ii)  "+literoj[i]+" -> "+literoj[i+1]+"   => "+teksto);}
					if (teksto.length != originalo.length)
					{	
						//alert(originalo+" => "+teksto);
						return teksto;
					}
				}
			}

			return teksto;
		},

	// Clipboard doc: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Using_the_clipboard
	// Read clipboard.
	legu_tondujon: function() {
			if (tajpu.source == null) {
				try {
					tajpu.source = document.commandDispatcher.focusedWindow;
					tajpu.source = tajpu.source.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIWebNavigation);
				} catch(e) {
					tajpu.source = null;
				}
			}
			if(tajpu.trans == null) {
				tajpu.trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
				try { tajpu.trans.init(tajpu.source); } catch(e) {}
				tajpu.trans.addDataFlavor("text/unicode");
			}

			if(tajpu.pgClipboard == null) {
				tajpu.pgClipboard = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
				}
			if (!tajpu.pgClipboard) return "";
			tajpu.pgClipboard.getData(tajpu.trans, tajpu.pgClipboard.kGlobalClipboard);
			var str=new Object();
			var strLength=new Object();
			var tondujo = "";
			try {
				tajpu.trans.getTransferData("text/unicode", str, strLength);
				if ("nsISupportsWString" in Components.interfaces) {
					tondujo=str.value.QueryInterface(Components.interfaces.nsISupportsWString).toString();
				} else if ("nsISupportsString" in Components.interfaces) {
					tondujo=str.value.QueryInterface(Components.interfaces.nsISupportsString).toString();
				} else {
					tajpu.logToConsole("READ error!");
					tondujo = "";
				}
			} catch (e) {
				tajpu.logToConsole("READ Clipboard error! - >" + e.message);
				tondujo = "";
			}
			return tondujo;
		},

	skribu_tondujon: function(teksto) { // Write clipboard.

		if(tajpu.str2 == null) {
			tajpu.str2 = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
			}
		tajpu.str2.data = teksto;

		// var source = document.commandDispatcher.focusedWindow;
		// try {
			// source = source.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIWebNavigation);
		// } catch(e) {
			// alert('FUCK');
			// source = null;
		// }
		// var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
		// try { trans.init(source); } catch(e) {			alert('FUCK2');}
		// trans.addDataFlavor("text/unicode");
		tajpu.trans.setTransferData("text/unicode",tajpu.str2,teksto.length * 2);

		var clipid = Components.interfaces.nsIClipboard;
		var clip = Components.classes["@mozilla.org/widget/clipboard;1"].getService(clipid);

		clip.setData(tajpu.trans,null,clipid.kGlobalClipboard);
		},

	tujtraduku_literojn_: function(teksto, help2) {

		if (teksto=="" || teksto=="__%")
		{
			// alert("Neniu teksto"); // alert ("No text");
			return "";
		}

		// SPECIALE POR hhhh alt-X
		if (teksto.match(/([0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f])`%/))
		{
			var hhhh = RegExp.$1;
			var C = String.fromCharCode(parseInt("0x"+hhhh));
			teksto = teksto.replace(/....`%/,C);
			return teksto;
		}
		teksto = teksto.replace(/`%/,"__%");
		
		// UNUA KONTROLO // FIRST CHECK
		if (teksto.indexOf("__%") == -1)
		{
			//if (!confirm("abcTajpu :-(")) // avertu pri maxlength-damagxo
			//{
				//return teksto;
			//}
			// Fakte, aux maxlength-damagxo aux io kompleksa (kia
			// yahoo/akax retposxta korpo), sed ni dauxrigu cxar
			// ni povas fari cmd-ojn
			// In fact, either maxlength damage or something complex (such as
// yahoo / akax email body), but let's continue because
// we can make cmds
		}
		// estus kolizado kun rapidaj E-literoj, do faru tuj nun:
		// would be colliding with fast E-letters, so do it now:
		teksto = teksto.replace(/DH__%/,"\u00D0");
		teksto = teksto.replace(/dh__%/,"\u00F0");
		teksto = teksto.replace(/TH__%/,"\u00DE");
		teksto = teksto.replace(/th__%/,"\u00FE");

		if (teksto.indexOf("__%") == -1)
		{
			return teksto;
		}

		// VIAJ PROPRAJ ALDONAJ KODOJ
		// YOUR OWN ADDITIONAL CODES
		try
		{
			var aldonaj;
			try
			{
				var miaj_preferoj = Components.classes["@mozilla.org/preferences-service;1"].
					    getService(Components.interfaces.nsIPrefService).
					    getBranch("tajpu.");
				var aldonaj = miaj_preferoj.getComplexValue("uzulkodoj", Components.interfaces.nsISupportsString).data;    
			}
			catch(e)
			{
				aldonaj ="";
			}
			if (aldonaj.length)
			{
				aldonaj = "|" + aldonaj;
			}
			aldonaj = "oC=\u2103|oF=\u2109|GBP=\u00A3|EUR=\u20AC" + aldonaj;
			//alert(aldonaj); // alert (additional);
			////////////////////////////////////////////////////

			////////////////////////////////////////////////////
			var tondujo = tajpu.legu_tondujon();
			//alert(tondujo);
			////////////////////////////////////////////////////

			teksto = teksto.replace(/%K__%/g,aldonaj); // montru tutan Kod-linion //show entire line of code
			if (teksto.indexOf("__%") == -1) {return teksto;}
			aldonaj = aldonaj.replace(/\|\r?\n/g,"|");
			var viaj = aldonaj.split(/\|/);
			for (var i=0; i<viaj.length; i++)
			{
				viaj[i] = viaj[i].replace(/%=/g,"%u003D");
				if (viaj[i].match(/^([^=]+)=(.*)$/))
				{
					var nomo = RegExp.$1;
					var enhavo = RegExp.$2;
					if (nomo.length > tajpu.tb_viamaks && nomo.length <= tajpu.tb_niamaks) {tajpu.tb_viamaks = nomo.length;}
					// alert("VIA: "+nomo+" "+tajpu.tb_viamaks);
					nomo = nomo.replace(/%k.*$/,""); // vishu Komenton
					enhavo = enhavo.replace(/%k.*$/,""); // vishu Komenton // vishu Comment
					while (nomo.match(/%u(\w\w\w\w)/)) // %U rezervita por poste
					{
						var litero = String.fromCharCode(parseInt(RegExp.$1,16));
						nomo = nomo.replace(/%u\w\w\w\w/,litero);
					}
					nomo = nomo.replace(/%l/g,"|").replace(/%z/g,"=").replace(/%p/g,"%");
					var re=RegExp(nomo+"__%");
					//alert("Via estas "+nomo+" kaj "+enhavo);

					if (teksto.match(re))
					{
						enhavo = enhavo.replace(/%\$1/g,RegExp.$1);
						enhavo = enhavo.replace(/%\$2/g,RegExp.$2);
						enhavo = enhavo.replace(/%\$3/g,RegExp.$3);
						enhavo = enhavo.replace(/%\$4/g,RegExp.$4);
						enhavo = enhavo.replace(/%\$5/g,RegExp.$5);
						enhavo = enhavo.replace(/%\$6/g,RegExp.$6);
						enhavo = enhavo.replace(/%\$7/g,RegExp.$7);
						enhavo = enhavo.replace(/%\$8/g,RegExp.$8);
						enhavo = enhavo.replace(/%\$9/g,RegExp.$9);

						enhavo = enhavo.replace(/%t/g,tondujo);
						enhavo = enhavo.replace(/%T/g,tondujo.toUpperCase());

						while (enhavo.match(/%r/)) // Respondo de uzulo // User response
						{
							var demando = prompt(enhavo);
							enhavo = enhavo.replace(/%r/,demando);
						}

						while (enhavo.match(/%u(\w\w\w\w)/)) // %U rezervita por poste //% U reserved for later
						{
							var litero = String.fromCharCode(parseInt(RegExp.$1,16));
							enhavo = enhavo.replace(/%u\w\w\w\w/,litero);
						}

						enhavo = enhavo.replace(/%l/g,"|").replace(/%z/g,"=").replace(/%p/g,"%");

						//alert("Do estas "+nomo+" kaj "+enhavo); // alert ("So is" + name + "and" + content);
						teksto = teksto.replace(re,enhavo);
						if (teksto.indexOf("__%") == -1) {return teksto;}
					}
				}
			}
		}
		catch(e)
		{
			// ekz. hispana ? estus malbona regex sed tamen funkcias
			// alert("Eraro T1 "+e);
			// e.g. Spanish? would be a bad regex but it still works
		}

		// NORMAJ KODOJ // STANDARD CODES
		try
		{
			//alert("De ["+teksto+"]");
			teksto = teksto.replace(/__%__%/,"__%");
			if (help2!=-1 && (help2==0 || teksto.length<=tajpu.tb_niamaks))
			{
				teksto = tajpu.tujtraduku_literojn__(teksto);
				//alert("Al "+teksto);
			}
		}
		catch(e)
		{
			alert("Eraro T2 "+e);
		}

		try
		{
			var nun_preferoj = Components.classes["\@mozilla.org/preferences-service;1"].
				    getService(Components.interfaces.nsIPrefService).
				    getBranch("tajpu.");

			if (!nun_preferoj.getBoolPref('kashu_el')) 
			{
				// ESTAS LA GREKAJ // IT'S THE GREEKS
				teksto = teksto.replace(/ph\\?__%/,"\u03c6");
				teksto = teksto.replace(/ch\\?__%/,"\u03c7");
				teksto = teksto.replace(/th\\?__%/,"\u03b8");
				teksto = teksto.replace(/ps\\?__%/,"\u03c8");
				teksto = teksto.replace(/a\\?__%/,"\u03b1");
				teksto = teksto.replace(/b\\?__%/,"\u03b2");
				teksto = teksto.replace(/g\\?__%/,"\u03b3");
				teksto = teksto.replace(/d\\?__%/,"\u03b4");
				teksto = teksto.replace(/e\\?__%/,"\u03b5");
				teksto = teksto.replace(/z\\?__%/,"\u03b6");
				teksto = teksto.replace(/h\\?__%/,"\u03b7");
				teksto = teksto.replace(/i\\?__%/,"\u03b9");
				teksto = teksto.replace(/k\\?__%/,"\u03ba");
				teksto = teksto.replace(/l\\?__%/,"\u03bb");
				teksto = teksto.replace(/m\\?__%/,"\u03bc");
				teksto = teksto.replace(/n\\?__%/,"\u03bd");
				teksto = teksto.replace(/x\\?__%/,"\u03be");
				teksto = teksto.replace(/o\\?__%/,"\u03bf");
				teksto = teksto.replace(/p\\?__%/,"\u03c0");
				teksto = teksto.replace(/r\\?__%/,"\u03c1");
				teksto = teksto.replace(/s\\?__%/,"\u03c3");
				teksto = teksto.replace(/j\\?__%/,"\u03c2");
				teksto = teksto.replace(/t\\?__%/,"\u03c4");
				teksto = teksto.replace(/u\\?__%/,"\u03c5");
				teksto = teksto.replace(/w\\?__%/,"\u03c9");
				teksto = teksto.replace(/PH\\?__%/i,"\u03a6");
				teksto = teksto.replace(/CH\\?__%/i,"\u03a7");
				teksto = teksto.replace(/TH\\?__%/i,"\u0398");
				teksto = teksto.replace(/PS\\?__%/i,"\u03a8");
				teksto = teksto.replace(/A\\?__%/,"\u0391");
				teksto = teksto.replace(/B\\?__%/,"\u0392");
				teksto = teksto.replace(/G\\?__%/,"\u0393");
				teksto = teksto.replace(/D\\?__%/,"\u0394");
				teksto = teksto.replace(/E\\?__%/,"\u0395");
				teksto = teksto.replace(/Z\\?__%/,"\u0396");
				teksto = teksto.replace(/H\\?__%/,"\u0397");
				teksto = teksto.replace(/I\\?__%/,"\u0399");
				teksto = teksto.replace(/K\\?__%/,"\u039a");
				teksto = teksto.replace(/L\\?__%/,"\u039b");
				teksto = teksto.replace(/M\\?__%/,"\u039c");
				teksto = teksto.replace(/N\\?__%/,"\u039d");
				teksto = teksto.replace(/X\\?__%/,"\u039e");
				teksto = teksto.replace(/O\\?__%/,"\u039f");
				teksto = teksto.replace(/P\\?__%/,"\u03a0");
				teksto = teksto.replace(/R\\?__%/,"\u03a1");
				teksto = teksto.replace(/S\\?__%/,"\u03a3");
				teksto = teksto.replace(/T\\?__%/,"\u03a4");
				teksto = teksto.replace(/U\\?__%/,"\u03a5");
				teksto = teksto.replace(/W\\?__%/,"\u03a9");
			}
			else if (!nun_preferoj.getBoolPref('kashu_ru') || !nun_preferoj.getBoolPref('kashu_be') || !nun_preferoj.getBoolPref('kashu_uk')) 
			{
					// CIRILE, majuskle kaj minuskle // CIRILE, uppercase and lowercase
					teksto = teksto.replace(/A__%/, "\u0410");
					teksto = teksto.replace(/B__%/, "\u0411");
					teksto = teksto.replace(/W__%/, "\u0412");
					teksto = teksto.replace(/G__%/, "\u0413");
					teksto = teksto.replace(/D__%/, "\u0414");
					teksto = teksto.replace(/E__%/, "\u0415");
					teksto = teksto.replace(/E"__%/, "\u0401");
					teksto = teksto.replace(/V__%/, "\u0416");
					teksto = teksto.replace(/Z__%/, "\u0417");
					teksto = teksto.replace(/I__%/, "\u0418");
					teksto = teksto.replace(/J__%/, "\u0419");
					teksto = teksto.replace(/K__%/, "\u041a");
					teksto = teksto.replace(/L__%/, "\u041b");
					teksto = teksto.replace(/M__%/, "\u041c");
					teksto = teksto.replace(/N__%/, "\u041d");
					teksto = teksto.replace(/O__%/, "\u041e");
					teksto = teksto.replace(/P__%/, "\u041f");
					teksto = teksto.replace(/R__%/, "\u0420");
					teksto = teksto.replace(/S__%/, "\u0421");
					teksto = teksto.replace(/T__%/, "\u0422");
					teksto = teksto.replace(/U__%/, "\u0423");
					teksto = teksto.replace(/F__%/, "\u0424");
					teksto = teksto.replace(/X__%/, "\u0425");
					teksto = teksto.replace(/C__%/, "\u0426");
					teksto = teksto.replace(/H__%/, "\u0427");
					teksto = teksto.replace(/{__%/, "\u0428");
					teksto = teksto.replace(/}__%/, "\u0429");
					teksto = teksto.replace(/6'__%/, "\u042c");
					teksto = teksto.replace(/Y__%/, "\u042b");
					teksto = teksto.replace(/7'__%/, "\u042a");
					teksto = teksto.replace(/3'__%/, "\u042d");
					teksto = teksto.replace(/0'__%/, "\u042e");
					teksto = teksto.replace(/Q__%/, "\u042f");

					teksto = teksto.replace(/a__%/, "\u0430");
					teksto = teksto.replace(/b__%/, "\u0431");
					teksto = teksto.replace(/w__%/, "\u0432");
					teksto = teksto.replace(/g__%/, "\u0433");
					teksto = teksto.replace(/d__%/, "\u0434");
					teksto = teksto.replace(/e__%/, "\u0435");
					teksto = teksto.replace(/e"__%/, "\u0451");
					teksto = teksto.replace(/v__%/, "\u0436");
					teksto = teksto.replace(/z__%/, "\u0437");
					teksto = teksto.replace(/i__%/, "\u0438");
					teksto = teksto.replace(/j__%/, "\u0439");
					teksto = teksto.replace(/k__%/, "\u043a");
					teksto = teksto.replace(/l__%/, "\u043b");
					teksto = teksto.replace(/m__%/, "\u043c");
					teksto = teksto.replace(/n__%/, "\u043d");
					teksto = teksto.replace(/o__%/, "\u043e");
					teksto = teksto.replace(/p__%/, "\u043f");
					teksto = teksto.replace(/r__%/, "\u0440");
					teksto = teksto.replace(/s__%/, "\u0441");
					teksto = teksto.replace(/t__%/, "\u0442");
					teksto = teksto.replace(/u__%/, "\u0443");
					teksto = teksto.replace(/f__%/, "\u0444");
					teksto = teksto.replace(/x__%/, "\u0445");
					teksto = teksto.replace(/c__%/, "\u0446");
					teksto = teksto.replace(/h__%/, "\u0447");
					teksto = teksto.replace(/\[__%/, "\u0448");
					teksto = teksto.replace(/\]__%/, "\u0449");
					teksto = teksto.replace(/6__%/, "\u044c");
					teksto = teksto.replace(/y__%/, "\u044b");
					teksto = teksto.replace(/7__%/, "\u044a");
					teksto = teksto.replace(/3__%/, "\u044d");
					teksto = teksto.replace(/0__%/, "\u044e");
					teksto = teksto.replace(/q__%/, "\u044f");
			}
			else if (!nun_preferoj.getBoolPref('kashu_ar')) 
			{
					// ARABE
					teksto = teksto.replace(/t:__%/, "\u1E97");	
					teksto = teksto.replace(/2__%/, "\u0621");	
					teksto = teksto.replace(/a__%/i, "\u0627");	
					teksto = teksto.replace(/b__%/i, "\u0628");	
					teksto = teksto.replace(/t__%/i, "\u062A");	
					teksto = teksto.replace(/th__%/i, "\u062B");	
					teksto = teksto.replace(/j__%/i, "\u062C");	
					teksto = teksto.replace(/7__%/, "\u062D");	
					teksto = teksto.replace(/7'__%/, "\u062E");	
					teksto = teksto.replace(/d__%/i, "\u062F");	
					teksto = teksto.replace(/dh__%/i, "\u0630");	
					teksto = teksto.replace(/r__%/i, "\u0631");	
					teksto = teksto.replace(/z__%/i, "\u0632");	
					teksto = teksto.replace(/s__%/i, "\u0633");	
					teksto = teksto.replace(/sh__%/i, "\u0634");	
					teksto = teksto.replace(/9__%/, "\u0635");	
					teksto = teksto.replace(/9'__%/, "\u0636");	
					teksto = teksto.replace(/6__%/, "\u0637");	
					teksto = teksto.replace(/6'__%/, "\u0638");	
					teksto = teksto.replace(/3__%/, "\u0639");	
					teksto = teksto.replace(/3'__%/, "\u063A");	
					teksto = teksto.replace(/f__%/i, "\u0641");	
					teksto = teksto.replace(/q__%/i, "\u0642");	
					teksto = teksto.replace(/k__%/i, "\u0643");	
					teksto = teksto.replace(/l__%/i, "\u0644");	
					teksto = teksto.replace(/m__%/i, "\u0645");	
					teksto = teksto.replace(/n__%/i, "\u0646");	
					teksto = teksto.replace(/h__%/i, "\u0647");	
					teksto = teksto.replace(/w__%/i, "\u0648");	
					teksto = teksto.replace(/y__%/i, "\u064A");	
			}		
			else if (!nun_preferoj.getBoolPref('kashu_he')) 
			{
					// HEBREE
					teksto = teksto.replace(/'__%/, "\u05D0");	
					teksto = teksto.replace(/b__%/, "\u05D1");	
					teksto = teksto.replace(/g__%/, "\u05D2");	
					teksto = teksto.replace(/d__%/, "\u05D3");	
					teksto = teksto.replace(/h__%/, "\u05D4");	
					teksto = teksto.replace(/w__%/, "\u05D5");	
					teksto = teksto.replace(/z__%/, "\u05D6");	
					teksto = teksto.replace(/H__%/, "\u05D7");	
					teksto = teksto.replace(/T__%/, "\u05D8");	
					teksto = teksto.replace(/y__%/, "\u05D9");	
					teksto = teksto.replace(/K__%/, "\u05DA");	
					teksto = teksto.replace(/k__%/, "\u05DB");	
					teksto = teksto.replace(/l__%/, "\u05DC");	
					teksto = teksto.replace(/M__%/, "\u05DD");	
					teksto = teksto.replace(/m__%/, "\u05DE");	
					teksto = teksto.replace(/N__%/, "\u05DF");	
					teksto = teksto.replace(/n__%/, "\u05E0");	
					teksto = teksto.replace(/s__%/, "\u05E1");	
					teksto = teksto.replace(/`__%/, "\u05E2");	
					teksto = teksto.replace(/P__%/, "\u05E3");	
					teksto = teksto.replace(/p__%/, "\u05E4");	
					teksto = teksto.replace(/C__%/, "\u05E5");	
					teksto = teksto.replace(/c__%/, "\u05E6");	
					teksto = teksto.replace(/q__%/, "\u05E7");	
					teksto = teksto.replace(/r__%/, "\u05E8");	
					teksto = teksto.replace(/x__%/, "\u05E9");	
					teksto = teksto.replace(/t__%/, "\u05EA");	
			}
		}
		catch (e)
		{
			// senprobleme // no problem
		}

		// PURIGU
		teksto = teksto.replace(/__%/g,"");

		return teksto;
	},

	traduku_literojn_: function(teksto) {

		teksto = teksto.replace(/\\A/g,"\u00C0");
		teksto = teksto.replace(/\\a/g,"\u00E0");
		teksto = teksto.replace(/\\E/g,"\u00C8");
		teksto = teksto.replace(/\\e/g,"\u00E8");
		teksto = teksto.replace(/\\I/g,"\u00CC");
		teksto = teksto.replace(/\\i/g,"\u00EC");
		teksto = teksto.replace(/\\O/g,"\u00D2");
		teksto = teksto.replace(/\\o/g,"\u00F2");
		teksto = teksto.replace(/\\U/g,"\u00D9");
		teksto = teksto.replace(/\\u/g,"\u00F9");
		teksto = teksto.replace(/`A/g,"\u00C0");
		teksto = teksto.replace(/`a/g,"\u00E0");
		teksto = teksto.replace(/`E/g,"\u00C8");
		teksto = teksto.replace(/`e/g,"\u00E8");
		teksto = teksto.replace(/`I/g,"\u00CC");
		teksto = teksto.replace(/`i/g,"\u00EC");
		teksto = teksto.replace(/`O/g,"\u00D2");
		teksto = teksto.replace(/`o/g,"\u00F2");
		teksto = teksto.replace(/`U/g,"\u00D9");
		teksto = teksto.replace(/`u/g,"\u00F9");

		teksto = teksto.replace(/\/A/g,"\u00C1");
		teksto = teksto.replace(/\/a/g,"\u00E1");
		teksto = teksto.replace(/\/C/g,"\u0106");
		teksto = teksto.replace(/\/c/g,"\u0107");
		teksto = teksto.replace(/\/D/g,"\u00D0");
		teksto = teksto.replace(/\/d/g,"\u00F0");
		teksto = teksto.replace(/\/E/g,"\u00C9");
		teksto = teksto.replace(/\/e/g,"\u00E9");
		teksto = teksto.replace(/\/I/g,"\u00CD");
		teksto = teksto.replace(/\/i/g,"\u00ED");
		teksto = teksto.replace(/\/L/g,"\u0139");
		teksto = teksto.replace(/\/l/g,"\u013A");
		teksto = teksto.replace(/\/N/g,"\u0143");
		teksto = teksto.replace(/\/n/g,"\u0144");
		teksto = teksto.replace(/\/\/O/g,"\u0150");
		teksto = teksto.replace(/\/\/o/g,"\u0151");
		teksto = teksto.replace(/\/O/g,"\u00D3");
		teksto = teksto.replace(/\/o/g,"\u00F3");
		teksto = teksto.replace(/\/R/g,"\u0154");
		teksto = teksto.replace(/\/r/g,"\u0155");
		teksto = teksto.replace(/\/S/g,"\u015A");
		teksto = teksto.replace(/\/s/g,"\u015B");
		teksto = teksto.replace(/\/\/U/g,"\u0170");
		teksto = teksto.replace(/\/\/u/g,"\u0171");
		teksto = teksto.replace(/\/U/g,"\u00DA");
		teksto = teksto.replace(/\/u/g,"\u00FA");
		teksto = teksto.replace(/\/Z/g,"\u0179");
		teksto = teksto.replace(/\/z/g,"\u017A");

		teksto = teksto.replace(/\^A/g,"\u00C2");
		teksto = teksto.replace(/\^a/g,"\u00E2");
		teksto = teksto.replace(/\^C/g,"\u0108");
		teksto = teksto.replace(/\^c/g,"\u0109");
		teksto = teksto.replace(/\^E/g,"\u00CA");
		teksto = teksto.replace(/\^e/g,"\u00EA");
		teksto = teksto.replace(/\^G/g,"\u011C");
		teksto = teksto.replace(/\^g/g,"\u011D");
		teksto = teksto.replace(/\^H/g,"\u0124");
		teksto = teksto.replace(/\^h/g,"\u0125");
		teksto = teksto.replace(/\^I/g,"\u00CE");
		teksto = teksto.replace(/\^i/g,"\u00EE");
		teksto = teksto.replace(/\^J/g,"\u0134");
		teksto = teksto.replace(/\^j/g,"\u0135");
		teksto = teksto.replace(/\^O/g,"\u00D4");
		teksto = teksto.replace(/\^o/g,"\u00F4");
		teksto = teksto.replace(/\^S/g,"\u015C");
		teksto = teksto.replace(/\^s/g, "\u015D");
		teksto = teksto.replace(/\^U/g,"\u00DB");
		teksto = teksto.replace(/\^u/g,"\u00FB");
		teksto = teksto.replace(/\^W/g,"\u0174");
		teksto = teksto.replace(/\^w/g,"\u0175");
		teksto = teksto.replace(/\^Y/g,"\u0176");
		teksto = teksto.replace(/\^y/g,"\u0177");

		teksto = teksto.replace(/>C/g,"\u010C");
		teksto = teksto.replace(/>c/g,"\u010D");
		teksto = teksto.replace(/>D/g,"\u010E");
		teksto = teksto.replace(/>d/g,"\u010F");
		teksto = teksto.replace(/>E/g,"\u011A");
		teksto = teksto.replace(/>e/g,"\u011B");
		teksto = teksto.replace(/>N/g,"\u0147");
		teksto = teksto.replace(/>n/g,"\u0148");
		teksto = teksto.replace(/>R/g,"\u0158");
		teksto = teksto.replace(/>r/g,"\u0159");
		teksto = teksto.replace(/>S/g,"\u0160");
		teksto = teksto.replace(/>s/g,"\u0161");
		teksto = teksto.replace(/>T/g,"\u0164");
		teksto = teksto.replace(/>t/g,"\u0165");
		teksto = teksto.replace(/>Z/g,"\u017D");
		teksto = teksto.replace(/>z/g,"\u017E");
		
		teksto = teksto.replace(/\)A/g,"\u0102");
		teksto = teksto.replace(/\)a/g,"\u0103");
		teksto = teksto.replace(/\)E/g,"\u0114");
		teksto = teksto.replace(/\)e/g,"\u0115");
		teksto = teksto.replace(/\)G/g,"\u011E");
		teksto = teksto.replace(/\)g/g,"\u011F");
		teksto = teksto.replace(/\)I/g,"\u012C");
		teksto = teksto.replace(/\)i/g,"\u012D");
		teksto = teksto.replace(/\)O/g,"\u014E");
		teksto = teksto.replace(/\)o/g,"\u014F");
		teksto = teksto.replace(/\)U/g,"\u016C");
		teksto = teksto.replace(/\)u/g,"\u016D");

		teksto = teksto.replace(/~A/g,"\u00C3");
		teksto = teksto.replace(/~a/g,"\u00E3");
		teksto = teksto.replace(/~I/g,"\u0128");
		teksto = teksto.replace(/~i/g,"\u0129");
		teksto = teksto.replace(/~N/g,"\u00D1");
		teksto = teksto.replace(/~n/g,"\u00F1");
		teksto = teksto.replace(/~O/g,"\u00D5");
		teksto = teksto.replace(/~o/g,"\u00F5");
		teksto = teksto.replace(/~U/g,"\u0168");
		teksto = teksto.replace(/~u/g,"\u0169");
		
		teksto = teksto.replace(/\_A/g,"\u0100");
		teksto = teksto.replace(/\_a/g,"\u0101");
		teksto = teksto.replace(/\_E/g,"\u0112");
		teksto = teksto.replace(/\_e/g,"\u0113");
		teksto = teksto.replace(/\_I/g,"\u012A");
		teksto = teksto.replace(/\_i/g,"\u012B");
		teksto = teksto.replace(/\_O/g,"\u014C");
		teksto = teksto.replace(/\_o/g,"\u014D");
		teksto = teksto.replace(/\_U/g,"\u016A");
		teksto = teksto.replace(/\_u/g,"\u016B");
		
		teksto = teksto.replace(/\*A/g,"\u00C5");
		teksto = teksto.replace(/\*a/g,"\u00E5");
		teksto = teksto.replace(/\*U/g,"\u016E");
		teksto = teksto.replace(/\*u/g,"\u016F");

		teksto = teksto.replace(/\*E/g,"\u0116");
		teksto = teksto.replace(/\*e/g,"\u0117");
		teksto = teksto.replace(/\*G/g,"\u0120");
		teksto = teksto.replace(/\*g/g,"\u0121");
		teksto = teksto.replace(/\*I/g,"\u0130");
		teksto = teksto.replace(/\*L/g,"\u013F");
		teksto = teksto.replace(/\*l/g,"\u0140");

		teksto = teksto.replace(/:A/g,"\u00C4");
		teksto = teksto.replace(/:a/g,"\u00E4");
		teksto = teksto.replace(/:E/g,"\u00CB");
		teksto = teksto.replace(/:e/g,"\u00EB");
		teksto = teksto.replace(/:I/g,"\u00CF");
		teksto = teksto.replace(/:i/g,"\u00EF");
		teksto = teksto.replace(/:O/g,"\u00D6");
		teksto = teksto.replace(/:o/g,"\u00F6");
		teksto = teksto.replace(/:U/g,"\u00DC");
		teksto = teksto.replace(/:u/g,"\u00FC");
		teksto = teksto.replace(/:Y/g,"\u0178");
		teksto = teksto.replace(/:y/g,"\u00FF");
		
		teksto = teksto.replace(/,A/g,"\u0104");
		teksto = teksto.replace(/,a/g,"\u0105");
		teksto = teksto.replace(/,C/g,"\u00C7");
		teksto = teksto.replace(/,c/g,"\u00E7");
		teksto = teksto.replace(/,E/g,"\u0118");
		teksto = teksto.replace(/,e/g,"\u0119");
		teksto = teksto.replace(/,G/g,"\u0122");
		teksto = teksto.replace(/,g/g,"\u0123");
		teksto = teksto.replace(/,I/g,"\u012E");
		teksto = teksto.replace(/,i/g,"\u012F");
		teksto = teksto.replace(/,K/g,"\u0136");
		teksto = teksto.replace(/,k/g,"\u0137");
		teksto = teksto.replace(/,L/g,"\u013B");
		teksto = teksto.replace(/,l/g,"\u013C");
		teksto = teksto.replace(/,N/g,"\u0145");
		teksto = teksto.replace(/,n/g,"\u0146");
		teksto = teksto.replace(/,R/g,"\u0156");
		teksto = teksto.replace(/,r/g,"\u0157");
		teksto = teksto.replace(/,S/g,"\u015E");
		teksto = teksto.replace(/,s/g,"\u015F");
		teksto = teksto.replace(/,T/g,"\u0162");
		teksto = teksto.replace(/,t/g,"\u0163");
		teksto = teksto.replace(/,U/g,"\u0172");
		teksto = teksto.replace(/,u/g,"\u0173");

		teksto = teksto.replace(/=D/g,"\u0110");
		teksto = teksto.replace(/=d/g,"\u0111");
		teksto = teksto.replace(/=H/g,"\u0126");
		teksto = teksto.replace(/=h/g,"\u0127");
		teksto = teksto.replace(/=L/g,"\u0141");
		teksto = teksto.replace(/=l/g,"\u0142");
		teksto = teksto.replace(/=O/g,"\u00D8");
		teksto = teksto.replace(/=o/g,"\u00F8");
		teksto = teksto.replace(/=T/g,"\u0166");
		teksto = teksto.replace(/=t/g,"\u0167");

		teksto = teksto.replace(/\&AE/g,"\u00C6");
		teksto = teksto.replace(/\&ae/g,"\u00E6");
		teksto = teksto.replace(/;DH/g,"\u00D0");
		teksto = teksto.replace(/;dh/g,"\u00F0");
		teksto = teksto.replace(/;i/g,"\u0131");
		teksto = teksto.replace(/\&IJ/g,"\u0132");
		teksto = teksto.replace(/\&ij/g,"\u0133");
		teksto = teksto.replace(/;K/g,"\u0138");
		teksto = teksto.replace(/\&OE/g,"\u0152");
		teksto = teksto.replace(/\&oe/g,"\u0153");
		teksto = teksto.replace(/;s/g,"\u00DF");
		teksto = teksto.replace(/;TH/g,"\u00DE");
		teksto = teksto.replace(/;th/g,"\u00FE");
		teksto = teksto.replace(/\&1\/4/g,"\u00BC");
		teksto = teksto.replace(/\&1\/2/g,"\u00BD");
		teksto = teksto.replace(/\&3\/4/g,"\u00BE");

		teksto = teksto.replace(/\$\$/g,"\u00A7");

		return teksto;
	},

	alncr_literojn_: function(teksto1) {
var teksto2 = "";
for (var i=0; i<teksto1.length; i++)
{
var litero = teksto1.charCodeAt(i);
if ((litero>=32 && litero<=126) || litero==10  || litero==13  || litero==9) {teksto2+=teksto1.charAt(i);}
else {teksto2+="&#x"+litero.toString(16)+";";}
}
return teksto2;
},

	alu_literojn_: function(teksto1) {
var teksto2 = "";
for (var i=0; i<teksto1.length; i++)
{
var litero = teksto1.charCodeAt(i);
if ((litero>=32 && litero<=126) || litero==10  || litero==13  || litero==9) {teksto2+=teksto1.charAt(i);}
else if (litero<=0xFF) {teksto2+="\\u00"+litero.toString(16);}
else if (litero<=0xFFF) {teksto2+="\\u0"+litero.toString(16);}
else if (litero<=0xFFFF) {teksto2+="\\u"+litero.toString(16);}
else {teksto2+="\\u????";}
}
return teksto2;
},



	rot13: function(teksto2)
	{
	   var longeco=teksto2.length;
	   var teksto3="";
	   if(longeco > 0)
	   {
	    for(var kie=0; kie<longeco ; kie++)
	    {
		     var b=teksto2.charCodeAt(kie);
		     if ( ( (b>64) && (b<78) ) || ( (b>96) && (b<110) ) ) { b=b+13; }
		     else if ( ( (b>77) && (b<91) ) || ( (b>109) && (b<123) ) ) { b=b-13; }
		     teksto3+=String.fromCharCode(b) ;
	    }
	   }
	   return teksto3;
	},

	deu_literojn_: function(teksto2)
	{
		while (teksto2.match(/\\?\\u(\w\w\w\w)/))
		{
			var litero = String.fromCharCode(parseInt(RegExp.$1,16));
			teksto2 = teksto2.replace(/\\?\\u\w\w\w\w/,litero);
		}
		return teksto2;
	},


	dencr_literojn_: function(teksto2)
	{
		while (teksto2.match(/&#x(\w+);/i))
		{
			var litero = String.fromCharCode(parseInt(RegExp.$1,16));
			teksto2 = teksto2.replace(/&#x\w+;/i,litero);
		}
		while (teksto2.match(/&#(\d+);/i))
		{
			var litero = String.fromCharCode(parseInt(RegExp.$1,10));
			teksto2 = teksto2.replace(/&#\d+;/i,litero);
		}
		return teksto2;
	},


	//////////////////////////////////////////////////////////////////////////////
	metu: function(myField, myValue) {
  // Dankon al http://www.alexking.org/blog/2003/06/02/inserting-at-the-cursor-using-javascript/
  // kaj al Cusser
  // Thanks to http://www.alexking.org/blog/2003/06/02/inserting-at-the-cursor-using-javascript/
  // and to Cusser
    if (myField.selectionStart || myField.selectionStart == '0') {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      myField.value = myField.value.substring(0, startPos)
      + myValue
      + myField.value.substring(endPos, myField.value.length);
      var cursorPos = endPos + myValue.length;
      myField.selectionStart = cursorPos;
      myField.selectionEnd = cursorPos;
    } 
    else {
      myField.value += myValue;
    }
  }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', tajpu.init, true); 

