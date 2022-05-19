let buttonGenerate = document.getElementById("button1")
let deleteButton = document.getElementById("button2");
deleteButton.addEventListener("click", function () {
    window.location.reload();
});
buttonGenerate.addEventListener("click", function () {


    let name = document.getElementById("userName");

    let eta = document.getElementById("userEtà");
    let km = document.getElementById("userKm");

    let tariffaAlKilometro = km.value * 0.21;
    let myName = name.value;
    let myEta = eta.value;
    let myKm = km.value;



    if (myName <= 0 || myKm <= 0) {
        alert("Inserisci il tuo nome e cognome")
    }
    else if (myEta <= 0 || myKm <= 0) {
        alert("Wow non sei ancora nato? O sai viaggiare per distanze negative o nulle? inserisci dei valori positivi e maggiori di 0 nei campi richiesti")
    }
    else if (myKm > 0 && myKm < 10) {
        alert("La tua tratta non esiste, inserire un chilometraggio più grande")
    }
    else if (myKm > 2000) {
        alert("Seee vabbéé siamo Trenitalia mica Starlink..Inserisci un chilometraggio più corto")
    }
    else if (myEta > 0 && myEta < 5) {
        alert("Il biglietto per i minori di 6 anni è cmpletamente gratuito")

    }
    else {
        let showTicket = document.querySelector(".ticket-generator")
        showTicket.className = "d-block";
        let userNamePrint = document.querySelector(".nameChanged");
        userNamePrint.innerHTML = `${myName}`;
        console.log("userNamePrint ", userNamePrint, "myName", myName)
        if (myEta < 18) {
            prezzoBiglietto = tariffaAlKilometro - (tariffaAlKilometro * 0.2)
            let printTicket = document.querySelector(".costoBiglietto")

            printTicket.innerHTML = (` ${(Math.round(prezzoBiglietto * 100) / 100)} `)
        }
        else if (myEta > 65) {
            prezzoBiglietto = tariffaAlKilometro - (tariffaAlKilometro * 0.4)
            let printTicket = document.querySelector(".costoBiglietto")

            printTicket.innerHTML = (` ${(Math.round(prezzoBiglietto * 100) / 100)} `)
        }
        else {
            prezzoBiglietto = tariffaAlKilometro
            let printTicket = document.querySelector(".costoBiglietto")

            printTicket.innerHTML = (` ${(Math.round(prezzoBiglietto * 100) / 100)} `)

        }
    }

})

/* functione () {
    let userName = document.getElementById("floatingName");
    let userSurname = document.getElementById("floatingSurname");
    let userEta = document.getElementById("floatingEtà");
    let userKm = document.getElementById("floatingKm");
    let data = document.getElementById("floatingData");

    let tariffaAlKilometro = userKm.value * 0.21;
    let myName = userName.vlaue;
    let myEta = userEta.value;
    let myKm = userKm.value;
    

 

        if (myEta <= 0 || myKm <= 0) {
            alert("Wow non sei ancora nato? O sai viaggiare per distanze negative o nulle? inserisci dei valori positivi e maggiori di 0 nei campi richiesti")
        }
        else if (myKm > 0 && myKm < 10) {
            alert("La tua tratta non esiste, inserire un chilometraggio più grande")
        }
        else if (myKm > 2000) {
            alert("Seee vabbéé siamo Trenitalia mica Starlink..Inserisci un chilometraggio più corto")
        }
        else if (myEta > 0 && myEta < 5) {
            alert("Il biglietto per i minori di 6 anni è cmpletamente gratuito")
            let printTicket = document.getElementById("exercise")
            printTicket.innerHTML = (`<h1>Per Età: ${myEta} anni costo biglietto: 0$ </h1> `)
        }
        else {
            if (myEta < 18) {
                prezzoBiglietto = tariffaAlKilometro - (tariffaAlKilometro * 0.2)
                let printTicket = document.getElementById("exercise")

                printTicket.innerHTML = (`<li>Età: ${myEta} anni </li> <li>Chilometri da percorrere: ${myKm} Km</li> <li>Prezzo biglietto: ${(Math.round(prezzoBiglietto * 100) / 100)} $</li>`)
            }
            else if (myEta > 65) {
                prezzoBiglietto = tariffaAlKilometro - (tariffaAlKilometro * 0.4)
                let printTicket = document.getElementById("exercise")

                printTicket.innerHTML = (`<li>Età: ${myEta} anni </li> <li>Chilometri da percorrere: ${myKm} Km</li> <li>Prezzo biglietto: ${(Math.round(prezzoBiglietto * 100) / 100)} $</li>`)
            }
            else {
                prezzoBiglietto = tariffaAlKilometro
                let printTicket = document.getElementById("exercise")

                printTicket.innerHTML = (`<li>Età: ${myEta} anni </li> <li>Chilometri da percorrere: ${myKm} Km</li> <li>Prezzo biglietto: ${(Math.round(prezzoBiglietto * 100) / 100)} $</li>`)

            }
        }

    }
 */