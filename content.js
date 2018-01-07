var LOG_TAG = "Stream Helper: ";

var chat = {};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function diableDouyuEffects() {
    $("[data-shield-type*='message'][data-shield-status*='0']").click();
    $("[data-shield-type*='videoBroadcast'][data-shield-status*='0']").click();
    $("[data-shield-type*='smallgift'][data-shield-status*='0']").click();

    console.log(LOG_TAG + "End of diableDouyuEffects()");
}

function getChat() {
    var textareas = $(".tw-textarea.tw-textarea--no-resize:first");

    if (textareas.length != 1) {
        console.error(LOG_TAG + "Unable to locate chat, " + textareas.length + " matching instances found.")
        return false;
    }

    return textareas[0];
}

function loadTwitchHelper() {
    var chat0 = getChat();

    if (chat == chat0) {
        return true;
    }
    else {
        chat = chat0;
    }

    chat.addEventListener('input', function() {
        var str = chat.value;
        //printToConsole(str);

        str = str.replace(/\/4/gi, '4Head ');
        str = str.replace(/\/an/gi, 'ANELE ');
        str = str.replace(/\/ba/gi, 'BabyRage ');
        str = str.replace(/\/bi/gi, 'BibleThump ');
        str = str.replace(/\/bl/gi, 'BlessRNG ');
        str = str.replace(/\/bp/gi, 'BabyRage PJSalt ');
        str = str.replace(/\/br/gi, 'BrokeBack ');
        str = str.replace(/\/da/gi, 'DansGame ');
        str = str.replace(/\/du/gi, 'duDudu ');
        str = str.replace(/\/el/gi, 'EleGiggle ');
        str = str.replace(/\/fa/gi, 'FailFish ');
        str = str.replace(/\/fr/gi, 'FrankerZ ');
        str = str.replace(/\/je/gi, 'Jebaited ');
        str = str.replace(/\/ka/gi, 'Kappa ');
        str = str.replace(/\/ke/gi, 'Keepo ');
        str = str.replace(/\/kp/gi, 'KappaPride ');
        str = str.replace(/\/ko/gi, 'KonCha ');
        str = str.replace(/\/kr/gi, 'Kreygasm ');
        str = str.replace(/\/mi/gi, 'MingLee ');
        str = str.replace(/\/mr/gi, 'MrDestructoid ');
        str = str.replace(/\/op/gi, 'OpieOP ');
        str = str.replace(/\/os/gi, 'OSfrog ');
        str = str.replace(/\/pj/gi, 'PJSalt ');
        str = str.replace(/\/po/gi, 'PogChamp ');
        str = str.replace(/\/re/gi, 'ResidentSleeper ');
        str = str.replace(/\/sm/gi, 'SMOrc ');
        str = str.replace(/\/ss/gi, 'SSSsss ');
        str = str.replace(/\/sw/gi, 'SwiftRage ');
        str = str.replace(/\/te/gi, 'TehePelo ');
        str = str.replace(/\/tp/gi, 'TPFufun ');
        str = str.replace(/\/tt/gi, 'TTours ');
        str = str.replace(/\/wu/gi, 'WutFace ');

        str = str.replace(/\/lucky/gi, '/me BabyRage NEVER LUCKY BabyRage');
        str = str.replace(/\/snipe/gi, "༼ຈل͜ຈ༽ﾉ·︻̷┻̿═━一 I'VE  GOT THE  STREAM IN MY SIGHTS.");
        str = str.replace(/\/shoot/gi, "SwiftRage =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿  BibleThump");
        str = str.replace(/\/tank/gi, "...... █ █ Kappa █ █ ]▄▄▄▄▄▄▄ ..............▂▄▅█████████▅▄▃▂ .............███████████████████] .............◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤");
        str = str.replace(/\/weeb/gi, 'Any weebs here? KonCha KonCha KonCha');
        str = str.replace(/\/fire/gi, 'PowerUpL TehePelo PowerUpR');
        chat.value = str;
        chat.scrollTop = chat.scrollHeight;
    }, true);

    console.log(LOG_TAG + "Loaded twitch helper!");

	return true;
};

window.onload = function() {
    //loadTwitchHelper();
    diableDouyuEffects();
};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(LOG_TAG + request.url + " updated");
        var r = loadTwitchHelper();
        sendResponse({
            result: r
        });
    }
);
