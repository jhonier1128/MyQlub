function recoveryPassword() {

    const correo = localStorage.getItem("correoRecovery");
    const numUser = localStorage.getItem("phoneUserRecover");

    const recoverPass = {

        Phone: numUser,
        Email: correo,
        Password:"",
        IdProject: "6"
    
    }

    recoveryPassword(recoverPass)

}

