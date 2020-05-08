function Perfil() {
 window.location.href = "/registro.html"
}
$(document).ready(function () {
 $.postJSON('/register', function (object) {
  $("div").append(object[html]);
 });
});