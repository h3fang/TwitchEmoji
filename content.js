var LOG_TAG = 'Broadcast Helper - content.js : ';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function diableDouyuEffects() {
    $("[data-shield-type*='message'][data-shield-status*='0']").click();
    $("[data-shield-type*='videoBroadcast'][data-shield-status*='0']").click();
    $("[data-shield-type*='smallgift'][data-shield-status*='0']").click();
}

async function loadTwitchHelper() {
    var textareas = $(".js-chat_input.chat_text_input.form__input.ember-text-area.ember-view");

    var count = 0;

	// trying to get the chat element
    while (textareas.length == 0 && count <= 10) {
        textareas = $(".js-chat_input.chat_text_input.form__input.ember-text-area.ember-view");
        await sleep(1000);
        count = count + 1;
    }

    printToConsole(textareas.length);

    if (textareas.length == 0) {
        printToConsole("Max tries reached, bot stopped.")
        return false;
    }

    var chat = textareas[0];

    chat.addEventListener('keyup', function() {
        var str = chat.value;
        //printToConsole(str);

        str = str.replace(/\/an/gi, 'ANELE');
        str = str.replace(/\/ba/gi, 'BabyRage');
        str = str.replace(/\/bi/gi, 'BibleThump');
        str = str.replace(/\/bp/gi, 'BabyRage PJSalt');
        str = str.replace(/\/br/gi, 'BrokeBack');
        str = str.replace(/\/da/gi, 'DansGame');
        str = str.replace(/\/el/gi, 'EleGiggle');
        str = str.replace(/\/fa/gi, 'FailFish');
        str = str.replace(/\/ff/gi, 'FailFish');
        str = str.replace(/\/fr/gi, 'FrankerZ');
        str = str.replace(/\/ka/gi, 'Kappa');
        str = str.replace(/\/ke/gi, 'Keepo');
        str = str.replace(/\/kp/gi, 'KappaPride');
        str = str.replace(/\/kr/gi, 'Kreygasm');
        str = str.replace(/\/mi/gi, 'MingLee');
        str = str.replace(/\/mr/gi, 'MrDestructoid');
        str = str.replace(/\/op/gi, 'OpieOP');
        str = str.replace(/\/os/gi, 'OSfrog');
        str = str.replace(/\/pj/gi, 'PJSalt');
        str = str.replace(/\/po/gi, 'PogChamp');
        str = str.replace(/\/re/gi, 'ResidentSleeper');
        str = str.replace(/\/sm/gi, 'SMOrc');
        str = str.replace(/\/ss/gi, 'SSSsss');
        str = str.replace(/\/sw/gi, 'SwiftRage');
        str = str.replace(/\/wu/gi, 'WutFace');

        str = str.replace(/\/yoke/gi, '/me BabyRage WHAT A YOKE BabyRage');
        str = str.replace(/\/1/gi, '/me BabyRage NEVER LUCKY BabyRage');
        str = str.replace(/\/4/gi, '4Head');
        str = str.replace(/\/snipe/gi, "༼ຈل͜ຈ༽ﾉ·︻̷┻̿═━一 I'VE  GOT THE  STREAM IN MY SIGHTS.");
        str = str.replace(/\/shoot/gi, "SwiftRage =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿  BibleThump");
        chat.value = str;
        chat.scrollTop = chat.scrollHeight;
    }, false);

    printToConsole('Bot Loaded!');

	return true;
};

function printToConsole(msg) {
    console.log(LOG_TAG + msg);
};

$(document).ready(diableDouyuEffects);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        printToConsole(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension, url: " + request.url);
        if (request.updated) {
            loadTwitchHelper();
        }
        sendResponse({
            farewell: "goodbye"
        });
    }
);
