const btnComercio = document.getElementById("agregarComercioNav");
const btnComercio2 = document.getElementById("agregarComercioSanta");
const btnComercio3 = document.getElementById("agregarComercioAliado");

btnComercio.addEventListener('click', () => {

    const nomComer = document.getElementById("nomComercio").value
    const direComer = document.getElementById("DireComercio").value
    const imgComer = document.getElementById("ImgComercio").value
    // const cateComer = document.getElementById("passwordUser").value


    if (nomComer === null || nomComer === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa el nombre del comercio',

        })


    } else if (direComer === null || direComer === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa direccion del comercio',

        })

    } else if (imgComer === null || imgComer === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa una imagen',

        })

    }else {

        VamosAgregarComercioNavideño();

    }

});

