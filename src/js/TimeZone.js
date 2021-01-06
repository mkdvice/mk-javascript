function calcTime() {
    // create a reference to page's elements
    var inHourBrazil = document.getElementById("inHourBrazil");
    var outHourFrance = document.getElementById("outHourFrance");

    // take and convert field content inHourBrazil
    var hourBrazil = Number(inHourBrazil.value);

    // if not fill or Not-a-Number
    if(inHourBrazil.value == '' || isNaN(hourBrazil)) {
        alert("Informe a hora no Brasil corretamente"); // show alert
        inHourBrazil.focus(); // focus in inHourBrazil
        return;
    }

    var hourFrance = hourBrazil + 5; // calc france hour

    // if pass 24 hours in France...
    if (hourFrance > 24) {
        hourFrance = hourFrance - 24; //... subtract 24
    }

    //show the answer (change outHourFrance element content)
    outHourFrance.textContent = "Hora na França: " + hourFrance.toFixed(2);
}
    // make a reference to btShow element e register event associate a function
    var btShow = document.getElementById("btShow");
    btShow.addEventListener("click", calcTime);