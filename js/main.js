
var input = document.getElementById('input');
var add = document.getElementById('add') ;
var clear = document.getElementById('clear');
var url = document.getElementById('url');
var load = document.getElementById('load'); 
var list = document.getElementById('list'); 

var mesTaches = [ "Diamou" , "Serigne" , "Touba" ] ;

for (let i = 0; i < mesTaches.length; i++) {

    if ( typeof mesTaches[i] === "string" && mesTaches[i] ) {
        
        const li = document.createElement("li");
        var bouttonRemouve = document.createElement("button");

        li.textContent = mesTaches[i];
        bouttonRemouve.textContent = "Supprimer" ;

        li.appendChild(bouttonRemouve) ;

        list.insertBefore(li, list.firstChild );

    }

    
}