function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                
                 console.log(data);


                if (data === true ){

                    window.location.href = URL_API_BASE;
                    location.replace("indexLogin.html");
                    location.href ="indexLogin.html";

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