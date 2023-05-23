
class Resultado {
    constructor(r) {
        this.r = parseFloat(r);
    }
}


let resultados = [];

document.querySelector("#btnCuadrado").addEventListener("click", () => {

    const l = parseFloat(document.querySelector("#lados").value);


    if (l != parseFloat(document.querySelector("#lados").value)) {
        const mensaje = "Ingrese un nro. que represente los metros de uno de los lados del cuadrado";

        document.querySelector("#pantallaCuadrado").innerHTML = mensaje;

        Toastify({
            text: "Cálculo no realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },            
        }).showToast();

    } else {
        const r = Math.pow(l, 2);
        document.querySelector("#pantallaCuadrado").innerHTML = r.toFixed(2);

        //Agrupo todos los resultados en un único array

        const unResultado = new Resultado(parseFloat(r.toFixed(2)));
        resultados.push(unResultado);

        //guardo el resultado en el localSorage
        localStorage.setItem("resultados", JSON.stringify(resultados));

        //recupero lo guardado en el localStorage

        const recuperado = localStorage.getItem("resultados");
        const convertido = JSON.parse(recuperado);

        //muestro los resultados guardados en el html

        let resultadosC = [];
        convertido.forEach(element => {
            resultadosC += `<p>${element.r}</p>`
        });
        document.querySelector("#segundaPantallaC").innerHTML = resultadosC;
                
        Toastify({
            text: "Cálculo realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`            
            stopOnFocus: true, // Prevents dismissing of toast on hover
            /*style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },*/
            offset: {
                x: 837, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 60 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            }
        }).showToast();

    }
})

document.querySelector("#borrarCuadrado").addEventListener("click", () => {
    const r = 0;
    const reset = "";
    document.querySelector("#pantallaCuadrado").innerHTML = r;
    document.querySelector("#lados").value = reset;
    document.querySelector("#segundaPantallaC").innerHTML = reset;
});

