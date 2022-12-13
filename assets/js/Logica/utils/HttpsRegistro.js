function CallEndPointPost(url, jsonArgs) {

    var loading = document.getElementById('cargando')
    loading.style.display = 'flex'

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            loading.style.display = 'none'
                
                 console.log(data);

                 const response = data.Data;

                //  console.log(response.Phone);
                //  console.log(response.IdPerson);

                 

                if (data.CodeResponse == 200 ){

                    const PhoneRegis = response.Phone;
                    const NumIDRegis = response.IdPerson;

                    localStorage.setItem("phoneUser", PhoneRegis);
                    localStorage.setItem("IdUserRegis", NumIDRegis);
                    window.location.href = URL_API_BASE;
                    location.replace("verificacion.html");
                    location.href ="verificacion.html";

                }else if (data.CodeResponse == 409) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ya te encuentras registrado en nuestro sistema',
                    })

                }
        },
        error: function () {
            loading.style.display = 'none'
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}