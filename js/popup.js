

document.getElementById('buy').addEventListener('click', function () {
    console.log("buying");

    chrome.tabs.executeScript({
        file: 'js/content-action.js'
    });
});
