/*  CODE BY RAY NUÑEZ
        MODIFIED BY CHASE G
        FOR CS WEEK VALO 2024
        SCUFFED AF
        MINIMIZE BROWSER TO 80% AND FULLSCREEN (F11 FOR CHROME)          */

const slctAscent = document.getElementById('slctAscent');
const slctBind = document.getElementById('slctBind');
const slctBreeze = document.getElementById('slctBreeze');
const slctIcebox = document.getElementById('slctIcebox');
const slctLotus = document.getElementById('slctLotus');
const slctSplit = document.getElementById('slctSplit');
const slctSunset = document.getElementById('slctSunset');
let counter = 0;
let bans = 0;
let picks = 0;

let mapBans = [];

function addMap(map) {
    if (mapBans.includes(map)) {
        return;
    }
    else if (counter < 2) {
        addBan(map);
    }
    else if (counter < 4) {
        addPick(map);
    }
    else if (counter < 6) {
        addBan(map);
    }
    else {
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

slctIcebox.addEventListener('click', () => addMap("icebox"))
slctLotus.addEventListener('click', () => addMap("lotus"))
slctSplit.addEventListener('click', () => addMap("split"))

slctSunset.addEventListener('click', () => addMap("sunset"))



