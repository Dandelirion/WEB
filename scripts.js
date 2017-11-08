function openPart(evt, tabName, tabPanelLevel) {
    var i, tabcontent1, tabcontent2, tablinks;
    if (tabPanelLevel == 1) {
        tabcontent1 = document.getElementsByClassName("tabcontent1");
        for (i = 0; i < tabcontent1.length; i++) {
            tabcontent1[i].style.display = "none";
        }
        tabcontent2 = document.getElementsByClassName("tabcontent2");
        for (i = 0; i < tabcontent2.length; i++) {
            tabcontent2[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink1");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
        if (tabName == 'pay')
            document.getElementsByClassName('any-bank')[0].click();
    } else {
        tabcontent2 = document.getElementsByClassName("tabcontent2");
        for (i = 0; i < tabcontent2.length; i++) {
            tabcontent2[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink2");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }               
}

function chooseReqVAT(evt, VATvalue) {
    reqVATs = document.getElementsByClassName("ReqVAT");
    for (i = 0; i < reqVATs.length; i++) {
        reqVATs[i].className = reqVATs[i].className.replace(" VATactive", "");
    }
    evt.currentTarget.className += " VATactive";
    document.getElementById("ReqVAT-holder").value = VATvalue;
}

function chooseSelfVAT(evt, VATvalue) {
    selfVATs = document.getElementsByClassName("SelfVAT");
    for (i = 0; i < selfVATs.length; i++) {
        selfVATs[i].className = selfVATs[i].className.replace(" VATactive", "");
    }
    evt.currentTarget.className += " VATactive";
    document.getElementById("SelfVAT-holder").value = VATvalue;
}