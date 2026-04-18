let joinedWA = false;
let joinedGrub = false;

function login(){
let user = document.getElementById("user").value;
let pass = document.getElementById("pass").value;

if(user === "YanzzMEMBER" && pass === "12345678"){
document.querySelector(".login-box").style.display = "none";
document.getElementById("menu").classList.remove("hidden");
}
else if(user === "OWNER_YANZZ" && pass === "27051210#$+-"){
window.location.href = "admin.html";
}
else{
alert("Login salah!");
}
}

function joinWA(){
joinedWA = true;
window.open("https://whatsapp.com/channel/0029VbCWWN96rsQsfLC0B71f");
}

function joinGrub(){
joinedGrub = true;
window.open("https://chat.whatsapp.com/HZJVWkSLsECBV7f1S4FpxN");
}

function order(){
window.open("https://wa.me/6282164463311");
}

function orderMsg(text){
window.open("https://wa.me/6282164463311?text=" + encodeURIComponent(text));
}

function openReward(){
if(joinedWA && joinedGrub){
alert("Reward terbuka 😈");
}
else{
alert("Harus join dulu!");
}
}
