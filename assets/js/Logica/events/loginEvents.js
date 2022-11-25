const btnLogin = document.getElementById("buttonLogin"); 

btnLogin.addEventListener('click', () => {

    const loginLogin = document.getElementById("loginUser").value
    const PasswordLogin = document.getElementById("passwordUser").value


    if (loginLogin === null || loginLogin === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tus Login',

        })


    } else if (PasswordLogin === null || PasswordLogin === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tus Password',

        })

    }else {

        LoginPersona();

    }

})