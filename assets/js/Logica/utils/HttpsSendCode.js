function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);

            const response = data.Data;


            if (data.CodeResponse == 200) {

                const PhoneRecover = response.Phone;
                const IdUserRecover = response.IdPerson;

                localStorage.setItem("phoneUserRecover", PhoneRecover);
                localStorage.setItem("IdUserRecovery", IdUserRecover);

                Swal.fire({
                    icon: 'success',
                    title: 'Te hemos enviado un codigo de verificacion a tu numero de celular por favor revisalo'

                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = URL_API_BASE;
                        location.replace("recoveryVerification.html");
                        location.href ="recoveryVerification.html"; 
                    }
                })
                // window.location.href = URL_API_BASE;
                // location.replace("recoveryVerification.html");
                // location.href ="recoveryVerification.html";

            } else if (data.CodeResponse == 409) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'NO te encuentras registrado en nuestro sistema',
                })

            }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}