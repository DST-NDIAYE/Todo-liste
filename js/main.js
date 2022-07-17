
var input = document.getElementById('input');
var add = document.getElementById('add');
var clear = document.getElementById('clear');
var url = document.getElementById('url');
var load = document.getElementById('load');
var list = document.getElementById('list');


const stochage = new tableauStockage("tache")


// var mesTaches = ["Diamou", "Serigne", "Touba"];


var mesTaches = stochage.list;


function AjoueTache(mesTaches) {
    if (typeof mesTaches === "string" && mesTaches) {

        const li = document.createElement("li");
        var bouttonRemouve = document.createElement("button");

        li.textContent = mesTaches;
        bouttonRemouve.textContent = "Supprimer";

        li.appendChild(bouttonRemouve);

        list.insertBefore(li, list.firstChild);

        bouttonRemouve.addEventListener("click", () => {
            const texteAsupprimer =  bouttonRemouve.parentNode.firstChild.textContent; 
            console.log(texteAsupprimer);
            stochage.remove(texteAsupprimer)
            list.removeChild(bouttonRemouve.parentNode);
        })

        return true;
    }

    return false;
}

// for (let i = 0; i < mesTaches.length; i++) {
//    AjoueTache(mesTaches[i]);
// }

mesTaches.forEach(tache => AjoueTache(tache));

function nouveauTAches() {


    if (stochage.list.indexOf(input.value == -1 && AjoueTache(input.value))) {

        stochage.set(input.value);
        input.value = "";
    }

    // if (true) {
    //     input.focus();
    //     mesTaches.push(input.value);
    // }

    // list.innerHTML = " ";
    // for (let i = 0; i < mesTaches.length; i++) {

    //     AjoueTache(mesTaches[i]);
    // }
    input.focus();
}

add.addEventListener('click', nouveauTAches)
input.addEventListener('keydown', (e) => {

    if (e.key == "Enter") {
        nouveauTAches();
    }
})

clear.addEventListener('click', (e) => {

    list.innerHTML = " ";
});

load.addEventListener('click', (e) => {


});