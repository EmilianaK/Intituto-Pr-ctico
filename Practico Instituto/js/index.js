$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#1abc9c');
});

$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
  $(this).toggleClass('green');
});



$(document).mouseup(function (e)
{
    var container = $(".login");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#loginform').removeClass('green');
    }
});

$(document).ready(function(){
  $("#consultar").click(function(){
      $("#cuerpo").html("");
      $.ajax({
          url:"http://www.scaggiano.com.uy/json.js",
          success: function(data){
              var alumnos = JSON.parse(data);
              $("#success").css("display", "block");
              $("#tabla").css("display", "table");

              for (var i=0; i<alumnos.length;i++) {
                  var name = alumnos[i].nombre;
                  var surname = alumnos[i].apellido;
                  var mail = alumnos[i].email;
                  var age = alumnos[i].edad;
                  var pic = alumnos[i].foto;
                  $("#cuerpo").append("<tr><td>" + name + "</td><td>" + surname + "</td><td>" + mail + "</td><td>" + age + "</td><td>" + "<img width=50px src=" + pic + ">" + "</td><td>" + "</tr>") 
              };
          },
          error: function(){
              $("#error").css("display", "block");
          },
          datatype:"jsonp",
      });
  });
});

function Persona (nom,apell,mail,ed,img) {
    this.nomnbre = "";
    this.apellido = "";
    this.email = "";
    this.edad = 0;
    this.imagen = "";    
};



Persona.prototype.newTableRow = function () {
    alert ("Hola, mi nombre es " + this.nombre)
};

$(document).ready(function () {
  $("#btnGuardar").click(function() {
    var nom = $("#nombre").val();
    var apell = $("#apellido").val();
    var mail = $("#email");
    var ed = $("#edad").val();
    var img = $("#imagen").val();

    var persona1 = new Persona(nom, apell, mail, ed, img);
    persona1.newTableRow()
  });
});