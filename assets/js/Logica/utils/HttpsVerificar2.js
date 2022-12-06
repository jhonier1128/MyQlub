function recuperarContrasenia() {

    const correo = localStorage.getItem("correoRecovery");
    const numUser = localStorage.getItem("phoneUserRecover");

    const recoverPass = {

        IdProject: "6",
        Phone: numUser,
        Email: correo,
        Password: ""
        
    
    }

    recoveryyPassword(recoverPass)


    // document.addEventListener('DOMContentLoaded', e => {

    //     const correo = localStorage.getItem("correoRecovery");
    //     const numUser = localStorage.getItem("phoneUserRecover");
   
    //     $.ajax({
    //         type: "POST",
    //         url: "https://apiamingenieria.app/api/User/RecoverForgottenPassword",
    //         data: {"IdProject": "6", "Phone": numUser, "Email": correo, "Password": "" },
    //         success: function (data) {
    
    //             if(data.CodeResponse === 200){

    //                 Swal.fire({
    //                     icon: 'success',
    //                     title: 'Nuevas credenciles de acceso generadas con exito'
                        
    //                 }).then((result) => {
    //                     if(result.isConfirmed){
    //                         window.location.href = URL_API_BASE;
    //                         location.replace("indexLogin.html");
    //                         location.href ="indexLogin.html";   
    //                     }   
    //                 })

    //             }else{
    //                 Swal.fire({
    //                     icon: 'error',
    //                     title: 'No pudimos modificar tu contraseña'
                        
    //                 })
    //             }
    
    //         },
    //         error: function () {
    //             alert("Ha ocurrido un error, por favor vuelva a intentarlo")
    //         }
    //     });
    // })

    
}



function CallEndPointPostVeri(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);


            if (data.CodeResponse == 400) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Codigo de verificacion incorrecto',
                })

            } else if (data.CodeResponse == 200) {

                // window.location.href = URL_API_BASE;
                // location.replace("indexLogin.html");
                // location.href = "indexLogin.html";

                // console.log("melo");

                recuperarContrasenia();

                

            }else{

                Swal.fire({
                    icon: 'error',
                    title: 'No pudimos modificar tu contraseña'
                    
                })

            }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}