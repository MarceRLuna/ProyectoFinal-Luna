
class ResultadoC {
    constructor(r) {
        this.r = r;
    }
}

let resultadosC = [];

document.querySelector("#btnCirculo").addEventListener("click", () => {
    
    const radio = parseFloat(document.querySelector("#radio").value);
    
    if (radio != parseFloat(document.querySelector("#radio").value)) {
        const mensaje = "Ingrese un nro. que represente los metros del radio del circulo";
        
        document.querySelector("#pantallaCirculo").innerHTML = mensaje;
        
        Toastify({
            text: "Cálculo no realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },            
        }).showToast();        

    } else {
        const resultado = Math.PI * Math.pow(radio, 2);
        document.querySelector("#pantallaCirculo").innerHTML = resultado.toFixed(2);


        //Agrupo todos los resultados en un único array

        const unResultado = new ResultadoC(parseFloat(resultado.toFixed(2)));
        resultadosC.push(unResultado);
        console.log(resultadosC);

        //guardo el resultado en el localSorage
        localStorage.setItem("resultadosC", JSON.stringify(resultadosC));

        //recupero lo guardado en el localStorage
        
        const recuperado = localStorage.getItem("resultadosC");
        const convertido = JSON.parse(recuperado);
        
        //muestro los resultados guardados en el html

        let resultadosCir = [];
        convertido.forEach(element => {
            resultadosCir += `<p>${element.r}</p>`
        });
        document.querySelector("#segundaPantallaCirculo").innerHTML = resultadosCir;

        Toastify({
            text: "Cálculo realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },            
        }).showToast();
        
    }  
})

document.querySelector("#borrarCirculo").addEventListener("click", () => {
    
    const r = 0;
    const reset = "";
    document.querySelector("#pantallaCirculo").innerHTML = r;
    document.querySelector("#radio").value = reset;
    document.querySelector("#segundaPantallaCirculo").innerHTML= reset;
});