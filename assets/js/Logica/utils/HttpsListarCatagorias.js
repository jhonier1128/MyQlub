


// function cargar_provincias() {
//     var array = ;

//     array.sort();

//     addOptions("selectCategorias", array);
// }

function addOptions(domElement, array) {
    
    var select = document.getElementsByName(domElement)[0];

    for (value in array) {
        var option = document.createElement("option");
        option.text = array[value];
        select.add(option);
    }
}

document.addEventListener('DOMContentLoaded', e => {




    $.ajax({
        type: "GET",
        url: "https://myqlub.app/api/Comercios/GetListCategories",
        data: "",
        success: function (data) {

            for (const categorias of data) {


                console.log(categorias.DescriptionCategory);

                const melo = categorias.DescriptionCategory

                const listaa = {melo};

                addOptions("selectCategorias", listaa);

            }

        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
})