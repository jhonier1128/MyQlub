function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                
                 console.log(data);


                if (data.Codigo === 200 ){

                    window.location.href = URL_API_BASE;
                    location.replace("verificacion.html");
                    location.href ="verificacion.html";

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