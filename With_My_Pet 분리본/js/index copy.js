document.addEventListener("DOMContentLoaded",() => {
    // Listen for messages from the nav iframe
    window.addEventListener('message', (event) => {
        if (event.data.action === 'loadPage') {
            document.getElementById('contentFrame').src = event.data.pageUrl;
            // Update the nav iframe to highlight the active link
            document.getElementById('navIframe').contentWindow.postMessage({ action: 'highlight', pageUrl: event.data.pageUrl }, '*');
        }
    });

    // Initial load
    document.getElementById('contentFrame').src = 'home.html';

});