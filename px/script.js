var a;
function right() {
    if(a==null || a==0) {        
        document.getElementById("display1").style.display="none";
        document.getElementById("display2").style.display="inline";
        document.getElementById("left").style.borderColor="#30363d";
        return a=1;
    } else if(a==1) {
        document.getElementById("display2").style.display="none";
        document.getElementById("display3").style.display="inline";
        document.getElementById("right").style.borderColor="#0d1117";
        return a=2;
    } else if(a==3) {
        document.getElementById("csstag").style.display="none";
        document.getElementById("end1").style.display="inline";
        document.getElementById("right").style.borderColor="#0d1117";
        return a=4;
    } else if(a==5) {
        document.getElementById("cssfile").style.display="none";
        document.getElementById("end2").style.display="inline";
        document.getElementById("right").style.borderColor="#0d1117";
        return a=6;
    }
}

function left() {
    if(a==1) {        
        document.getElementById("display2").style.display="none";
        document.getElementById("display1").style.display="inline";
        document.getElementById("left").style.borderColor="#0d1117";
        return a=0;
    } else if(a==2) {
        document.getElementById("display3").style.display="none";
        document.getElementById("display2").style.display="inline";
        document.getElementById("right").style.borderColor="#30363d";
        return a=1;
    } else if(a==3) {
        document.getElementById("csstag").style.display="none";
        document.getElementById("display3").style.display="inline";
        document.getElementById("right").style.borderColor="#0d1117";
        return a=2;
    } else if(a==4) {
        document.getElementById("end1").style.display="none";
        document.getElementById("csstag").style.display="inline";
        document.getElementById("right").style.borderColor="#30363d";
        return a=3;
    } else if(a==6) {
        document.getElementById("end2").style.display="none";
        document.getElementById("cssfile").style.display="inline";
        document.getElementById("right").style.borderColor="#30363d";
        return a=5;
    } else if(a==5) {
        document.getElementById("cssfile").style.display="none";
        document.getElementById("display3").style.display="inline";
        document.getElementById("right").style.borderColor="#30363d";
        return a=2;
    }
}

function option1() {
    document.getElementById("display3").style.display="none";
    document.getElementById("csstag").style.display="inline";
    document.getElementById("right").style.borderColor="#30363d";
    return a=3;
}

function option2() {
    document.getElementById("display3").style.display="none";
    document.getElementById("cssfile").style.display="inline";
    document.getElementById("right").style.borderColor="#30363d";
    return a=5;
}