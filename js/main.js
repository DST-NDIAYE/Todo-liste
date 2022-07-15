
var input = document.getElementById('input');
var add = document.getElementById('add') ;
var clear = document.getElementById('clear');
var url = document.getElementById('url');
var load = document.getElementById('load'); 
var list = document.getElementById('list'); 

var mesTaches = [ "Diamou" , "Serigne" , "Touba" ] ;


function AjoueTache(mesTaches) {
    if ( typeof mesTaches === "string" && mesTaches ) {
        
        const li = document.createElement("li");
        var bouttonRemouve = document.createElement("button");

        li.textContent = mesTaches;
        bouttonRemouve.textContent = "Supprimer" ;

        li.appendChild(bouttonRemouve) ;

        list.insertBefore(li, list.firstChild );

        bouttonRemouve.addEventListener( "click", ()=>{
            list.removeChild(bouttonRemouve.parentNode);
        })

    }
}

for (let i = 0; i < mesTaches.length; i++) {

   AjoueTache(mesTaches[i]);
}

function nouveauTAches() {
    
    if ( true) {
        input.focus() ;
        mesTaches.push(input.value);
    }

    list.innerHTML = " " ;
    for (let i = 0; i < mesTaches.length; i++) {

        AjoueTache(mesTaches[i]);
     }

}

add.addEventListener('click' , nouveauTAches)
input.addEventListener('keydown' , (e)=>{

        if (e.key == "Enter") {
            nouveauTAches() ;
        }
})