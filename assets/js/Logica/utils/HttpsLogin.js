function CallEndPointPost(url, jsonArgs) {

    var loading = document.getElementById('cargando')
    loading.style.display = 'flex'

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

                //  const dataData = data.Data;

                console.log(data);

                //  const idper = dataData.IdPerson;

                

                if (data.CodeResponse == 200 ){
                    loading.style.display = 'none'
                    // localStorage.setItem("idPersonaQlub",idper);
                    window.location.href = URL_API_BASE;
                    location.replace("Dash.html");
                    location.href ="Dash.html";

                }else if (data.CodeResponse == 402 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Credenciales Incorrectas',
                      })

                }else if (data.CodeResponse == 401 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No has verificado tu cuenta',
                      })

                }else if (data.CodeResponse == 404 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No te encuentras registrado',
                      })

                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No pudimos Hacer Nada',
                      })
                }
                
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}