function tajpu_sharghu_opciojn()
{
  document.getElementById('formularo__tujtraduku').value = tajpu_preferoj.legu_askian_preferajhon('rapidklavo');
  if (tajpu_preferoj.legu_unikodan_preferajhon('uzulkodoj') == "")
  {
	tajpu_preferoj.skribu_unikodan_preferajhon('uzulkodoj', "C=\u0108|c=\u0109|G=\u011C|g=\u011D|H=\u0124|h=\u0125|J=\u0134|j=\u0135|S=\u015C|s=\u015D|U=\u016C|u=\u016D");
  }

  if (tajpu_preferoj.legu_verecan_preferajhon('menuo') == true) { document.getElementById('formularo__menuo').setAttribute('checked', true); }

  if (tajpu_preferoj.legu_verecan_preferajhon('uzu_alt_f2') == true) { document.getElementById('formularo__uzu_alt_f2').setAttribute('checked', true); }
  if (tajpu_preferoj.legu_verecan_preferajhon('uzu_alt_f5') == true) { document.getElementById('formularo__uzu_alt_f5').setAttribute('checked', true); }
  if (tajpu_preferoj.legu_verecan_preferajhon('uzu_alt_f7') == true) { document.getElementById('formularo__uzu_alt_f7').setAttribute('checked', true); }
  if (tajpu_preferoj.legu_verecan_preferajhon('uzu_alt_f8') == true) { document.getElementById('formularo__uzu_alt_f8').setAttribute('checked', true); }
  if (tajpu_preferoj.legu_verecan_preferajhon('uzu_alt_f10') == true) { document.getElementById('formularo__uzu_alt_f10').setAttribute('checked', true); }
  if (tajpu_preferoj.legu_verecan_preferajhon('uzu_alt_f11') == true) { document.getElementById('formularo__uzu_alt_f11').setAttribute('checked', true); }

  document.getElementById('formularo__aldonaj').value = tajpu_preferoj.legu_unikodan_preferajhon('uzulkodoj');
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
  if (tajpu_preferoj.legu_verecan_preferajhon("kashu_"+lingvoj[i]) == false)
    document.getElementById("formularo__"+lingvoj[i]).setAttribute('checked', true);
}
}

function tajpu_akceptu_opciojn()
{
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
	try
	{
		for (var i=0; i<=52; i++)
		{
		  if (document.getElementById("formularo__"+lingvoj[i]).getAttribute('checked') == 'true')
		  {
			nun_preferoj.setBoolPref("kashu_"+lingvoj[i], false);
		  }
		  else
		  {
			nun_preferoj.setBoolPref("kashu_"+lingvoj[i], true);
		  }
		}
	}
	catch (e)
	{
		alert("Ne povus registri lingvajn opciojn. "+e);
	}

	try
	{
		if (document.getElementById('formularo__menuo').getAttribute('checked') == 'true') { nun_preferoj.setBoolPref('menuo', true); }
		else { nun_preferoj.setBoolPref('menuo', false); }

		if (document.getElementById('formularo__uzu_alt_f2').getAttribute('checked') == 'true') { nun_preferoj.setBoolPref('uzu_alt_f2', true); }
		else { nun_preferoj.setBoolPref('uzu_alt_f2', false); }

		if (document.getElementById('formularo__uzu_alt_f5').getAttribute('checked') == 'true') { nun_preferoj.setBoolPref('uzu_alt_f5', true); }
		else { nun_preferoj.setBoolPref('uzu_alt_f5', false); }

		if (document.getElementById('formularo__uzu_alt_f7').getAttribute('checked') == 'true') { nun_preferoj.setBoolPref('uzu_alt_f7', true); }
		else { nun_preferoj.setBoolPref('uzu_alt_f7', false); }

		if (document.getElementById('formularo__uzu_alt_f8').getAttribute('checked') == 'true') { nun_preferoj.setBoolPref('uzu_alt_f8', true); }
		else { nun_preferoj.setBoolPref('uzu_alt_f8', false); }

		if (document.getElementById('formularo__uzu_alt_f10').getAttribute('checked') == 'true') { nun_preferoj.setBoolPref('uzu_alt_f10', true); }
		else { nun_preferoj.setBoolPref('uzu_alt_f10', false); }

		if (document.getElementById('formularo__uzu_alt_f11').getAttribute('checked') == 'true') { nun_preferoj.setBoolPref('uzu_alt_f11', true); }
		else { nun_preferoj.setBoolPref('uzu_alt_f11', false); }

	}
	catch (e)
	{
		alert("Ne povus registri klavojn. "+e);
	}

	tajpu_akceptu_bazajn_opciojn();
}

function tajpu_akceptu_bazajn_opciojn()
{
  var nun_preferoj = Components.classes["@mozilla.org/preferences-service;1"].
		    getService(Components.interfaces.nsIPrefService).
		    getBranch("tajpu.");

	try
	{
	  if (document.getElementById('formularo__tujtraduku').value != tajpu_preferoj.legu_askian_preferajhon('rapidklavo'))
	  {
		tajpu_preferoj.skribu_askian_preferajhon('rapidklavo', document.getElementById('formularo__tujtraduku').value);
		//alert("Nova rapidklavo: "+((tajpu_preferoj.legu_askian_preferajhon('rapidklavo')=="")?"?":tajpu_preferoj.legu_askian_preferajhon('rapidklavo')));
	  }
	}
	catch (e)
	{
		alert("Ne povus registri varmklavon. "+e);
	}

	try
	{
	  if (document.getElementById('formularo__aldonaj').value != tajpu_preferoj.legu_unikodan_preferajhon('uzulkodoj'))
	  {
		tajpu_preferoj.skribu_unikodan_preferajhon('uzulkodoj', document.getElementById('formularo__aldonaj').value);
	  }
	}
	catch (e)
	{
		alert("Ne povus registri makroojn. "+e);
	}
}
