// Obtener el modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Obtener el boton que abre el modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");

// Obtener el elemento (span X) que cierra el modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
            
// Cuando el usuario hace clic en el botón abre el modal
btn1.onclick = function() {
    modal1.style.display = "block";
    }
btn2.onclick = function() {
    modal2.style.display = "block";
    }
btn3.onclick = function() {
    modal3.style.display = "block";
    }
btn4.onclick = function() {
    modal4.style.display = "block";
    }
btn5.onclick = function() {
    modal5.style.display = "block";
    }
btn6.onclick = function() {
    modal6.style.display = "block";
    }

// Cuando el usuario hace clic en el span (X) cierra el modal
span1.onclick = function() {
    modal1.style.display = "none";
    }
span2.onclick = function() {
    modal2.style.display = "none";
    }
span3.onclick = function() {
    modal3.style.display = "none";
    }
span4.onclick = function() {
    modal4.style.display = "none";
    }
span5.onclick = function() {
    modal5.style.display = "none";
    }
span6.onclick = function() {
    modal6.style.display = "none";
    }

// Cuando el usuario hace clic fuera del modal cierra el mismo
window.onclick = function(event) {
    if (event.target == modal1) {
    modal1.style.display = "none";
    }
    if (event.target == modal2) {
    modal2.style.display = "none";
    }
    if (event.target == modal3) {
    modal3.style.display = "none";
    }
    if (event.target == modal4) {
    modal4.style.display = "none";
    }
    if (event.target == modal5) {
    modal5.style.display = "none";
    }
    if (event.target == modal6) {
    modal6.style.display = "none";
    }
}