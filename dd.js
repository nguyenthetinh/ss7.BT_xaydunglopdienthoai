let Mobile=function (pin,name) {
    this.names=name;
    this.pin=pin;
    this.trangthai=false;
    this.thugui=[];
    this.thuden=[];
    this.Msg="";
    this.soanthao=function (msg) {
        this.Msg=msg;
    };
    this.turnOff=function () {
        if(this.trangthai)
            this.trangthai=false;
    };
    this.turnOn=function () {
        if(!this.trangthai)
            this.trangthai=true;
    };
    this.xacpin=function () {
        if (this.pin<0)alert("MAy da het pin");
    };
    this.guiTN=function (phone) {
        this.thuden.push(this.Msg);
        phone.thugui.push(this.Msg);
    }
};
let nokia=new Mobile(100,"Nokia");
let iphone=new Mobile(100,"Iphone");
document.getElementById("pin1").innerHTML=nokia.pin;
document.getElementById("pin2").innerHTML=iphone.pin;
document.getElementById("rs").innerHTML=nokia.trangthai;
document.getElementById("tt").innerHTML=iphone.trangthai;
function soantinNokia(text) {
    nokia.soanthao(text);
}
function guitinnhanNokia() {
    nokia.guiTN(iphone);
    document.getElementById("thudeniphone").innerHTML=iphone.thugui.join("<br>");
    document.getElementById("thugui").innerHTML=iphone.thugui.join("<br>");
    nokia.pin--;
    document.getElementById("pin1").innerHTML=nokia.pin;
}
function soantiniphone(text) {
    iphone.soanthao(text);
}
function guitinnhaniphone() {
    iphone.guiTN(nokia);
    document.getElementById("thudennokia").innerHTML=nokia.thugui.join("<br>");
    document.getElementById("thugui2").innerHTML=nokia.thugui.join("<br>");
    iphone.pin--;
    document.getElementById("pin2").innerHTML=iphone.pin;
}
function sacnokia() {
    let sacde=setInterval(function () {
        nokia.pin++;
        document.getElementById("pin1").innerHTML=nokia.pin;
        if (nokia.pin >= 100)
            clearInterval(sacde)
    },1000);
}
function saciphone() {
    let sacdemay = setInterval(function () {
        iphone.pin++;
        document.getElementById("pin2").innerHTML = iphone.pin;
        if (iphone.pin >= 100)
            clearInterval(sacdemay);
    }, 1000);
}
function batNokia(){
    if (nokia.trangthai)
        nokia.turnOff();
    else
        nokia.turnOn();
    document.getElementById('rs').innerHTML=nokia.trangthai
}
function batiphone(){
    if (iphone.trangthai)
        iphone.turnOff();
    else
        iphone.turnOn();
    document.getElementById('tt').innerHTML=iphone.trangthai
}





