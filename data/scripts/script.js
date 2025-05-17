function getArn() {
    var xsec = document.getElementById('sec').value;
    var xcapit = xsec.toUpperCase();
    var xsines = xcapit.replace(/ /g, "");
    var xspt = xsines.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var xadns = xspt.match(/.{1,3}/g);
    document.getElementById('adn').innerHTML = xadns;

    // Reemplazar cadena por letras nuevas
    var xdna = document.getElementById('adn').innerHTML;
    var xadna = xdna.replace(/A/g, "B");
    var xadnt = xadna.replace(/T/g, "R");
    var xadng = xadnt.replace(/G/g, "H");
    var xadnc = xadng.replace(/C/g, "D");

    // Obtener cadena complementaria
    var xada = xadnc.replace(/B/g, "T");
    var xadt = xada.replace(/R/g, "A");
    var xadg = xadt.replace(/H/g, "C");
    var xcomp = xadg.replace(/D/g, "G");
    document.getElementById('comp').innerHTML = xcomp;

    // Obtener ARN
    var xcadan = document.getElementById('adn').innerHTML;
    var xarn = xcadan.replace(/T/g, "U");
    document.getElementById('arn').innerHTML = xarn;

    //Obtener proteínas
    getPro();
    getProt();
    vibrate();
}

function delData() {
    document.getElementById('sec').value = '';
    document.getElementById('adn').innerHTML = '';
    document.getElementById('comp').innerHTML = '';
    document.getElementById('arn').innerHTML = '';
    document.getElementById('pro1').innerHTML = '';
    document.getElementById('pro3').innerHTML = '';
    vibrate();
}

function getAdn() {
    var ysec = document.getElementById('sec').value;
    var ycapit = ysec.toUpperCase();
    var ysines = ycapit.replace(/ /g, "");
    var yspt = ysines.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var yarns = yspt.match(/.{1,3}/g);
    document.getElementById('arn').innerHTML = yarns;

    // Obtener ADN
    var yrna = document.getElementById('arn').innerHTML;
    var yadn = yrna.replace(/U/g, "T");
    document.getElementById('adn').innerHTML = yadn;

    // Reemplazar cadena por letras nuevas
    var ycadan = document.getElementById('adn').innerHTML;
    var yarna = ycadan.replace(/A/g, "B");
    var yarnu = yarna.replace(/T/g, "R");
    var yarng = yarnu.replace(/G/g, "H");
    var yarnc = yarng.replace(/C/g, "D");

    // Obtener cadena complementaria
    var yara = yarnc.replace(/B/g, "T");
    var yaru = yara.replace(/R/g, "A");
    var yarg = yaru.replace(/H/g, "C");
    var ycomp = yarg.replace(/D/g, "G");
    document.getElementById('comp').innerHTML = ycomp;

    //Obtener proteínas
    getPro();
    getProt();
    vibrate();
}

function getAmb() {
    var zsec = document.getElementById('sec').value;
    var zcapit = zsec.toUpperCase();
    var zsines = zcapit.replace(/ /g, "");
    var zspt = zsines.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var zcomps = zspt.match(/.{1,3}/g);
    document.getElementById('comp').innerHTML = zcomps;

    // Reemplazar cadena por letras nuevas
    var zcomp = document.getElementById('comp').innerHTML;
    var zadna = zcomp.replace(/A/g, "B");
    var zadnt = zadna.replace(/T/g, "R");
    var zadng = zadnt.replace(/G/g, "H");
    var zadnc = zadng.replace(/C/g, "D");

    // Obtener ADN
    var zada = zadnc.replace(/B/g, "T");
    var zadt = zada.replace(/R/g, "A");
    var zadg = zadt.replace(/H/g, "C");
    var zadn = zadg.replace(/D/g, "G");
    document.getElementById('adn').innerHTML = zadn;

    // Obtener ARN
    var zcadan = document.getElementById('adn').innerHTML;
    var zarn = zcadan.replace(/T/g, "U");
    document.getElementById('arn').innerHTML = zarn;

    //Obtener proteínas
    getPro();
    getProt();
    vibrate();
}

