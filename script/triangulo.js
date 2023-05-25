
class ResultadoT {
    constructor(r) {
        this.r = r;
    }
}

let resultadosT = [];

document.querySelector("#segundaPantalla").innerHTML= "Esperando datos para calcular el área";

document.querySelector("#btnTriangulo").addEventListener("click", () => {

    const b = parseFloat(document.querySelector("#base").value);
    const a = parseFloat(document.querySelector("#altura").value);

    if (b != parseFloat(document.querySelector("#base").value) || a != parseFloat(document.querySelector("#altura").value)) {
        const mensaje = "Ingrese nros. que representen los metros de la base y/o la altura";

        document.querySelector("#pantalla").innerHTML = mensaje;

        Toastify({
            text: "Cálculo no realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();

    } else {

        document.querySelector("#segundaPantalla").innerHTML= "";

        const r = (b * a) / 2;
        document.querySelector("#pantalla").innerHTML = r.toFixed(2) + " m2";

        //Agrupo todos los resultados en un único array

        const unResultado = new ResultadoT(parseFloat(r.toFixed(2)));
        resultadosT.push(unResultado);
        console.log(resultadosT);

        //guardo el resultado en el localStorage
        localStorage.setItem("resultadosT", JSON.stringify(resultadosT));

        //recupero lo guardado en el localStorage

        const recuperadoT = localStorage.getItem("resultadosT");
        const convertidoT = JSON.parse(recuperadoT);

        //muestro los resultados guardados en el html
        
        let resultados = '';
        convertidoT.forEach(element => {
            resultados += `<p>${element.r + " m2"}</p>`
        });
        document.querySelector("#segundaPantalla").innerHTML = resultados

        Toastify({
            text: "Cálculo realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }
})

document.querySelector("#borrarTriangulo").addEventListener("click", () => {
    const r = 0;
    const reset = "";
    const reset2 = "Esperando datos para calcular el área";
    document.querySelector("#pantalla").innerHTML = r;
    document.querySelector("#base").value = reset;
    document.querySelector("#altura").value = reset;
    document.querySelector("#segundaPantalla").innerHTML = reset2;
});















