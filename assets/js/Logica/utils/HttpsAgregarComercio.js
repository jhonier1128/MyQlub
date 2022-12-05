function CallEndPointPostComercio(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                

                if (data.Codigo === 200 ){

                    Swal.fire({
                        icon: 'success',
                        title: 'Comercio Ingresado Correctamente'
                        
                    }).then((result) => {
                        if(result.isConfirmed){
                            window.location.href = URL_API_BASE;
                            location.replace("Dash.html");
                            location.href ="Dash.html";   
                        }   
                    })

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