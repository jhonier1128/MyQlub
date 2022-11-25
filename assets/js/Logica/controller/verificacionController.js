function verificacionPersona() {

    var loginn = localStorage.getItem("numCell")

    const verificacionPersona = {

        idPersona: "",
        IdProyecto: "6",
        CodigoVerificacion: $("codigoUser").val(),
        Login: loginn,
       
    }
    verificacion(verificacionPersona)

}