console.log("I will buy this Player ASAp");
var paragraph = document.createElement("P");
paragraph.innerHTML = "<span style='background-color:blue; color:white'>This Player will be bought ASAP</span>";
var paragraph = document.createElement("P");
paragraph.innerHTML = "<span style='background-color:blue; color:white'>This Player will be bought ASAP</span>";

//appending information paragragh
var paragraphElem = document.getElementsByClassName("HexagonContainer__hexagon___3lz4M ")[0].parentElement;
paragraphElem.setAttribute("style", "height:100%");
paragraphElem.appendChild(paragraph);


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var boughtPlayer = false;

async function buy() {
    if (document.getElementById("buy").disabled == false) {
        console.log(document.getElementById("buy").click());
        await sleep(1000);
        document.getElementsByClassName(" Button__button___3_Ozh Button__small___nAPfO    Buttons__blueButton___1rCTS")[0].click();
        await sleep(500);
        if (document.getElementById("accept movement").checked == false)
            document.getElementById("accept movement").click();
        await sleep(100);
        //Final Buying Confirmation Button
        //console.log(document.getElementById("firstButton").click());
        console.log(document.getElementById("firstButton"));

        await sleep(4000);
        console.log(document.getElementsByClassName("CloseButton__close___2Q_Qp")[0].click());

    }
    //else console.log("Button Not Enabled");

}

//buy();

window.setInterval(function () {
    buy();
}, 1000);
