/*global chrome*/
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'close_popup') {
        chrome.action.setPopup({ popup: '' });
    }
});