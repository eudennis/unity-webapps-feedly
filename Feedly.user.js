// ==UserScript==
// @include        https://*.feedly.com/*
// @include        https://feedly.com/*
// @include        https://*.feedly.com/
// @include        http://feedly.com/*
// @require        utils.js
// ==/UserScript==

window.Unity = external.getUnityObject(1);

function unityLoaded() {
    var uri = window.location.toString();

    try {
        var title = uri.match(/^https:\/\/[^\/]+\/[^\/]+\/?/i)[0]
            .match('\/[^/]+\/?$')[0].match(/[^\/]+/)[0];

        var link = 'https://feedly.com/' + title;
        linkVisited(link, title);
    } catch (x) {}
    addActions();
}

Unity.init({ name: 'Feedly',
             domain: 'feedly.net',
	     homepage: 'https://feedly.net/',
             iconUrl: 'icon://unity-webapps-feedly',
             onInit: wrapCallback(unityLoaded) });