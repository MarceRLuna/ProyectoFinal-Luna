
//Acción al pulsar botón para mostrar "información importante"

document.querySelector("#btnInfo").addEventListener("click", () => {

    const infoMetro = document.querySelector("#infoMetro");

    fetch("./../data/data.json")
        .then(res => res.json())
        .then((data) => {
            data.forEach(info => {
                const li = document.createElement("li");
                li.innerText = info.title;
                infoMetro.append(li);
            });
        });

    fetch("./../data/data.json")
        .then(res => res.json())
        .then((data) => {
            data.forEach(info => {
                const li = document.createElement("li");
                li.innerText = info.body;
                infoMetro.append(li);
            });
        });
})



