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

var alumnos= [];

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

function mostrarTabla(){
          $("#cuerpo").html("");
    for (var i=0; i<alumnos.length;i++) {
        var name = alumnos[i].nombre;
        var surname = alumnos[i].apellido;
        var mail = alumnos[i].email;
        var age = alumnos[i].edad;
        var pic = alumnos[i].foto;
        $("#cuerpo").append("<tr><td>" + name + "</td><td>" + surname + "</td><td>" + mail + "</td><td>" + age + "</td><td>" + "<img width=50px src=" + pic + ">" + "</td><td>" + "</tr>") 
    };
}

$(document).ready(function(){
  $("#consultar").click(function(){
      $.ajax({
          url:"https://www.scaggiano.com.uy/json.js",
          success: function(data){
            alumnos = JSON.parse(data);
            $("#success").css("display", "block");
            $("#tabla").css("display", "table");
            mostrarTabla();
          },
          error: function(){
              $("#error").css("display", "block");
          },
          datatype:"jsonp",
      });
  });
});

function Persona(primNombre) {
    this.nombre = primNombre;
    this.apellido = "";
    this.email = "";
    this.edad = 0;
    this.foto = "";    
};

Persona.prototype.hola = function(){
    alert(this.nombre + this.apellido + this.edad + this.email + this.imagen)
};

$(document).ready(function () {
  $("#btnGuardar").click(function() {
    var nom = $("#nombre").val();
    var apell = $("#apellido").val();
    var mail = $("#email").val();
    var ed = $("#edad").val();
    var img = $("#imagen").val();

    var persona1 = new Persona(nom);
    persona1.apellido = apell;
    persona1.email = mail;
    persona1.edad = ed;
    persona1.imagen = img;

    alumnos.push(persona1);
    mostrarTabla();
    persona1.hola();  
    $('#myModal').modal('hide');
  });
});
