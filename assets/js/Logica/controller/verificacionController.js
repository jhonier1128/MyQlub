function verificacionPersona() {

    var loginn = localStorage.getItem("phoneUser")
    var IdUser = localStorage.getItem("IdUserRegis")

    const verificacionPersona = {

        IdPerson: IdUser,
        IdProject: "6",
        CodeVerification: $("#codigoUser").val(),
        Login: loginn,
        IsRecoverPassword: "false"
       
    }
    verificacion(verificacionPersona)

}

// function verificacionPersonaSend() {

//     var loginn = localStorage.getItem("phoneUserRecover")
//     var IdUser = localStorage.getItem("IdUserRegis")

//     const verificacionPersona = {

//         IdPerson: IdUser,
//         IdProject: "6",
//         CodeVerification: $("#codigoUserVeri").val(),
//         Login: loginn,
//         IsRecoverPassword: "true"
       
//     }
//     verificacion(verificacionPersona)

// }