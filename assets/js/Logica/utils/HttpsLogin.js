function CallEndPointPost(url, jsonArgs) {

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

                //  const dataData = data.Data;

                console.log(data);

                //  const idper = dataData.IdPerson;

                if (data.CodeResponse === 200 ){

                    // localStorage.setItem("idPersonaQlub",idper);
                    window.location.href = URL_API_BASE;
                    location.replace("Dash.html");
                    location.href ="Dash.html";

                }else if (data.CodeResponse === 400 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Credenciales Incorrectas',
                      })

                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No has verificado tu cuenta',
                      })
                }
                
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}