function getPro(){
    //Obtener proteínas en notación de una letra
    var myarn = document.getElementById('arn').innerHTML;
    var uua = myarn.replace(/UUU|UUC/g,"F");
    var uub = uua.replace(/UUA|UUG/g,"L");
    var uc = uub.replace(/UCU|UCC|UCA|UCG/g,"S");
    var uaa = uc.replace(/UAU|UAC/g,"Y");
    var uab = uaa.replace(/UAA|UAG/g,"←");
    var uga = uab.replace(/UGU|UGC/g,"C");
    var ugb = uga.replace(/UGA/g,"←");
    var ugc = ugb.replace(/UGG/g,"W");
    var cu = ugc.replace(/CUU|CUC|CUA|CUG/g,"L");
    var cc = cu.replace(/CCU|CCC|CCA|CCG/g,"P");
    var caa = cc.replace(/CAU|CAC/g,"H");
    var cab = caa.replace(/CAA|CAG/g,"Q");
    var cg = cab.replace(/CGU|CGC|CGA|CGG/g,"R");
    var aua = cg.replace(/AUU|AUC|AUA/g,"I");
    var aub = aua.replace(/AUG/g,"M");
    var ac = aub.replace(/ACU|ACC|ACA|ACG/g,"T");
    var aaa = ac.replace(/AAU|AAC/g,"N");
    var aab = aaa.replace(/AAA|AAG/g,"K");
    var aga = aab.replace(/AGU|AGC/g,"S");
    var agb = aga.replace(/AGA|AGG/g,"R");
    var gu = agb.replace(/GUU|GUC|GUA|GUG/g,"V");
    var gc = gu.replace(/GCU|GCC|GCA|GCG/g,"A");
    var gaa = gc.replace(/GAU|GAC/g,"D");
    var gab = gaa.replace(/GAA|GAG/g,"E");
    var gg = gab.replace(/GGU|GGC|GGA|GGG/g,"G");
    document.getElementById('pro1').innerHTML = gg;
}

function getProt(){
    //Obtener proteínas en notación de tres letras
    var mynarn = document.getElementById('arn').innerHTML;
    var xuua = mynarn.replace(/UUU|UUC/g,"Phe");
    var xuub = xuua.replace(/UUA|UUG/g,"Leu");
    var xuc = xuub.replace(/UCU|UCC|UCA|UCG/g,"Ser");
    var xuaa = xuc.replace(/UAU|UAC/g,"Tyr");
    var xuab = xuaa.replace(/UAA|UAG/g,"←");
    var xuga = xuab.replace(/UGU|UGC/g,"Cys");
    var xugb = xuga.replace(/UGA/g,"←");
    var xugc = xugb.replace(/UGG/g,"Trp");
    var xcu = xugc.replace(/CUU|CUC|CUA|CUG/g,"Leu");
    var xcc = xcu.replace(/CCU|CCC|CCA|CCG/g,"Pro");
    var xcaa = xcc.replace(/CAU|CAC/g,"His");
    var xcab = xcaa.replace(/CAA|CAG/g,"Gln");
    var xcg = xcab.replace(/CGU|CGC|CGA|CGG/g,"Arg");
    var xaua = xcg.replace(/AUU|AUC|AUA/g,"Ile");
    var xaub = xaua.replace(/AUG/g,"Met");
    var xac = xaub.replace(/ACU|ACC|ACA|ACG/g,"Thr");
    var xaaa = xac.replace(/AAU|AAC/g,"Asn");
    var xaab = xaaa.replace(/AAA|AAG/g,"Lys");
    var xaga = xaab.replace(/AGU|AGC/g,"Ser");
    var xagb = xaga.replace(/AGA|AGG/g,"Arg");
    var xgu = xagb.replace(/GUU|GUC|GUA|GUG/g,"Val");
    var xgc = xgu.replace(/GCU|GCC|GCA|GCG/g,"Ala");
    var xgaa = xgc.replace(/GAU|GAC/g,"Asp");
    var xgab = xgaa.replace(/GAA|GAG/g,"Glu");
    var xgg = xgab.replace(/GGU|GGC|GGA|GGG/g,"Gly");
    document.getElementById('pro3').innerHTML = xgg;
}

function carac(string){
    var out = '';
    var filtro = 'autgcAUTGC .,-';
    for (var i=0; i<string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);
        return out;
}

function vibrate() {
	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
	if (navigator.vibrate) {
		navigator.vibrate(50);
	} else {
		navigator.vibrate(50);
	}
}