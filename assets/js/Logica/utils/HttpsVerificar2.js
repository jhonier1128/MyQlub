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

}



function CallEndPointPostVeri(url, jsonArgs) {

    var loading = document.getElementById('cargando')
    loading.style.display = 'flex'

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            loading.style.display = 'none'

            console.log(data);


            if (data.CodeResponse == 405) {

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
            loading.style.display = 'none'
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}