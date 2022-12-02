function CallEndPointPost(url, jsonArgs) {



    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                
                 console.log(data);

                 const idper = data.Id;

                if (data.CodigoRespuesta === 200 ){

                    localStorage.setItem("idPersonaQlub",idper);
                    window.location.href = URL_API_BASE;
                    location.replace("Dash.html");
                    location.href ="Dash.html";

                }else{

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ya te encuentras registrado en nuestro sistema',
                      })

                }
                
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}