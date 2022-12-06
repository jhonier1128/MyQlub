function CallEndPointPost(url, jsonArgs) {

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

                 const dataData = data.Data;

                console.log(data);

                 const idper = dataData.IdPerson;

                if (data.CodeResponse === 200 ){

                    localStorage.setItem("idPersonaQlub",idper);
                    window.location.href = URL_API_BASE;
                    location.replace("indexLogin.html");
                    location.href ="indexLogin.html";

                }else if (data.CodeResponse != 200 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No pudimos crear tus nuevas credenciales',
                      })

                }
                
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}