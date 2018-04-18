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