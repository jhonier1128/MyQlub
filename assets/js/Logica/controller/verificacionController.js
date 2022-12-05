function verificacionPersona() {

    var loginn = localStorage.getItem("phoneUser")
    var IdUser = localStorage.getItem("IdUserRegis")

    const verificacionPersona = {

        IdPerson: IdUser,
        IdProject: "6",
        CodeVerification: $("#codigoUser").val(),
        Login: loginn,
       
    }
    verificacion(verificacionPersona)

}