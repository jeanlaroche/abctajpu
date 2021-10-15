var tajpu_preferoj = {
  miaj_preferoj: null,
  legu_miajn_preferojn: function() {
    if(!this.miaj_preferoj) {
      try {
        this.miaj_preferoj = Components.classes["@mozilla.org/preferences-service;1"].
                            getService(Components.interfaces.nsIPrefService).
                            getBranch("tajpu.");
      } catch (e) 
      {
      	//alert('miaj_preferoj?');
      }
    }
    return this.miaj_preferoj;
  },

  legu_verecan_preferajhon: function(nomo) {
    try {
      //alert("legu "+nomo);
      var pref = this.legu_miajn_preferojn();
      return pref.getBoolPref(nomo);
    } catch(e) {}
    return true;
  },

  skribu_verecan_preferajhon: function(nomo, enhavo) {
    try {
      //alert("skribu "+nomo+" kiel "+enhavo);
      var pref = this.legu_miajn_preferojn();
      pref.setBoolPref(nomo, enhavo);
      } catch (e) {}
  },

  legu_askian_preferajhon: function(nomo) {
    try {
      //alert("legu "+nomo);
      var pref = this.legu_miajn_preferojn();
      return pref.getCharPref(nomo);
    } catch(e) {}
    return "";
  },

  skribu_askian_preferajhon: function(nomo, enhavo) {
    try {
      //alert("skribu "+nomo+" kiel "+enhavo);
      var pref = this.legu_miajn_preferojn();
      pref.setCharPref(nomo, enhavo);
      } catch (e) {}
  },

  legu_unikodan_preferajhon: function(nomo) {
    try {
      //alert("legu "+nomo);
      var pref = this.legu_miajn_preferojn();
      return pref.getComplexValue(nomo, Components.interfaces.nsISupportsString).data;      
    } catch(e) {}
    return "";
  },

  skribu_unikodan_preferajhon: function(nomo, enhavo) {
    try {
      //alert("skribu "+nomo+" kiel "+enhavo);
      var pref = this.legu_miajn_preferojn();
	var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
	str.data = enhavo;
	pref.setComplexValue(nomo, Components.interfaces.nsISupportsString, str);
      } catch (e) {}
  },
};
