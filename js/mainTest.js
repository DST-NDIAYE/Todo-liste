'use strict'

// var div = document.querySelector(".element") ;

// div.style.backgroundColor = "red" ;


// var paragraph = document.querySelector("p") ;

// // pour selectionner l"lement precedent

// h1 = paragraph.previousElementSibling ;

// h1.style.backgroundColor = "blue" ;

// // pour selectionner l"lement suivant
// var paragraphSuivante = paragraph.nextElementSibling ; 

// paragraphSuivante.style.backgroundColor = "blue" ;



// var a = document.createElement("a");
// a.href = "index.html";
// var texte = document.createTextNode("Diamou SErigne touba ndiaye") ;
// a.appendChild(texte);

// permet d'ajouter l'element en premier plan 
// div.prepend(a);

// // meme chose avec prepend
// div.insertBefore(a, div.firstChild);


// var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// tab.forEach(element => {
//     console.log(element + 1);
// });


// var buttons = document.getElementsByTagName('button');
// for (const button of buttons) {

//     button.addEventListener('click', (e) => {
//         console.log(`${e.target.textContent} est cliquer `);
//     });
// }



// var pers = [
//     {
//         nom: "a",
//         preno: "dst"
//     }, {
//         nom: "b",
//         preno: "dst"
//     }, {
//         nom: "c",
//         preno: "dst"
//     }, {
//         nom: "c",
//         preno: "dst"
//     }, {
//         nom: "d",
//         preno: "dst"
//     }, {
//         nom: "d",
//         preno: "dst"
//     }

// ] ;

// var nom = pers.filter(personne => personne.nom === "d");

// console.log(nom);




// var tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// var [ a , ...rest] = tableau ;

// console.log( rest);

// var {nom ,pren} = pers[0] ;
// console.log(nom , preno);


////////////////////////////////


// class personne{

//     constructor( prenom , nom , age ){

//         this.prenom = prenom ;
//         this.nom = nom ;
//         this.age = age ;  
//     }

//     affiche(){
//         console.log(dst.prenom , dst.nom , dst.age);
//     }
// }

// class Admin extends personne{

//     constructor( prenom , nom , age , status){

//         super(prenom , nom , age ) ;
//         this.status = status ;
//     }

//     affiche(){

//         return `${super.affiche()} ${this.nom} ${this.status} ` 
//     }
// }


// var dst = new personne("Diamou" , "serigne" , 99) ;

// var admin = new Admin("bassirou" , "ndiaye" , 99 , "etudiant") ;

// // dst.affiche() ;

// admin.affiche() ;

// var button = document.getElementsByTagName("button")[2] ;

// button.addEventListener("click",()=> clearInterval(mysetIntervale)) ;

// console.log("aaaaaaaaaaaaaaaaaaaaa");

// var mysetIntervale = setInterval(() => {
//     console.log("SetIntervalle()");
// }, 500);





// fetch('http://127.0.0.1:5501/js/TO%20DO%20LISTE/js/data.json')
//     .then(reponse => {
//         if (reponse.ok) {
//             return reponse.json()
//         } else {
//             throw new Error("Failed to connect to server");
//         }
//     })
//     .then(tableau => {

//         console.log(tableau);

//         tableau.forEach(taches => {
//             var h1 = document.createElement('h1');
//             h1.textContent = taches;
//             document.body.appendChild(h1);
//         });

//     })
//     .catch(e => {
//         console.error("un y a une erreur " + e);
//     })




    async function getTaches( ){

        const reponseDuServer = await fetch('http://127.0.0.1:5501/js/TO%20DO%20LISTE/js/data.json') ;

        if (reponseDuServer.ok) {
            return reponseDuServer.json()
        } 
            throw new Error("Failed to connect to server");
    }

try {
    
    getTaches().then(tableauDesTache => {

        console.log(tableauDesTache);

        tableauDesTache.forEach(taches => {
            var h1 = document.createElement('h1');
            h1.textContent = taches;
            document.body.appendChild(h1);
        });

    })
} catch (error) {
    console.error("un y a une erreur " +error);
}