function CallEndPointPost(url, jsonArgs) {

    var loading = document.getElementById('cargando')
    loading.style.display = 'flex'

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            loading.style.display = 'none'

            const dataData = data.Data;

            console.log(data);

            const idper = dataData.IdPerson;

            if (data.CodeResponse === 200) {

                localStorage.setItem("idPersonaQlub", idper);
                Swal.fire({
                    icon: 'success',
                    title: 'Hemos cambiado tu contraseña con exito revisa tu correo...'

                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = URL_API_BASE;
                        location.replace("indexLogin.html");
                        location.href = "indexLogin.html";
                    }
                })


            } else if (data.CodeResponse != 200) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No pudimos crear tus nuevas credenciales',
                })

            }

        },
        error: function () {
            loading.style.display = 'none'
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}