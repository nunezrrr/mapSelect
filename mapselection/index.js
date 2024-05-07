/*      CODE BY RAY NUÑEZ
        FOR THE PURPOSE OF CURSOR WEEK 2023
        SCUFFED AF
        MINIMIZE BROWSER TO 80% AND FULLSCREEN (F11 FOR CHROME)          */

const slctAscent = document.getElementById('slctAscent');
const slctBind = document.getElementById('slctBind');
const slctBreeze = document.getElementById('slctBreeze');
const slctFracture = document.getElementById('slctFracture');
const slctHaven = document.getElementById('slctHaven');
const slctIcebox = document.getElementById('slctIcebox');
const slctLotus = document.getElementById('slctLotus');
const slctPearl = document.getElementById('slctPearl');
const slctSplit = document.getElementById('slctSplit');
let counter = 0;
let bans = 0;
let picks = 0;

let mapBans = [];

function addMap(map) {
    if (mapBans.includes(map)) {
        return;
    }
    else if (counter < 4) {
        addBan(map);
    }
    else if (counter < 7) {
        addPick(map);
    }
}

function addBan(map) {
    counter++;
    bans++;
    mapURL = "\'images//ban_" + map + ".png\'";
    banItem = "ban" + bans;
    let buffer = document.getElementById(banItem);
    buffer.style.backgroundImage = "url(" + mapURL + ")";

    mapBans.push(map);
}

function addPick(map) {
    counter++;
    picks++;
    mapURL = "\'images//pick_" + map + ".png\'";

    pickItem = "pick" + picks;
    let buffer = document.getElementById(pickItem);
    buffer.style.backgroundImage = "url(" + mapURL + ")";
}

slctAscent.addEventListener('click', () => addMap("ascent"))
slctBind.addEventListener('click', () => addMap("bind"))
slctBreeze.addEventListener('click', () => addMap("breeze"))

slctFracture.addEventListener('click', () => addMap("fracture"))
slctHaven.addEventListener('click', () => addMap("haven"))
slctIcebox.addEventListener('click', () => addMap("icebox"))

slctLotus.addEventListener('click', () => addMap("lotus"))
slctPearl.addEventListener('click', () => addMap("pearl"))
slctSplit.addEventListener('click', () => addMap("split"))



