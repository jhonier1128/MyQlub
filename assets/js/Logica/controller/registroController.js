function CrearPersona() {

    const registrarPersona = {

        PrimerNombre: $("#Nombre").val(),
        SegundoNombre: "",
        PrimerApellidos:  $("#Apellido").val(),
        SegundoApellido: "",
        Sexo: "",
        FechaNacimiento: "",
        TipoDocumento: "",
        Documento: $("#DocumentoRegistro").val(),
        EstadoCivil: "",
        Telefono: $("#Celular").val(),
        Celular: $("#Celular").val(),
        Direccion: "",
        Correo: $("#Correo").val(),
        IdProyecto: "6",
        IdRol: "1",

    }

    registro(registrarPersona)

}