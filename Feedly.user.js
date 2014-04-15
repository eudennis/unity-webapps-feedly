// ==UserScript==
// @include http://www.feedly.com/*
// @include https://www.feedly.com/*
// @include http://*.feedly.com/*
// @include https://*.feedly.com/*
// @require        utils.js
// ==/UserScript==

window.Unity = external.getUnityObject(1.0);

function unityLoaded() {
    var uri = window.location.toString();

    try {
        var title = uri.match(/^https:\/\/[^\/]+\/[^\/]+\/?/i)[0]
            .match('\/[^/]+\/?$')[0].match(/[^\/]+/)[0];

        var link = 'https://feedly.com/' + title;
        linkVisited(link, title);
    } catch (x) {}

    setInterval(wrapCallback(checkMessagesCount), 2000);
    checkMessagesCount();

    //addActions();
}

function getLabelWithCountFromName(str) {
    var linkXPath = '//div[@id="'+str+'_header"]';
    var countXPath = '//div[@id="'+str+'_header"]/div[1]';
    var nameXPath = '//div[@id="'+str+'_label"]';
    var linkNode = document.evaluate(linkXPath, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
    var countNode = document.evaluate(countXPath, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
    var nameNode = document.evaluate(nameXPath, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
    return { link: "http://"+document.domain+"/home#"+linkNode.getAttribute("data-selector-target"),
             count: countNode.textContent,
             name: nameNode.textContent };
}

function getLabels() {
    var i, res = [];

    var snapshot = document.evaluate('//div[@id="feedlyTabs"]/div[2]/div[@class="tab"]',
                                     document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (i = 0; i < snapshot.snapshotLength; i++) {
        var node = snapshot.snapshotItem(i);
        var item = getLabelWithCountFromName(node.id);
        res.push(item);
    }

    return res;
}

function checkMessagesCount() {

    var allNode = getLabelWithCountFromName("latesttab");

    var indicators = [];
    var i, labels = getLabels();
    for (i = 0; i < labels.length; i++) {
        if (labels[i].count > 0) 
            indicators.push({ name: labels[i].name, count: labels[i].count, callback: makeRedirector(labels[i].link) });
    }

    showIndicators(indicators);
    if (allNode.count>0) {
        Unity.Launcher.setCount(Number(allNode.count));
    } else {
        Unity.Launcher.clearCount();
    }
}

Unity.init({ name: 'Feedly',
             domain: 'feedly.com',
	         homepage: 'http://www.feedly.com/',
             iconUrl: 'icon://unity-webapps-feedly',
             onInit: wrapCallback(unityLoaded) });
